import { defineStore } from "pinia";
import { BigNumber, ContractTransaction, ethers } from "ethers";

import { useInfo } from "../info";
import { useUser } from "../user";
import { DEFAULT_CHAINID } from "../info";
import { useContracts } from "../../../utils";

// import { useToken } from './contract/token'
export const useFuel = defineStore("fuel", {
  state: () => {
    return {
      AdminWallet: "",
      balanceWater: 0,
      balanceElectricity: 0,
      balanceFuel: 0,
      minting: false,
      loadingInfo: false,
      chainId: DEFAULT_CHAINID,
    };
  },
  getters: {},
  actions: {
    // This will be called when connecting Wallet
    async loadFuelInfo() {
      console.log("Fuel info loading");
      await this.getFuelBalance();
      console.log("Fuel info loaded");
    },
    
    async getFuelBalance() {
      const { h2p } = useContracts(DEFAULT_CHAINID);
      const info = useInfo();
      const user = useUser();

      // getting index
      const waterIndex = info.definedIndex.water;
      console.log("waterIndex", waterIndex);
      const electricityIndex = info.definedIndex.electricity;
      console.log("electricityIndex", electricityIndex);
      const fuelIndex = info.definedIndex.fuel;
      console.log("waterIndex", fuelIndex);
      
      const wallerUser = user.wallet;
      console.log("wallerUser", wallerUser);

      this.minting = true;
      try {
        // balance of electricity
        this.balanceElectricity = Number(
          await h2p
            .connect(user.signer!)
            .balanceOf(wallerUser, electricityIndex)
        );
        // balance of water
        this.balanceWater = Number(
            await h2p.connect(user.signer!).balanceOf(wallerUser, waterIndex)
          );
        // balance of fuel
        this.balanceFuel = Number(
            await h2p.connect(user.signer!).balanceOf(wallerUser, fuelIndex)
          );
      } catch (e) {
        console.log("Error", e);
      }
    },

    // Minting electricity
    async mintFuel() {
      console.log("Fuel minting");

      // Setting Loading true
      const user = useUser();
      const info = useInfo();
      user.minting = true;

      const { h2p } = useContracts(DEFAULT_CHAINID);
      try {
        let tx = await h2p.connect(user.signer!).mintHydrogen();
        // console.log('before weight lastTx', tx.hash)
        await tx.wait();
        console.log("Transaction Hash", tx.hash);
        // console.log('after weight lastTx', tx.hash)
        // Updating new balance
        await this.getFuelBalance();
      } catch (e) {
        console.log(e);
      }
      user.minting = false;
      console.log("Fuel minted");
    },

    // Transferring electricity to Hydrogen Station
    async transferFuel(transferAmount: number) {
      const user = useUser();
      const info = useInfo();
      user.transferring = true;

      // Alerting if transferAmount > balance Water
      if (this.balanceFuel >= transferAmount) {
        console.log("Fuel transferring");
        // Setting Loading true
        const { h2p } = useContracts(DEFAULT_CHAINID);

        // Hard coding filling station
        const fillingStation = info.definedAddress.fillingStation;
        // getting fuel station address  (Receiver).
        const fuelStation = info.definedAddress.fuel;
        // getting electricity index
        const fuelIndex = info.definedIndex.fuel;

        try {
          let tx = await h2p
            .connect(user.signer!)
            .safeTransferFrom(
            fuelStation,
            fillingStation,
            fuelIndex,
              transferAmount.toBigNumber(4),
              "0x0000000000000000000000000000000000000000000000000000000000000000"
            );
          // console.log('before weight lastTx', tx.hash)
          await tx.wait();
          console.log("Transaction Hash", tx.hash);
          // console.log('after weight lastTx', tx.hash)
          // Updating balance
          await this.loadFuelInfo();
        } catch (e) {
          console.log(e);
        }
        console.log("Fuel transferred");
      } else {
        alert(
          `Cannot transfer more than possible current possible, i.e. ${this.balanceFuel} milliliters`
        );
      }

      user.transferring = false;
    },
  },
});
