/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface IValidatorInterface extends utils.Interface {
  functions: {
    "NAME()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "enable(bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "validCaller(address,bytes)": FunctionFragment;
    "validateSignature(address,bytes32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "NAME"
      | "VERSION"
      | "enable"
      | "supportsInterface"
      | "validCaller"
      | "validateSignature"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(functionFragment: "enable", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validCaller",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateSignature",
    values: [string, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IValidator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IValidatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    NAME(overrides?: CallOverrides): Promise<[string]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    enable(
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validCaller(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  NAME(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  enable(
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validCaller(
    caller: string,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validateSignature(
    account: string,
    userOpHash: BytesLike,
    signature: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    NAME(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    enable(data: BytesLike, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validCaller(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    NAME(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    enable(
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validCaller(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enable(
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validCaller(
      caller: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
