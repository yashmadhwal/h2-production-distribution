import { defineStore } from "pinia";
import { ethers, providers } from "ethers";

import { safe, useContracts } from "../../utils";

export type Chain = "97"; 
export const DEFAULT_CHAINID = "97" as Chain;

interface Roles {
  electricity: string;
  water: string;
  fuel: string;
}

export const useInfo = defineStore("info", {
  state: () => {
    return {
      definedAddress: {
        electricity: "",
        water: "",
        fuel: "",
        admin: "",
        fillingStation: ""
      },
      definedIndex: {
        electricity: 0,
        water: 0,
        fuel: 0,
      },
      definedPrice: {
        electricity: 0,
        water: 0,
      },
      scAddress: "",
      scDecimal: 0,
      infoLoaded: false,
      contractOwner: "",
    };
  },
  getters: {
    // signer: (state) => state._signer(),
  },
  actions: {
    async environmentsetup() {
      console.log("All information loading");
      // Avoiding Reloading of Dashboard
      if (this.infoLoaded === false) {
        // Address Info
        await this.loadingAddresses();
        // Index Info
        await this.loadingIndexes();
        // definedPrice
        await this.definedPrice();

        // Smart Contract Address:
        await this.smartContractAddress();

        // DecimalPoints
        await this.DecimalPoints();

        // ContractOwner
        await this.ContractOwner();

        // Checking That if the Information is loaded or not
        this.infoLoaded = true;
      }
      console.log("All information loaded");
    },

    async loadingAddresses() {
      const { h2p } = useContracts(DEFAULT_CHAINID);
      // Address Info
      console.log("Defined Addresses Loading");
      this.definedAddress.electricity = await h2p.RENEWABLES_PROVIDER();
      this.definedAddress.water = await h2p.WATER_PROVIDER();
      this.definedAddress.fuel = await h2p.FUEL_GENERATOR();
      this.definedAddress.admin = await h2p.owner();
      // this.definedAddress.fillingStation = await h2p.owner();
      this.definedAddress.fillingStation = '0xE157564860A93f8617ED8C81Ae985b8d55175db1';
      console.log("Defined Addresses Loaded");
    },

    async loadingIndexes() {
      const { h2p } = useContracts(DEFAULT_CHAINID);
      // Index Info
      console.log("Defined Index Loading");
      this.definedIndex.electricity = await h2p.RENEWABLES();
      this.definedIndex.water = await h2p.WATER();
      this.definedIndex.fuel = await h2p.HYDROGEN_FUEL();
      console.log("Defined Index Loaded");
    },

    async definedPrice() {
      const { h2p } = useContracts(DEFAULT_CHAINID);
      console.log("Defined Price Loading");
      this.definedPrice.electricity = await h2p.electricityRequired();
      this.definedPrice.water = await h2p.waterRequired();
      console.log("Defined Price Loaded");
    },

    async smartContractAddress() {
      const { h2p } = useContracts(DEFAULT_CHAINID);
      console.log("Smart Contract Address Loading");
      this.scAddress = await h2p.h2Token();
      console.log("Smart Contract Address Loaded");
    },

    async DecimalPoints() {
      const { h2p } = useContracts(DEFAULT_CHAINID);
      console.log("DecimalPoints Loading");
      this.scDecimal = await h2p.decimalUnit();
      console.log("DecimalPoints Loaded");
    },

    async ContractOwner() {
      const { h2p } = useContracts(DEFAULT_CHAINID);
      console.log("ContractOwner Loading");
      this.contractOwner = await h2p.owner();
      console.log("ContractOwner Loaded");
    },
  },
});
