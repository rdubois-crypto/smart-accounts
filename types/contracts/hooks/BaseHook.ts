/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface BaseHookInterface extends utils.Interface {
  functions: {
    "NAME()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "afterTransaction(address,uint256,bytes)": FunctionFragment;
    "beforeTransaction(address,uint256,bytes)": FunctionFragment;
    "hookType()": FunctionFragment;
    "install(bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "uninstall()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "NAME"
      | "VERSION"
      | "afterTransaction"
      | "beforeTransaction"
      | "hookType"
      | "install"
      | "supportsInterface"
      | "uninstall"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "afterTransaction",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeTransaction",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "hookType", values?: undefined): string;
  encodeFunctionData(functionFragment: "install", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "uninstall", values?: undefined): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "afterTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hookType", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "install", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uninstall", data: BytesLike): Result;

  events: {};
}

export interface BaseHook extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseHookInterface;

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

    afterTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    beforeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    hookType(overrides?: CallOverrides): Promise<[number]>;

    install(
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    uninstall(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  NAME(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  afterTransaction(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  beforeTransaction(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  hookType(overrides?: CallOverrides): Promise<number>;

  install(
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  uninstall(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    NAME(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    afterTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    beforeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    hookType(overrides?: CallOverrides): Promise<number>;

    install(data: BytesLike, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    uninstall(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    NAME(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    afterTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    beforeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    hookType(overrides?: CallOverrides): Promise<BigNumber>;

    install(
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uninstall(overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    afterTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    beforeTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    hookType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    install(
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uninstall(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
