export interface OverviewType {
    validator: string;
    operatorAddress: string;
    selfDelegateAddress: string;
    description: string;
    website: string;
}

export interface StatusType {
    inActiveSet?: string;
    jailed: boolean;
    tombstoned: boolean;
    commission: number;
    signedBlockWindow: number;
    missedBlockCounter: number;
    maxRate: string;
    status: number;
    condition: number;
}

export interface VotingPowerType {
    height: number;
    overall: TokenUnit;
    self: number;
    validatorStatus: number;
}

export interface ValidatorVPState {
    validatorVPExists: boolean;
    votingPower: VotingPowerType;
}

export interface ValidatorOverviewState {
    exists: boolean;
    overview: OverviewType;
    status: StatusType;
}

export interface ValidatorProfileState {
    exists: boolean;
    desmosProfile: DesmosProfile | null;
    operatorAddress: string;
    selfDelegateAddress: string;
}

export interface TransactionState {
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    offsetCount: number;
    data: Transactions[];
}

import { ApolloError } from '@apollo/client';

export type StakingType<T> = {
    data: T[];
    count: number | undefined;
    loading: boolean;
    error: ApolloError | undefined;
};

export interface DelegationType {
    address: string;
    amount: TokenUnit;
}

export interface RedelegationType {
    address: string;
    to: string;
    amount: TokenUnit;
    completionTime: string;
}

export interface UnbondingType {
    address: string;
    amount: TokenUnit;
    completionTime?: string;
}

export type DelegationsType = StakingType<DelegationType>;
export type RedelegationsType = StakingType<RedelegationType>;
export type UnbondingsType = StakingType<UnbondingType>;

export interface StakingState {
    tab: number;
}

export type Delegations = {
    coins: MsgCoin[];
    entries: Array<{
        balance: string;
    }>;
};

export type Redelegations = {
    delegator_address: string;
    validator_dst_address: string;
    entries: Array<{
        balance: string;
    }>;
};

export type Undelegations = {
    entries: Array<{
        balance: string;
    }>;
};