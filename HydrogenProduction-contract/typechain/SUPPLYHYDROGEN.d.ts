/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SUPPLYHYDROGENInterface extends ethers.utils.Interface {
  functions: {
    "FUEL_GENERATOR()": FunctionFragment;
    "HYDROGEN_FUEL()": FunctionFragment;
    "RENEWABLES()": FunctionFragment;
    "RENEWABLES_PROVIDER()": FunctionFragment;
    "WATER()": FunctionFragment;
    "WATER_PROVIDER()": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "decimalUnit()": FunctionFragment;
    "electricityRequired()": FunctionFragment;
    "h2Token()": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "mintEnergy(uint256)": FunctionFragment;
    "mintHydrogen()": FunctionFragment;
    "mintWater(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setElectricityRequirement(uint256)": FunctionFragment;
    "setEnergyProvider(address)": FunctionFragment;
    "setFuelProvider(address)": FunctionFragment;
    "setWaterProvider(address)": FunctionFragment;
    "setWaterRequirement(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uri(uint256)": FunctionFragment;
    "waterRequired()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "FUEL_GENERATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "HYDROGEN_FUEL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RENEWABLES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RENEWABLES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "WATER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "WATER_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "decimalUnit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "electricityRequired",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "h2Token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mintEnergy",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintHydrogen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintWater",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setElectricityRequirement",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEnergyProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFuelProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setWaterProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setWaterRequirement",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "waterRequired",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "FUEL_GENERATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "HYDROGEN_FUEL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "RENEWABLES", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "RENEWABLES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "WATER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "WATER_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decimalUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "electricityRequired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "h2Token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintEnergy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintHydrogen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintWater", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setElectricityRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEnergyProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFuelProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWaterProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWaterRequirement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "waterRequired",
    data: BytesLike
  ): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean] & {
    account: string;
    operator: string;
    approved: boolean;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]] & {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
  }
>;

export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber] & {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
  }
>;

export type URIEvent = TypedEvent<
  [string, BigNumber] & { value: string; id: BigNumber }
>;

export class SUPPLYHYDROGEN extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SUPPLYHYDROGENInterface;

  functions: {
    FUEL_GENERATOR(overrides?: CallOverrides): Promise<[string]>;

    HYDROGEN_FUEL(overrides?: CallOverrides): Promise<[BigNumber]>;

    RENEWABLES(overrides?: CallOverrides): Promise<[BigNumber]>;

    RENEWABLES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    WATER(overrides?: CallOverrides): Promise<[BigNumber]>;

    WATER_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    decimalUnit(overrides?: CallOverrides): Promise<[BigNumber]>;

    electricityRequired(overrides?: CallOverrides): Promise<[BigNumber]>;

    h2Token(overrides?: CallOverrides): Promise<[string]>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mintEnergy(
      _amountEnergy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintHydrogen(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintWater(
      _amountWater: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setElectricityRequirement(
      _electricityRequired: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEnergyProvider(
      _energy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFuelProvider(
      _fuel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWaterProvider(
      _water: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWaterRequirement(
      _waterRequired: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    waterRequired(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  FUEL_GENERATOR(overrides?: CallOverrides): Promise<string>;

  HYDROGEN_FUEL(overrides?: CallOverrides): Promise<BigNumber>;

  RENEWABLES(overrides?: CallOverrides): Promise<BigNumber>;

  RENEWABLES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  WATER(overrides?: CallOverrides): Promise<BigNumber>;

  WATER_PROVIDER(overrides?: CallOverrides): Promise<string>;

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  decimalUnit(overrides?: CallOverrides): Promise<BigNumber>;

  electricityRequired(overrides?: CallOverrides): Promise<BigNumber>;

  h2Token(overrides?: CallOverrides): Promise<string>;

  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mintEnergy(
    _amountEnergy: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintHydrogen(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintWater(
    _amountWater: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setElectricityRequirement(
    _electricityRequired: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEnergyProvider(
    _energy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFuelProvider(
    _fuel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWaterProvider(
    _water: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWaterRequirement(
    _waterRequired: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  waterRequired(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    FUEL_GENERATOR(overrides?: CallOverrides): Promise<string>;

    HYDROGEN_FUEL(overrides?: CallOverrides): Promise<BigNumber>;

    RENEWABLES(overrides?: CallOverrides): Promise<BigNumber>;

    RENEWABLES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    WATER(overrides?: CallOverrides): Promise<BigNumber>;

    WATER_PROVIDER(overrides?: CallOverrides): Promise<string>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    decimalUnit(overrides?: CallOverrides): Promise<BigNumber>;

    electricityRequired(overrides?: CallOverrides): Promise<BigNumber>;

    h2Token(overrides?: CallOverrides): Promise<string>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mintEnergy(
      _amountEnergy: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mintHydrogen(overrides?: CallOverrides): Promise<void>;

    mintWater(
      _amountWater: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setElectricityRequirement(
      _electricityRequired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setEnergyProvider(
      _energy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFuelProvider(_fuel: string, overrides?: CallOverrides): Promise<void>;

    setWaterProvider(_water: string, overrides?: CallOverrides): Promise<void>;

    setWaterRequirement(
      _waterRequired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    waterRequired(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ApprovalForAll(address,address,bool)"(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { account: string; operator: string; approved: boolean }
    >;

    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { account: string; operator: string; approved: boolean }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "TransferBatch(address,address,address,uint256[],uint256[])"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber[], BigNumber[]],
      {
        operator: string;
        from: string;
        to: string;
        ids: BigNumber[];
        values: BigNumber[];
      }
    >;

    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber[], BigNumber[]],
      {
        operator: string;
        from: string;
        to: string;
        ids: BigNumber[];
        values: BigNumber[];
      }
    >;

    "TransferSingle(address,address,address,uint256,uint256)"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        operator: string;
        from: string;
        to: string;
        id: BigNumber;
        value: BigNumber;
      }
    >;

    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        operator: string;
        from: string;
        to: string;
        id: BigNumber;
        value: BigNumber;
      }
    >;

    "URI(string,uint256)"(
      value?: null,
      id?: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { value: string; id: BigNumber }>;

    URI(
      value?: null,
      id?: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { value: string; id: BigNumber }>;
  };

  estimateGas: {
    FUEL_GENERATOR(overrides?: CallOverrides): Promise<BigNumber>;

    HYDROGEN_FUEL(overrides?: CallOverrides): Promise<BigNumber>;

    RENEWABLES(overrides?: CallOverrides): Promise<BigNumber>;

    RENEWABLES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    WATER(overrides?: CallOverrides): Promise<BigNumber>;

    WATER_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimalUnit(overrides?: CallOverrides): Promise<BigNumber>;

    electricityRequired(overrides?: CallOverrides): Promise<BigNumber>;

    h2Token(overrides?: CallOverrides): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintEnergy(
      _amountEnergy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintHydrogen(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintWater(
      _amountWater: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setElectricityRequirement(
      _electricityRequired: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEnergyProvider(
      _energy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFuelProvider(
      _fuel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWaterProvider(
      _water: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWaterRequirement(
      _waterRequired: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    waterRequired(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    FUEL_GENERATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    HYDROGEN_FUEL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RENEWABLES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RENEWABLES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WATER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WATER_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimalUnit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    electricityRequired(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    h2Token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintEnergy(
      _amountEnergy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintHydrogen(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintWater(
      _amountWater: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setElectricityRequirement(
      _electricityRequired: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEnergyProvider(
      _energy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFuelProvider(
      _fuel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWaterProvider(
      _water: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWaterRequirement(
      _waterRequired: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uri(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    waterRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
