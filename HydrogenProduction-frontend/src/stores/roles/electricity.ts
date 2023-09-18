import { defineStore } from "pinia";
import { BigNumber, ContractTransaction, ethers } from "ethers";

import { useInfo } from "../info";
import { useUser } from "../user";
import { DEFAULT_CHAINID } from "../info";
import { useContracts } from "../../../utils";

// import { useToken } from './contract/token'
export const useElectricity = defineStore("electricity", {
  state: () => {
    return {
      AdminWallet: "",
      balanceElectricity: 0,
      minting: false,
      loadingInfo: false,
      chainId: DEFAULT_CHAINID,
    };
  },
  getters: {},
  actions: {
    // This will be called when connecting Wallet
    async loadElectricityInfo() {
      console.log("Electricity info loading");
      await this.getElectricityBalance();
      console.log("Electricity info loaded");
    },
    
    async getElectricityBalance() {
      const { h2p } = useContracts(DEFAULT_CHAINID);
      // getting index
      const info = useInfo();
      const user = useUser();
      const electricityIndex = info.definedIndex.electricity;
      const wallerUser = user.wallet;
      console.log("electricityIndex", electricityIndex);
      console.log("wallerUser", wallerUser);
      this.minting = true;
      try {
        this.balanceElectricity = Number(
          await h2p
            .connect(user.signer!)
            .balanceOf(wallerUser, electricityIndex)
        );
      } catch (e) {
        console.log("Error", e);
      }
    },

    // Minting electricity
    async mintElectricity(mintAmount: number) {
      console.log("Electricity minting");

      // Setting Loading true
      const user = useUser();
      const info = useInfo();
      user.minting = true;

      const { h2p } = useContracts(DEFAULT_CHAINID);
      try {
        let tx = await h2p.connect(user.signer!).mintEnergy(mintAmount.toBigNumber(4));
        // console.log('before weight lastTx', tx.hash)
        await tx.wait();
        console.log("Transaction Hash", tx.hash);
        // console.log('after weight lastTx', tx.hash)
        // Updating new balance
        await this.loadElectricityInfo();
      } catch (e) {
        console.log(e);
      }
      user.minting = false;
      console.log("Electricity minted");
    },

    // Transferring electricity to Hydrogen Station
    async transferElectricity(transferAmount: number) {
      const user = useUser();
      const info = useInfo();
      user.transferring = true;

      // Alerting if transferAmount > balance Water
      if (this.balanceElectricity >= transferAmount) {
        console.log("Electricity transferring");
        // Setting Loading true
        const { h2p } = useContracts(DEFAULT_CHAINID);

        // getting electricity station address (Sender).
        const electricityStation = info.definedAddress.electricity;
        // getting fuel station address  (Receiver).
        const fuelStation = info.definedAddress.fuel;
        // getting electricity index
        const electricityIndex = info.definedIndex.electricity;

        try {
          let tx = await h2p
            .connect(user.signer!)
            .safeTransferFrom(
              electricityStation,
              fuelStation,
              electricityIndex,
              transferAmount.toBigNumber(4),
              "0x0000000000000000000000000000000000000000000000000000000000000000"
            );
          // console.log('before weight lastTx', tx.hash)
          await tx.wait();
          console.log("Transaction Hash", tx.hash);
          // console.log('after weight lastTx', tx.hash)
          // Updating balance
          await this.loadElectricityInfo();
        } catch (e) {
          console.log(e);
        }
        console.log("Electricity transferred");
      } else {
        alert(
          `Cannot transfer more than possible current possible, i.e. ${this.balanceElectricity} KhW`
        );
      }

      user.transferring = false;
    },
  },
});
