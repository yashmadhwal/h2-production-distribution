import { defineStore } from "pinia";
import { BigNumber, ContractTransaction, ethers } from "ethers";

import { useInfo } from "../info";
import { useUser } from "../user";
import { DEFAULT_CHAINID } from "../info";
import { useContracts } from "../../../utils";

// import { useToken } from './contract/token'
export const useFilling = defineStore("filling", {
  state: () => {
    return {
      AdminWallet: "",
      //   balanceWater: 0,
      //   balanceElectricity: 0,
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

      //  //getting index
      //   const waterIndex = info.definedIndex.water;
      //   console.log("waterIndex", waterIndex);
      //   const electricityIndex = info.definedIndex.electricity;
      //   console.log("electricityIndex", electricityIndex);
      const fuelIndex = info.definedIndex.fuel;
      console.log("waterIndex", fuelIndex);

      const wallerUser = user.wallet;
      console.log("wallerUser", wallerUser);

      this.minting = true;
      try {
        // // balance of electricity
        // this.balanceElectricity = Number(
        //   await h2p
        //     .connect(user.signer!)
        //     .balanceOf(wallerUser, electricityIndex)
        // );
        // // balance of water
        // this.balanceWater = Number(
        //     await h2p.connect(user.signer!).balanceOf(wallerUser, waterIndex)
        //   );
        // balance of fuel
        this.balanceFuel = Number(
          await h2p.connect(user.signer!).balanceOf(wallerUser, fuelIndex)
        );
      } catch (e) {
        console.log("Error", e);
      }
    },

    async fillCar() {
      console.log("Car - Filling");

      const user = useUser();
      const info = useInfo();
      user.transferring = true;

      // Alerting if transferAmount > balance Water
      if (this.balanceFuel >= 60000) {
        console.log("Fuel transferring");
        // Setting Loading true
        const { h2p } = useContracts(DEFAULT_CHAINID);

        // Hard coding filling station
        const fillingStation = "0xE157564860A93f8617ED8C81Ae985b8d55175db1";
        // getting fuel station address  (Receiver).
        const fuelStation = info.definedAddress.fuel;
        // getting electricity index
        const fuelIndex = info.definedIndex.fuel;
        try {
          let tx = await h2p
            .connect(user.signer!)
            .safeTransferFrom(
              fillingStation,
              "0x0000000000000000000000000000000000000001",
              fuelIndex,
              60000,
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
      console.log("Car - Filled");
    },
    async fillBus() {
      console.log("Bus - Filling");
      const user = useUser();
      const info = useInfo();
      user.transferring = true;

      // Alerting if transferAmount > balance Water
      if (this.balanceFuel >= 230000) {
        console.log("Fuel transferring");
        // Setting Loading true
        const { h2p } = useContracts(DEFAULT_CHAINID);

        // Hard coding filling station
        const fillingStation = "0xE157564860A93f8617ED8C81Ae985b8d55175db1";
        // getting fuel station address  (Receiver).
        const fuelStation = info.definedAddress.fuel;
        // getting electricity index
        const fuelIndex = info.definedIndex.fuel;
        try {
          let tx = await h2p
            .connect(user.signer!)
            .safeTransferFrom(
              fillingStation,
              "0x0000000000000000000000000000000000000001",
              fuelIndex,
              230000,
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
      console.log("Bus - Filled");
    },
    async fillTruck() {
      console.log("Truck - Filling");
      const user = useUser();
      const info = useInfo();
      user.transferring = true;

      // Alerting if transferAmount > balance Water
      if (this.balanceFuel >= 500000) {
        console.log("Fuel transferring");
        // Setting Loading true
        const { h2p } = useContracts(DEFAULT_CHAINID);

        // Hard coding filling station
        const fillingStation = "0xE157564860A93f8617ED8C81Ae985b8d55175db1";
        // getting fuel station address  (Receiver).
        const fuelStation = info.definedAddress.fuel;
        // getting electricity index
        const fuelIndex = info.definedIndex.fuel;

        try {
          let tx = await h2p
            .connect(user.signer!)
            .safeTransferFrom(
              fillingStation,
              "0x0000000000000000000000000000000000000001",
              fuelIndex,
              500000,
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
      console.log("Truck - Filled");
    },
  },
});
