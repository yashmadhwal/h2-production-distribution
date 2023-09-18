import { defineStore } from "pinia";

import { BigNumber, ContractTransaction, ethers } from 'ethers'

import { useInfo } from "../info";
import { useUser } from "../user";
import { DEFAULT_CHAINID } from "../info";
import { useContracts } from "../../../utils";

// import { useToken } from './contract/token'
export const useWater = defineStore("water", {
  state: () => {
    return {
      AdminWallet: "",
      balanceWater: 0,
      minting: false,
      loadingInfo: false,
      chainId: DEFAULT_CHAINID,
    };
  },
  getters: {},
  actions: {
    // This will be called when connecting Wallet
    async loadWaterInfo() {
      console.log("Water info loading");
      await this.getWaterBalance();
      console.log("Water info loaded");
    },
    
    async getWaterBalance() {
      const { h2p } = useContracts(DEFAULT_CHAINID);
      // getting index
      const info = useInfo();
      const user = useUser();
      const waterIndex = info.definedIndex.water;
      const wallerUser = user.wallet;
      console.log("waterIndex", waterIndex);
      console.log("wallerUser", wallerUser);
      this.minting = true;
      try {
         const _balWater = Number(
          await h2p.connect(user.signer!).balanceOf(wallerUser, waterIndex)
        );

        this.balanceWater = _balWater
      } catch (e) {
        console.log("Error", e);
      }
    },

    // Minting Water
    async mintWater(mintAmount: number) {
      console.log("water minting");

      // Setting Loading true
      const user = useUser();
      const info = useInfo();
      user.minting = true;

      const { h2p } = useContracts(DEFAULT_CHAINID);
      try {
        let tx = await h2p.connect(user.signer!).mintWater(mintAmount.toBigNumber(4));
        // console.log('before weight lastTx', tx.hash)
        await tx.wait();
        console.log("Transaction Hash", tx.hash);
        // console.log('after weight lastTx', tx.hash)
        // Updating new balance
        await this.loadWaterInfo();
      } catch (e) {
        console.log(e);
      }
      user.minting = false;
      console.log("water minted");
    },

    // Transferring Water to Hydrogen Station
    async transferWater(transferAmount: number) {
      const user = useUser();
      const info = useInfo();
      user.transferring = true;

      // Alerting if transferAmount > balance Water
      if (this.balanceWater >= transferAmount) {
        console.log("Water transferring");
        // Setting Loading true
        const { h2p } = useContracts(DEFAULT_CHAINID);

        // getting water station address (Sender).
        const waterStation = info.definedAddress.water;
        // getting fuel station address  (Receiver).
        const fuelStation = info.definedAddress.fuel;
        // getting water index
        const waterIndex = info.definedIndex.water;

        try {
          let tx = await h2p
            .connect(user.signer!)
            .safeTransferFrom(
              waterStation,
              fuelStation,
              waterIndex,
              transferAmount.toBigNumber(4),
              "0x0000000000000000000000000000000000000000000000000000000000000000"
            );
          // console.log('before weight lastTx', tx.hash)
          await tx.wait();
          console.log("Transaction Hash", tx.hash);
          // console.log('after weight lastTx', tx.hash)
          // Updating balance
          await this.loadWaterInfo();

        } catch (e) {
          console.log(e);
        }
        console.log("Water transferred");
      } else {
        alert(
          `Cannot transfer more than possible current possible, i.e. ${this.balanceWater} liters`
        );
      }

      user.transferring = false;
    },
  },
});
