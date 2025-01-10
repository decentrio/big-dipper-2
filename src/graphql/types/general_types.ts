import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ActionCoin: any;
  ActionDelegation: any;
  ActionPagination: any;
  ActionRedelegation: any;
  ActionUnbondingDelegation: any;
  _text: any;
  bigint: any;
  coin: any;
  dec_coin: any;
  json: any;
  jsonb: any;
  ms_coin: any;
  ms_unlock_entry: any;
  numeric: any;
  smallint: any;
  timestamp: any;
};

export type ActionAddress = {
  __typename?: 'ActionAddress';
  address: Scalars['String'];
};

export type ActionBalance = {
  __typename?: 'ActionBalance';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
};

export type ActionDelegationResponse = {
  __typename?: 'ActionDelegationResponse';
  delegations?: Maybe<Array<Maybe<Scalars['ActionDelegation']>>>;
  pagination?: Maybe<Scalars['ActionPagination']>;
};

export type ActionDelegationReward = {
  __typename?: 'ActionDelegationReward';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
  validator_address: Scalars['String'];
};

export type ActionRedelegationResponse = {
  __typename?: 'ActionRedelegationResponse';
  pagination?: Maybe<Scalars['ActionPagination']>;
  redelegations?: Maybe<Array<Maybe<Scalars['ActionRedelegation']>>>;
};

export type ActionUnbondingDelegationResponse = {
  __typename?: 'ActionUnbondingDelegationResponse';
  pagination?: Maybe<Scalars['ActionPagination']>;
  unbonding_delegations?: Maybe<Array<Maybe<Scalars['ActionUnbondingDelegation']>>>;
};

export type ActionValidatorCommissionAmount = {
  __typename?: 'ActionValidatorCommissionAmount';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']>>;
  _eq?: InputMaybe<Array<Scalars['String']>>;
  _gt?: InputMaybe<Array<Scalars['String']>>;
  _gte?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Array<Scalars['String']>>;
  _lte?: InputMaybe<Array<Scalars['String']>>;
  _neq?: InputMaybe<Array<Scalars['String']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  address: Scalars['String'];
  /** An array relationship */
  feeGrantAllowancesByGranterAddress: Array<Fee_Grant_Allowance>;
  /** An aggregate relationship */
  feeGrantAllowancesByGranterAddress_aggregate: Fee_Grant_Allowance_Aggregate;
  /** An array relationship */
  fee_grant_allowances: Array<Fee_Grant_Allowance>;
  /** An aggregate relationship */
  fee_grant_allowances_aggregate: Fee_Grant_Allowance_Aggregate;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  /** An array relationship */
  proposals: Array<Proposal>;
  /** An aggregate relationship */
  proposals_aggregate: Proposal_Aggregate;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Info_Aggregate;
  /** An object relationship */
  vesting_account?: Maybe<Vesting_Account>;
  /** An array relationship */
  vesting_accounts: Array<Vesting_Account>;
  /** An aggregate relationship */
  vesting_accounts_aggregate: Vesting_Account_Aggregate;
};


/** columns and relationships of "account" */
export type AccountFeeGrantAllowancesByGranterAddressArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountFeeGrantAllowancesByGranterAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountFee_Grant_AllowancesArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountFee_Grant_Allowances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountVesting_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountVesting_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  feeGrantAllowancesByGranterAddress?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  feeGrantAllowancesByGranterAddress_aggregate?: InputMaybe<Fee_Grant_Allowance_Aggregate_Bool_Exp>;
  fee_grant_allowances?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  fee_grant_allowances_aggregate?: InputMaybe<Fee_Grant_Allowance_Aggregate_Bool_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Bool_Exp>;
  proposals?: InputMaybe<Proposal_Bool_Exp>;
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Bool_Exp>;
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>;
  vesting_accounts?: InputMaybe<Vesting_Account_Bool_Exp>;
  vesting_accounts_aggregate?: InputMaybe<Vesting_Account_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint on columns "address" */
  AccountPkey = 'account_pkey'
}

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  feeGrantAllowancesByGranterAddress?: InputMaybe<Fee_Grant_Allowance_Arr_Rel_Insert_Input>;
  fee_grant_allowances?: InputMaybe<Fee_Grant_Allowance_Arr_Rel_Insert_Input>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Arr_Rel_Insert_Input>;
  proposal_votes?: InputMaybe<Proposal_Vote_Arr_Rel_Insert_Input>;
  proposals?: InputMaybe<Proposal_Arr_Rel_Insert_Input>;
  validator_infos?: InputMaybe<Validator_Info_Arr_Rel_Insert_Input>;
  vesting_account?: InputMaybe<Vesting_Account_Obj_Rel_Insert_Input>;
  vesting_accounts?: InputMaybe<Vesting_Account_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  address?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  __typename?: 'account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
  data: Account_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** on_conflict condition type for table "account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint;
  update_columns?: Array<Account_Update_Column>;
  where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  address?: InputMaybe<Order_By>;
  feeGrantAllowancesByGranterAddress_aggregate?: InputMaybe<Fee_Grant_Allowance_Aggregate_Order_By>;
  fee_grant_allowances_aggregate?: InputMaybe<Fee_Grant_Allowance_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>;
  vesting_account?: InputMaybe<Vesting_Account_Order_By>;
  vesting_accounts_aggregate?: InputMaybe<Vesting_Account_Aggregate_Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  address: Scalars['String'];
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Address = 'address'
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "account_summary" */
export type Account_Summary = {
  __typename?: 'account_summary';
  address?: Maybe<Scalars['String']>;
  balances?: Maybe<Array<Scalars['coin']>>;
};

/** aggregated selection of "account_summary" */
export type Account_Summary_Aggregate = {
  __typename?: 'account_summary_aggregate';
  aggregate?: Maybe<Account_Summary_Aggregate_Fields>;
  nodes: Array<Account_Summary>;
};

/** aggregate fields of "account_summary" */
export type Account_Summary_Aggregate_Fields = {
  __typename?: 'account_summary_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Account_Summary_Max_Fields>;
  min?: Maybe<Account_Summary_Min_Fields>;
};


/** aggregate fields of "account_summary" */
export type Account_Summary_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Summary_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "account_summary". All fields are combined with a logical 'AND'. */
export type Account_Summary_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Summary_Bool_Exp>>;
  _not?: InputMaybe<Account_Summary_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Summary_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  balances?: InputMaybe<Coin_Array_Comparison_Exp>;
};

/** aggregate max on columns */
export type Account_Summary_Max_Fields = {
  __typename?: 'account_summary_max_fields';
  address?: Maybe<Scalars['String']>;
  balances?: Maybe<Array<Scalars['coin']>>;
};

/** aggregate min on columns */
export type Account_Summary_Min_Fields = {
  __typename?: 'account_summary_min_fields';
  address?: Maybe<Scalars['String']>;
  balances?: Maybe<Array<Scalars['coin']>>;
};

/** Ordering options when selecting data from "account_summary". */
export type Account_Summary_Order_By = {
  address?: InputMaybe<Order_By>;
  balances?: InputMaybe<Order_By>;
};

/** select columns of table "account_summary" */
export enum Account_Summary_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balances = 'balances'
}

/** Streaming cursor of the table "account_summary" */
export type Account_Summary_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Summary_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Summary_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  balances?: InputMaybe<Array<Scalars['coin']>>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
  /** column name */
  Address = 'address'
}

export type Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Account_Bool_Exp;
};

/** columns and relationships of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis = {
  __typename?: 'average_block_time_from_genesis';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate = {
  __typename?: 'average_block_time_from_genesis_aggregate';
  aggregate?: Maybe<Average_Block_Time_From_Genesis_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_From_Genesis>;
};

/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_Fields = {
  __typename?: 'average_block_time_from_genesis_aggregate_fields';
  avg?: Maybe<Average_Block_Time_From_Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_From_Genesis_Max_Fields>;
  min?: Maybe<Average_Block_Time_From_Genesis_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_From_Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_From_Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_From_Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_From_Genesis_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_From_Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_From_Genesis_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_From_Genesis_Variance_Fields>;
};


/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_From_Genesis_Avg_Fields = {
  __typename?: 'average_block_time_from_genesis_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_from_genesis". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_From_Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimeFromGenesisPkey = 'average_block_time_from_genesis_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Inc_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Insert_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Average_Block_Time_From_Genesis_Max_Fields = {
  __typename?: 'average_block_time_from_genesis_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_From_Genesis_Min_Fields = {
  __typename?: 'average_block_time_from_genesis_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Mutation_Response = {
  __typename?: 'average_block_time_from_genesis_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_From_Genesis>;
};

/** on_conflict condition type for table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_On_Conflict = {
  constraint: Average_Block_Time_From_Genesis_Constraint;
  update_columns?: Array<Average_Block_Time_From_Genesis_Update_Column>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_from_genesis". */
export type Average_Block_Time_From_Genesis_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: average_block_time_from_genesis */
export type Average_Block_Time_From_Genesis_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Set_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_From_Genesis_Stddev_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_From_Genesis_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_From_Genesis_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_From_Genesis_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_From_Genesis_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_From_Genesis_Sum_Fields = {
  __typename?: 'average_block_time_from_genesis_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_From_Genesis_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Average_Block_Time_From_Genesis_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Average_Block_Time_From_Genesis_Set_Input>;
  /** filter the rows which have to be updated */
  where: Average_Block_Time_From_Genesis_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_From_Genesis_Var_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_From_Genesis_Var_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_From_Genesis_Variance_Fields = {
  __typename?: 'average_block_time_from_genesis_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate = {
  __typename?: 'average_block_time_per_day_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Day_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Day>;
};

/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_Fields = {
  __typename?: 'average_block_time_per_day_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Day_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Day_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Day_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Day_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Day_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Day_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Day_Avg_Fields = {
  __typename?: 'average_block_time_per_day_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerDayPkey = 'average_block_time_per_day_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Inc_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Insert_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Day_Max_Fields = {
  __typename?: 'average_block_time_per_day_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Day_Min_Fields = {
  __typename?: 'average_block_time_per_day_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Mutation_Response = {
  __typename?: 'average_block_time_per_day_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Day>;
};

/** on_conflict condition type for table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_On_Conflict = {
  constraint: Average_Block_Time_Per_Day_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Day_Update_Column>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_day */
export type Average_Block_Time_Per_Day_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Set_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Day_Stddev_Fields = {
  __typename?: 'average_block_time_per_day_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Day_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_day_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Day_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_day_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Day_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Day_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Day_Sum_Fields = {
  __typename?: 'average_block_time_per_day_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Day_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Average_Block_Time_Per_Day_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Average_Block_Time_Per_Day_Set_Input>;
  /** filter the rows which have to be updated */
  where: Average_Block_Time_Per_Day_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Day_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_day_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Day_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_day_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Day_Variance_Fields = {
  __typename?: 'average_block_time_per_day_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate = {
  __typename?: 'average_block_time_per_hour_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Hour_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Hour>;
};

/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_Fields = {
  __typename?: 'average_block_time_per_hour_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Hour_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Hour_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Hour_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Hour_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Hour_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Hour_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Hour_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Hour_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Hour_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Hour_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Hour_Avg_Fields = {
  __typename?: 'average_block_time_per_hour_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerHourPkey = 'average_block_time_per_hour_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Inc_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Insert_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Hour_Max_Fields = {
  __typename?: 'average_block_time_per_hour_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Hour_Min_Fields = {
  __typename?: 'average_block_time_per_hour_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Mutation_Response = {
  __typename?: 'average_block_time_per_hour_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Hour>;
};

/** on_conflict condition type for table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_On_Conflict = {
  constraint: Average_Block_Time_Per_Hour_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Hour_Update_Column>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_hour */
export type Average_Block_Time_Per_Hour_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Set_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Hour_Stddev_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Hour_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Hour_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Hour_Sum_Fields = {
  __typename?: 'average_block_time_per_hour_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Hour_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Average_Block_Time_Per_Hour_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Average_Block_Time_Per_Hour_Set_Input>;
  /** filter the rows which have to be updated */
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Hour_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Hour_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Hour_Variance_Fields = {
  __typename?: 'average_block_time_per_hour_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate = {
  __typename?: 'average_block_time_per_minute_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Minute_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Minute>;
};

/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_Fields = {
  __typename?: 'average_block_time_per_minute_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Minute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Minute_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Minute_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Minute_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Minute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Minute_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Minute_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Minute_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Minute_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Minute_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Minute_Avg_Fields = {
  __typename?: 'average_block_time_per_minute_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerMinutePkey = 'average_block_time_per_minute_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Inc_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Insert_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Minute_Max_Fields = {
  __typename?: 'average_block_time_per_minute_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Minute_Min_Fields = {
  __typename?: 'average_block_time_per_minute_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Mutation_Response = {
  __typename?: 'average_block_time_per_minute_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Minute>;
};

/** on_conflict condition type for table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_On_Conflict = {
  constraint: Average_Block_Time_Per_Minute_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Minute_Update_Column>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_minute */
export type Average_Block_Time_Per_Minute_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Set_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Minute_Stddev_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Minute_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Minute_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Minute_Sum_Fields = {
  __typename?: 'average_block_time_per_minute_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Minute_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Average_Block_Time_Per_Minute_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Average_Block_Time_Per_Minute_Set_Input>;
  /** filter the rows which have to be updated */
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Minute_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Minute_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Minute_Variance_Fields = {
  __typename?: 'average_block_time_per_minute_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "balance" */
export type Balance = {
  __typename?: 'balance';
  address: Scalars['String'];
  balances: Array<Scalars['coin']>;
  height: Scalars['bigint'];
};

/** aggregated selection of "balance" */
export type Balance_Aggregate = {
  __typename?: 'balance_aggregate';
  aggregate?: Maybe<Balance_Aggregate_Fields>;
  nodes: Array<Balance>;
};

/** aggregate fields of "balance" */
export type Balance_Aggregate_Fields = {
  __typename?: 'balance_aggregate_fields';
  avg?: Maybe<Balance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Balance_Max_Fields>;
  min?: Maybe<Balance_Min_Fields>;
  stddev?: Maybe<Balance_Stddev_Fields>;
  stddev_pop?: Maybe<Balance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Balance_Stddev_Samp_Fields>;
  sum?: Maybe<Balance_Sum_Fields>;
  var_pop?: Maybe<Balance_Var_Pop_Fields>;
  var_samp?: Maybe<Balance_Var_Samp_Fields>;
  variance?: Maybe<Balance_Variance_Fields>;
};


/** aggregate fields of "balance" */
export type Balance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Balance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Balance_Avg_Fields = {
  __typename?: 'balance_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "balance". All fields are combined with a logical 'AND'. */
export type Balance_Bool_Exp = {
  _and?: InputMaybe<Array<Balance_Bool_Exp>>;
  _not?: InputMaybe<Balance_Bool_Exp>;
  _or?: InputMaybe<Array<Balance_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  balances?: InputMaybe<Coin_Array_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "balance" */
export enum Balance_Constraint {
  /** unique or primary key constraint on columns "address" */
  BalancePkey = 'balance_pkey'
}

/** input type for incrementing numeric columns in table "balance" */
export type Balance_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "balance" */
export type Balance_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  balances?: InputMaybe<Array<Scalars['coin']>>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Balance_Max_Fields = {
  __typename?: 'balance_max_fields';
  address?: Maybe<Scalars['String']>;
  balances?: Maybe<Array<Scalars['coin']>>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Balance_Min_Fields = {
  __typename?: 'balance_min_fields';
  address?: Maybe<Scalars['String']>;
  balances?: Maybe<Array<Scalars['coin']>>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "balance" */
export type Balance_Mutation_Response = {
  __typename?: 'balance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Balance>;
};

/** on_conflict condition type for table "balance" */
export type Balance_On_Conflict = {
  constraint: Balance_Constraint;
  update_columns?: Array<Balance_Update_Column>;
  where?: InputMaybe<Balance_Bool_Exp>;
};

/** Ordering options when selecting data from "balance". */
export type Balance_Order_By = {
  address?: InputMaybe<Order_By>;
  balances?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** primary key columns input for table: balance */
export type Balance_Pk_Columns_Input = {
  address: Scalars['String'];
};

/** select columns of table "balance" */
export enum Balance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balances = 'balances',
  /** column name */
  Height = 'height'
}

/** input type for updating data in table "balance" */
export type Balance_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  balances?: InputMaybe<Array<Scalars['coin']>>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Balance_Stddev_Fields = {
  __typename?: 'balance_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Balance_Stddev_Pop_Fields = {
  __typename?: 'balance_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Balance_Stddev_Samp_Fields = {
  __typename?: 'balance_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "balance" */
export type Balance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Balance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Balance_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  balances?: InputMaybe<Array<Scalars['coin']>>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Balance_Sum_Fields = {
  __typename?: 'balance_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "balance" */
export enum Balance_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balances = 'balances',
  /** column name */
  Height = 'height'
}

export type Balance_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Balance_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Balance_Set_Input>;
  /** filter the rows which have to be updated */
  where: Balance_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Balance_Var_Pop_Fields = {
  __typename?: 'balance_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Balance_Var_Samp_Fields = {
  __typename?: 'balance_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Balance_Variance_Fields = {
  __typename?: 'balance_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block';
  hash: Scalars['String'];
  height: Scalars['bigint'];
  /** An array relationship */
  ms_events: Array<Ms_Event>;
  /** An aggregate relationship */
  ms_events_aggregate: Ms_Event_Aggregate;
  num_txs?: Maybe<Scalars['Int']>;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamp'];
  total_gas?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  transaction_105s: Array<Transaction_105>;
  /** An aggregate relationship */
  transaction_105s_aggregate: Transaction_105_Aggregate;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  /** An object relationship */
  validator?: Maybe<Validator>;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "block" */
export type BlockMs_EventsArgs = {
  distinct_on?: InputMaybe<Array<Ms_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Event_Order_By>>;
  where?: InputMaybe<Ms_Event_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockMs_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ms_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Event_Order_By>>;
  where?: InputMaybe<Ms_Event_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransaction_105sArgs = {
  distinct_on?: InputMaybe<Array<Transaction_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_105_Order_By>>;
  where?: InputMaybe<Transaction_105_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransaction_105s_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_105_Order_By>>;
  where?: InputMaybe<Transaction_105_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** aggregated selection of "block" */
export type Block_Aggregate = {
  __typename?: 'block_aggregate';
  aggregate?: Maybe<Block_Aggregate_Fields>;
  nodes: Array<Block>;
};

export type Block_Aggregate_Bool_Exp = {
  count?: InputMaybe<Block_Aggregate_Bool_Exp_Count>;
};

export type Block_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Block_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Block_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "block" */
export type Block_Aggregate_Fields = {
  __typename?: 'block_aggregate_fields';
  avg?: Maybe<Block_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Block_Max_Fields>;
  min?: Maybe<Block_Min_Fields>;
  stddev?: Maybe<Block_Stddev_Fields>;
  stddev_pop?: Maybe<Block_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Block_Stddev_Samp_Fields>;
  sum?: Maybe<Block_Sum_Fields>;
  var_pop?: Maybe<Block_Var_Pop_Fields>;
  var_samp?: Maybe<Block_Var_Samp_Fields>;
  variance?: Maybe<Block_Variance_Fields>;
};


/** aggregate fields of "block" */
export type Block_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Block_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "block" */
export type Block_Aggregate_Order_By = {
  avg?: InputMaybe<Block_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Block_Max_Order_By>;
  min?: InputMaybe<Block_Min_Order_By>;
  stddev?: InputMaybe<Block_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Block_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Block_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Block_Sum_Order_By>;
  var_pop?: InputMaybe<Block_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Block_Var_Samp_Order_By>;
  variance?: InputMaybe<Block_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "block" */
export type Block_Arr_Rel_Insert_Input = {
  data: Array<Block_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Block_On_Conflict>;
};

/** aggregate avg on columns */
export type Block_Avg_Fields = {
  __typename?: 'block_avg_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "block" */
export type Block_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: InputMaybe<Array<Block_Bool_Exp>>;
  _not?: InputMaybe<Block_Bool_Exp>;
  _or?: InputMaybe<Array<Block_Bool_Exp>>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  ms_events?: InputMaybe<Ms_Event_Bool_Exp>;
  ms_events_aggregate?: InputMaybe<Ms_Event_Aggregate_Bool_Exp>;
  num_txs?: InputMaybe<Int_Comparison_Exp>;
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  total_gas?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_105s?: InputMaybe<Transaction_105_Bool_Exp>;
  transaction_105s_aggregate?: InputMaybe<Transaction_105_Aggregate_Bool_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "block" */
export enum Block_Constraint {
  /** unique or primary key constraint on columns "hash" */
  BlockHashKey = 'block_hash_key',
  /** unique or primary key constraint on columns "height" */
  BlockPkey = 'block_pkey'
}

/** input type for incrementing numeric columns in table "block" */
export type Block_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  num_txs?: InputMaybe<Scalars['Int']>;
  total_gas?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "block" */
export type Block_Insert_Input = {
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  ms_events?: InputMaybe<Ms_Event_Arr_Rel_Insert_Input>;
  num_txs?: InputMaybe<Scalars['Int']>;
  pre_commits?: InputMaybe<Pre_Commit_Arr_Rel_Insert_Input>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Arr_Rel_Insert_Input>;
  proposal_votes?: InputMaybe<Proposal_Vote_Arr_Rel_Insert_Input>;
  proposer_address?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  total_gas?: InputMaybe<Scalars['bigint']>;
  transaction_105s?: InputMaybe<Transaction_105_Arr_Rel_Insert_Input>;
  transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Block_Max_Fields = {
  __typename?: 'block_max_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "block" */
export type Block_Max_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Block_Min_Fields = {
  __typename?: 'block_min_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "block" */
export type Block_Min_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "block" */
export type Block_Mutation_Response = {
  __typename?: 'block_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Block>;
};

/** input type for inserting object relation for remote table "block" */
export type Block_Obj_Rel_Insert_Input = {
  data: Block_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Block_On_Conflict>;
};

/** on_conflict condition type for table "block" */
export type Block_On_Conflict = {
  constraint: Block_Constraint;
  update_columns?: Array<Block_Update_Column>;
  where?: InputMaybe<Block_Bool_Exp>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  ms_events_aggregate?: InputMaybe<Ms_Event_Aggregate_Order_By>;
  num_txs?: InputMaybe<Order_By>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
  transaction_105s_aggregate?: InputMaybe<Transaction_105_Aggregate_Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** primary key columns input for table: block */
export type Block_Pk_Columns_Input = {
  height: Scalars['bigint'];
};

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

/** input type for updating data in table "block" */
export type Block_Set_Input = {
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  num_txs?: InputMaybe<Scalars['Int']>;
  proposer_address?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  total_gas?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Block_Stddev_Fields = {
  __typename?: 'block_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "block" */
export type Block_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Block_Stddev_Pop_Fields = {
  __typename?: 'block_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "block" */
export type Block_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Block_Stddev_Samp_Fields = {
  __typename?: 'block_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "block" */
export type Block_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "block" */
export type Block_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Block_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Block_Stream_Cursor_Value_Input = {
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  num_txs?: InputMaybe<Scalars['Int']>;
  proposer_address?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  total_gas?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Block_Sum_Fields = {
  __typename?: 'block_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "block" */
export type Block_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** update columns of table "block" */
export enum Block_Update_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

export type Block_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Block_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Block_Set_Input>;
  /** filter the rows which have to be updated */
  where: Block_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Block_Var_Pop_Fields = {
  __typename?: 'block_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "block" */
export type Block_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Block_Var_Samp_Fields = {
  __typename?: 'block_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "block" */
export type Block_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Block_Variance_Fields = {
  __typename?: 'block_variance_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "block" */
export type Block_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "coin". All fields are combined with logical 'AND'. */
export type Coin_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['coin']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['coin']>>;
  _eq?: InputMaybe<Array<Scalars['coin']>>;
  _gt?: InputMaybe<Array<Scalars['coin']>>;
  _gte?: InputMaybe<Array<Scalars['coin']>>;
  _in?: InputMaybe<Array<Array<Scalars['coin']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Array<Scalars['coin']>>;
  _lte?: InputMaybe<Array<Scalars['coin']>>;
  _neq?: InputMaybe<Array<Scalars['coin']>>;
  _nin?: InputMaybe<Array<Array<Scalars['coin']>>>;
};

/** columns and relationships of "community_pool" */
export type Community_Pool = {
  __typename?: 'community_pool';
  coins: Array<Scalars['dec_coin']>;
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "community_pool" */
export type Community_Pool_Aggregate = {
  __typename?: 'community_pool_aggregate';
  aggregate?: Maybe<Community_Pool_Aggregate_Fields>;
  nodes: Array<Community_Pool>;
};

/** aggregate fields of "community_pool" */
export type Community_Pool_Aggregate_Fields = {
  __typename?: 'community_pool_aggregate_fields';
  avg?: Maybe<Community_Pool_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Community_Pool_Max_Fields>;
  min?: Maybe<Community_Pool_Min_Fields>;
  stddev?: Maybe<Community_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Community_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Community_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Community_Pool_Sum_Fields>;
  var_pop?: Maybe<Community_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Community_Pool_Var_Samp_Fields>;
  variance?: Maybe<Community_Pool_Variance_Fields>;
};


/** aggregate fields of "community_pool" */
export type Community_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Community_Pool_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Community_Pool_Avg_Fields = {
  __typename?: 'community_pool_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "community_pool". All fields are combined with a logical 'AND'. */
export type Community_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Community_Pool_Bool_Exp>>;
  _not?: InputMaybe<Community_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Community_Pool_Bool_Exp>>;
  coins?: InputMaybe<Dec_Coin_Array_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "community_pool" */
export enum Community_Pool_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  CommunityPoolPkey = 'community_pool_pkey'
}

/** input type for incrementing numeric columns in table "community_pool" */
export type Community_Pool_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "community_pool" */
export type Community_Pool_Insert_Input = {
  coins?: InputMaybe<Array<Scalars['dec_coin']>>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Community_Pool_Max_Fields = {
  __typename?: 'community_pool_max_fields';
  coins?: Maybe<Array<Scalars['dec_coin']>>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Community_Pool_Min_Fields = {
  __typename?: 'community_pool_min_fields';
  coins?: Maybe<Array<Scalars['dec_coin']>>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "community_pool" */
export type Community_Pool_Mutation_Response = {
  __typename?: 'community_pool_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Community_Pool>;
};

/** on_conflict condition type for table "community_pool" */
export type Community_Pool_On_Conflict = {
  constraint: Community_Pool_Constraint;
  update_columns?: Array<Community_Pool_Update_Column>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};

/** Ordering options when selecting data from "community_pool". */
export type Community_Pool_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: community_pool */
export type Community_Pool_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "community_pool" */
export enum Community_Pool_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "community_pool" */
export type Community_Pool_Set_Input = {
  coins?: InputMaybe<Array<Scalars['dec_coin']>>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Community_Pool_Stddev_Fields = {
  __typename?: 'community_pool_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Community_Pool_Stddev_Pop_Fields = {
  __typename?: 'community_pool_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Community_Pool_Stddev_Samp_Fields = {
  __typename?: 'community_pool_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "community_pool" */
export type Community_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Community_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Community_Pool_Stream_Cursor_Value_Input = {
  coins?: InputMaybe<Array<Scalars['dec_coin']>>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Community_Pool_Sum_Fields = {
  __typename?: 'community_pool_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "community_pool" */
export enum Community_Pool_Update_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Community_Pool_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Community_Pool_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Community_Pool_Set_Input>;
  /** filter the rows which have to be updated */
  where: Community_Pool_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Community_Pool_Var_Pop_Fields = {
  __typename?: 'community_pool_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Community_Pool_Var_Samp_Fields = {
  __typename?: 'community_pool_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Community_Pool_Variance_Fields = {
  __typename?: 'community_pool_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "dec_coin". All fields are combined with logical 'AND'. */
export type Dec_Coin_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['dec_coin']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['dec_coin']>>;
  _eq?: InputMaybe<Array<Scalars['dec_coin']>>;
  _gt?: InputMaybe<Array<Scalars['dec_coin']>>;
  _gte?: InputMaybe<Array<Scalars['dec_coin']>>;
  _in?: InputMaybe<Array<Array<Scalars['dec_coin']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Array<Scalars['dec_coin']>>;
  _lte?: InputMaybe<Array<Scalars['dec_coin']>>;
  _neq?: InputMaybe<Array<Scalars['dec_coin']>>;
  _nin?: InputMaybe<Array<Array<Scalars['dec_coin']>>>;
};

/** columns and relationships of "distribution_params" */
export type Distribution_Params = {
  __typename?: 'distribution_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "distribution_params" */
export type Distribution_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "distribution_params" */
export type Distribution_Params_Aggregate = {
  __typename?: 'distribution_params_aggregate';
  aggregate?: Maybe<Distribution_Params_Aggregate_Fields>;
  nodes: Array<Distribution_Params>;
};

/** aggregate fields of "distribution_params" */
export type Distribution_Params_Aggregate_Fields = {
  __typename?: 'distribution_params_aggregate_fields';
  avg?: Maybe<Distribution_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Distribution_Params_Max_Fields>;
  min?: Maybe<Distribution_Params_Min_Fields>;
  stddev?: Maybe<Distribution_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Distribution_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Distribution_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Distribution_Params_Sum_Fields>;
  var_pop?: Maybe<Distribution_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Distribution_Params_Var_Samp_Fields>;
  variance?: Maybe<Distribution_Params_Variance_Fields>;
};


/** aggregate fields of "distribution_params" */
export type Distribution_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Distribution_Params_Append_Input = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Distribution_Params_Avg_Fields = {
  __typename?: 'distribution_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "distribution_params". All fields are combined with a logical 'AND'. */
export type Distribution_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Distribution_Params_Bool_Exp>>;
  _not?: InputMaybe<Distribution_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Distribution_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "distribution_params" */
export enum Distribution_Params_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  DistributionParamsPkey = 'distribution_params_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Distribution_Params_Delete_At_Path_Input = {
  params?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Distribution_Params_Delete_Elem_Input = {
  params?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Distribution_Params_Delete_Key_Input = {
  params?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "distribution_params" */
export type Distribution_Params_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "distribution_params" */
export type Distribution_Params_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Distribution_Params_Max_Fields = {
  __typename?: 'distribution_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Distribution_Params_Min_Fields = {
  __typename?: 'distribution_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "distribution_params" */
export type Distribution_Params_Mutation_Response = {
  __typename?: 'distribution_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Distribution_Params>;
};

/** on_conflict condition type for table "distribution_params" */
export type Distribution_Params_On_Conflict = {
  constraint: Distribution_Params_Constraint;
  update_columns?: Array<Distribution_Params_Update_Column>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "distribution_params". */
export type Distribution_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** primary key columns input for table: distribution_params */
export type Distribution_Params_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Distribution_Params_Prepend_Input = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "distribution_params" */
export enum Distribution_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "distribution_params" */
export type Distribution_Params_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Distribution_Params_Stddev_Fields = {
  __typename?: 'distribution_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Distribution_Params_Stddev_Pop_Fields = {
  __typename?: 'distribution_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Distribution_Params_Stddev_Samp_Fields = {
  __typename?: 'distribution_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "distribution_params" */
export type Distribution_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Distribution_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Distribution_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Distribution_Params_Sum_Fields = {
  __typename?: 'distribution_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "distribution_params" */
export enum Distribution_Params_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

export type Distribution_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Distribution_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Distribution_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Distribution_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Distribution_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Distribution_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Distribution_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Distribution_Params_Set_Input>;
  /** filter the rows which have to be updated */
  where: Distribution_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Distribution_Params_Var_Pop_Fields = {
  __typename?: 'distribution_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Distribution_Params_Var_Samp_Fields = {
  __typename?: 'distribution_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Distribution_Params_Variance_Fields = {
  __typename?: 'distribution_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "double_sign_evidence" */
export type Double_Sign_Evidence = {
  __typename?: 'double_sign_evidence';
  /** An object relationship */
  doubleSignVoteByVoteAId: Double_Sign_Vote;
  /** An object relationship */
  double_sign_vote: Double_Sign_Vote;
  height: Scalars['bigint'];
  vote_a_id: Scalars['bigint'];
  vote_b_id: Scalars['bigint'];
};

/** aggregated selection of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate = {
  __typename?: 'double_sign_evidence_aggregate';
  aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Fields>;
  nodes: Array<Double_Sign_Evidence>;
};

export type Double_Sign_Evidence_Aggregate_Bool_Exp = {
  count?: InputMaybe<Double_Sign_Evidence_Aggregate_Bool_Exp_Count>;
};

export type Double_Sign_Evidence_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Fields = {
  __typename?: 'double_sign_evidence_aggregate_fields';
  avg?: Maybe<Double_Sign_Evidence_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Double_Sign_Evidence_Max_Fields>;
  min?: Maybe<Double_Sign_Evidence_Min_Fields>;
  stddev?: Maybe<Double_Sign_Evidence_Stddev_Fields>;
  stddev_pop?: Maybe<Double_Sign_Evidence_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Double_Sign_Evidence_Stddev_Samp_Fields>;
  sum?: Maybe<Double_Sign_Evidence_Sum_Fields>;
  var_pop?: Maybe<Double_Sign_Evidence_Var_Pop_Fields>;
  var_samp?: Maybe<Double_Sign_Evidence_Var_Samp_Fields>;
  variance?: Maybe<Double_Sign_Evidence_Variance_Fields>;
};


/** aggregate fields of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Evidence_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Double_Sign_Evidence_Max_Order_By>;
  min?: InputMaybe<Double_Sign_Evidence_Min_Order_By>;
  stddev?: InputMaybe<Double_Sign_Evidence_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Double_Sign_Evidence_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Double_Sign_Evidence_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Double_Sign_Evidence_Sum_Order_By>;
  var_pop?: InputMaybe<Double_Sign_Evidence_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Double_Sign_Evidence_Var_Samp_Order_By>;
  variance?: InputMaybe<Double_Sign_Evidence_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "double_sign_evidence" */
export type Double_Sign_Evidence_Arr_Rel_Insert_Input = {
  data: Array<Double_Sign_Evidence_Insert_Input>;
};

/** aggregate avg on columns */
export type Double_Sign_Evidence_Avg_Fields = {
  __typename?: 'double_sign_evidence_avg_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_evidence". All fields are combined with a logical 'AND'. */
export type Double_Sign_Evidence_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  _not?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  _or?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  vote_a_id?: InputMaybe<Bigint_Comparison_Exp>;
  vote_b_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "double_sign_evidence" */
export type Double_Sign_Evidence_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  vote_a_id?: InputMaybe<Scalars['bigint']>;
  vote_b_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "double_sign_evidence" */
export type Double_Sign_Evidence_Insert_Input = {
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Obj_Rel_Insert_Input>;
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']>;
  vote_a_id?: InputMaybe<Scalars['bigint']>;
  vote_b_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Double_Sign_Evidence_Max_Fields = {
  __typename?: 'double_sign_evidence_max_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Double_Sign_Evidence_Min_Fields = {
  __typename?: 'double_sign_evidence_min_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "double_sign_evidence" */
export type Double_Sign_Evidence_Mutation_Response = {
  __typename?: 'double_sign_evidence_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Double_Sign_Evidence>;
};

/** Ordering options when selecting data from "double_sign_evidence". */
export type Double_Sign_Evidence_Order_By = {
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Order_By>;
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Order_By>;
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** select columns of table "double_sign_evidence" */
export enum Double_Sign_Evidence_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  VoteAId = 'vote_a_id',
  /** column name */
  VoteBId = 'vote_b_id'
}

/** input type for updating data in table "double_sign_evidence" */
export type Double_Sign_Evidence_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  vote_a_id?: InputMaybe<Scalars['bigint']>;
  vote_b_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Double_Sign_Evidence_Stddev_Fields = {
  __typename?: 'double_sign_evidence_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Double_Sign_Evidence_Stddev_Pop_Fields = {
  __typename?: 'double_sign_evidence_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Double_Sign_Evidence_Stddev_Samp_Fields = {
  __typename?: 'double_sign_evidence_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "double_sign_evidence" */
export type Double_Sign_Evidence_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Double_Sign_Evidence_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Double_Sign_Evidence_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  vote_a_id?: InputMaybe<Scalars['bigint']>;
  vote_b_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Double_Sign_Evidence_Sum_Fields = {
  __typename?: 'double_sign_evidence_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

export type Double_Sign_Evidence_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Double_Sign_Evidence_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Double_Sign_Evidence_Set_Input>;
  /** filter the rows which have to be updated */
  where: Double_Sign_Evidence_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Double_Sign_Evidence_Var_Pop_Fields = {
  __typename?: 'double_sign_evidence_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Double_Sign_Evidence_Var_Samp_Fields = {
  __typename?: 'double_sign_evidence_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Double_Sign_Evidence_Variance_Fields = {
  __typename?: 'double_sign_evidence_variance_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_Vote = {
  __typename?: 'double_sign_vote';
  block_id: Scalars['String'];
  /** An array relationship */
  doubleSignEvidencesByVoteBId: Array<Double_Sign_Evidence>;
  /** An aggregate relationship */
  doubleSignEvidencesByVoteBId_aggregate: Double_Sign_Evidence_Aggregate;
  /** An array relationship */
  double_sign_evidences: Array<Double_Sign_Evidence>;
  /** An aggregate relationship */
  double_sign_evidences_aggregate: Double_Sign_Evidence_Aggregate;
  height: Scalars['bigint'];
  id: Scalars['Int'];
  round: Scalars['Int'];
  signature: Scalars['String'];
  type: Scalars['smallint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  validator_index: Scalars['Int'];
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBIdArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_EvidencesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_Evidences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};

/** aggregated selection of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate = {
  __typename?: 'double_sign_vote_aggregate';
  aggregate?: Maybe<Double_Sign_Vote_Aggregate_Fields>;
  nodes: Array<Double_Sign_Vote>;
};

export type Double_Sign_Vote_Aggregate_Bool_Exp = {
  count?: InputMaybe<Double_Sign_Vote_Aggregate_Bool_Exp_Count>;
};

export type Double_Sign_Vote_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Fields = {
  __typename?: 'double_sign_vote_aggregate_fields';
  avg?: Maybe<Double_Sign_Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Double_Sign_Vote_Max_Fields>;
  min?: Maybe<Double_Sign_Vote_Min_Fields>;
  stddev?: Maybe<Double_Sign_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Double_Sign_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Double_Sign_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Double_Sign_Vote_Sum_Fields>;
  var_pop?: Maybe<Double_Sign_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Double_Sign_Vote_Var_Samp_Fields>;
  variance?: Maybe<Double_Sign_Vote_Variance_Fields>;
};


/** aggregate fields of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Double_Sign_Vote_Max_Order_By>;
  min?: InputMaybe<Double_Sign_Vote_Min_Order_By>;
  stddev?: InputMaybe<Double_Sign_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Double_Sign_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Double_Sign_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Double_Sign_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Double_Sign_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Double_Sign_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Double_Sign_Vote_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "double_sign_vote" */
export type Double_Sign_Vote_Arr_Rel_Insert_Input = {
  data: Array<Double_Sign_Vote_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Double_Sign_Vote_On_Conflict>;
};

/** aggregate avg on columns */
export type Double_Sign_Vote_Avg_Fields = {
  __typename?: 'double_sign_vote_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_vote". All fields are combined with a logical 'AND'. */
export type Double_Sign_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>;
  _not?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>;
  block_id?: InputMaybe<String_Comparison_Exp>;
  doubleSignEvidencesByVoteBId?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  doubleSignEvidencesByVoteBId_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Bool_Exp>;
  double_sign_evidences?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  double_sign_evidences_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  round?: InputMaybe<Int_Comparison_Exp>;
  signature?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Smallint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_index?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "double_sign_vote" */
export enum Double_Sign_Vote_Constraint {
  /** unique or primary key constraint on columns "validator_address", "block_id" */
  DoubleSignVoteBlockIdValidatorAddressKey = 'double_sign_vote_block_id_validator_address_key',
  /** unique or primary key constraint on columns "id" */
  DoubleSignVotePkey = 'double_sign_vote_pkey'
}

/** input type for incrementing numeric columns in table "double_sign_vote" */
export type Double_Sign_Vote_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['smallint']>;
  validator_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "double_sign_vote" */
export type Double_Sign_Vote_Insert_Input = {
  block_id?: InputMaybe<Scalars['String']>;
  doubleSignEvidencesByVoteBId?: InputMaybe<Double_Sign_Evidence_Arr_Rel_Insert_Input>;
  double_sign_evidences?: InputMaybe<Double_Sign_Evidence_Arr_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['smallint']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: InputMaybe<Scalars['String']>;
  validator_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Double_Sign_Vote_Max_Fields = {
  __typename?: 'double_sign_vote_max_fields';
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Max_Order_By = {
  block_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Double_Sign_Vote_Min_Fields = {
  __typename?: 'double_sign_vote_min_fields';
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Min_Order_By = {
  block_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "double_sign_vote" */
export type Double_Sign_Vote_Mutation_Response = {
  __typename?: 'double_sign_vote_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Double_Sign_Vote>;
};

/** input type for inserting object relation for remote table "double_sign_vote" */
export type Double_Sign_Vote_Obj_Rel_Insert_Input = {
  data: Double_Sign_Vote_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Double_Sign_Vote_On_Conflict>;
};

/** on_conflict condition type for table "double_sign_vote" */
export type Double_Sign_Vote_On_Conflict = {
  constraint: Double_Sign_Vote_Constraint;
  update_columns?: Array<Double_Sign_Vote_Update_Column>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};

/** Ordering options when selecting data from "double_sign_vote". */
export type Double_Sign_Vote_Order_By = {
  block_id?: InputMaybe<Order_By>;
  doubleSignEvidencesByVoteBId_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>;
  double_sign_evidences_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** primary key columns input for table: double_sign_vote */
export type Double_Sign_Vote_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "double_sign_vote" */
export enum Double_Sign_Vote_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index'
}

/** input type for updating data in table "double_sign_vote" */
export type Double_Sign_Vote_Set_Input = {
  block_id?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['smallint']>;
  validator_address?: InputMaybe<Scalars['String']>;
  validator_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Double_Sign_Vote_Stddev_Fields = {
  __typename?: 'double_sign_vote_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Double_Sign_Vote_Stddev_Pop_Fields = {
  __typename?: 'double_sign_vote_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Double_Sign_Vote_Stddev_Samp_Fields = {
  __typename?: 'double_sign_vote_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "double_sign_vote" */
export type Double_Sign_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Double_Sign_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Double_Sign_Vote_Stream_Cursor_Value_Input = {
  block_id?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  round?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['smallint']>;
  validator_address?: InputMaybe<Scalars['String']>;
  validator_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Double_Sign_Vote_Sum_Fields = {
  __typename?: 'double_sign_vote_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['smallint']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** update columns of table "double_sign_vote" */
export enum Double_Sign_Vote_Update_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index'
}

export type Double_Sign_Vote_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Double_Sign_Vote_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Double_Sign_Vote_Set_Input>;
  /** filter the rows which have to be updated */
  where: Double_Sign_Vote_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Double_Sign_Vote_Var_Pop_Fields = {
  __typename?: 'double_sign_vote_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Double_Sign_Vote_Var_Samp_Fields = {
  __typename?: 'double_sign_vote_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Double_Sign_Vote_Variance_Fields = {
  __typename?: 'double_sign_vote_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_Allowance = {
  __typename?: 'fee_grant_allowance';
  allowance: Scalars['jsonb'];
  /** An object relationship */
  grantee: Account;
  grantee_address: Scalars['String'];
  /** An object relationship */
  granter: Account;
  granter_address: Scalars['String'];
  height: Scalars['bigint'];
  id: Scalars['Int'];
};


/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_AllowanceAllowanceArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate = {
  __typename?: 'fee_grant_allowance_aggregate';
  aggregate?: Maybe<Fee_Grant_Allowance_Aggregate_Fields>;
  nodes: Array<Fee_Grant_Allowance>;
};

export type Fee_Grant_Allowance_Aggregate_Bool_Exp = {
  count?: InputMaybe<Fee_Grant_Allowance_Aggregate_Bool_Exp_Count>;
};

export type Fee_Grant_Allowance_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_Fields = {
  __typename?: 'fee_grant_allowance_aggregate_fields';
  avg?: Maybe<Fee_Grant_Allowance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Fee_Grant_Allowance_Max_Fields>;
  min?: Maybe<Fee_Grant_Allowance_Min_Fields>;
  stddev?: Maybe<Fee_Grant_Allowance_Stddev_Fields>;
  stddev_pop?: Maybe<Fee_Grant_Allowance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fee_Grant_Allowance_Stddev_Samp_Fields>;
  sum?: Maybe<Fee_Grant_Allowance_Sum_Fields>;
  var_pop?: Maybe<Fee_Grant_Allowance_Var_Pop_Fields>;
  var_samp?: Maybe<Fee_Grant_Allowance_Var_Samp_Fields>;
  variance?: Maybe<Fee_Grant_Allowance_Variance_Fields>;
};


/** aggregate fields of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_Order_By = {
  avg?: InputMaybe<Fee_Grant_Allowance_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Fee_Grant_Allowance_Max_Order_By>;
  min?: InputMaybe<Fee_Grant_Allowance_Min_Order_By>;
  stddev?: InputMaybe<Fee_Grant_Allowance_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Fee_Grant_Allowance_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Fee_Grant_Allowance_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Fee_Grant_Allowance_Sum_Order_By>;
  var_pop?: InputMaybe<Fee_Grant_Allowance_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Fee_Grant_Allowance_Var_Samp_Order_By>;
  variance?: InputMaybe<Fee_Grant_Allowance_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Fee_Grant_Allowance_Append_Input = {
  allowance?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Arr_Rel_Insert_Input = {
  data: Array<Fee_Grant_Allowance_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Fee_Grant_Allowance_On_Conflict>;
};

/** aggregate avg on columns */
export type Fee_Grant_Allowance_Avg_Fields = {
  __typename?: 'fee_grant_allowance_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fee_grant_allowance". All fields are combined with a logical 'AND'. */
export type Fee_Grant_Allowance_Bool_Exp = {
  _and?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>;
  _not?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  _or?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>;
  allowance?: InputMaybe<Jsonb_Comparison_Exp>;
  grantee?: InputMaybe<Account_Bool_Exp>;
  grantee_address?: InputMaybe<String_Comparison_Exp>;
  granter?: InputMaybe<Account_Bool_Exp>;
  granter_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeeGrantAllowancePkey = 'fee_grant_allowance_pkey',
  /** unique or primary key constraint on columns "grantee_address", "granter_address" */
  UniqueFeeGrantAllowance = 'unique_fee_grant_allowance'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Fee_Grant_Allowance_Delete_At_Path_Input = {
  allowance?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Fee_Grant_Allowance_Delete_Elem_Input = {
  allowance?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Fee_Grant_Allowance_Delete_Key_Input = {
  allowance?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Insert_Input = {
  allowance?: InputMaybe<Scalars['jsonb']>;
  grantee?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  grantee_address?: InputMaybe<Scalars['String']>;
  granter?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  granter_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Fee_Grant_Allowance_Max_Fields = {
  __typename?: 'fee_grant_allowance_max_fields';
  grantee_address?: Maybe<Scalars['String']>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Max_Order_By = {
  grantee_address?: InputMaybe<Order_By>;
  granter_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Fee_Grant_Allowance_Min_Fields = {
  __typename?: 'fee_grant_allowance_min_fields';
  grantee_address?: Maybe<Scalars['String']>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Min_Order_By = {
  grantee_address?: InputMaybe<Order_By>;
  granter_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Mutation_Response = {
  __typename?: 'fee_grant_allowance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Fee_Grant_Allowance>;
};

/** on_conflict condition type for table "fee_grant_allowance" */
export type Fee_Grant_Allowance_On_Conflict = {
  constraint: Fee_Grant_Allowance_Constraint;
  update_columns?: Array<Fee_Grant_Allowance_Update_Column>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};

/** Ordering options when selecting data from "fee_grant_allowance". */
export type Fee_Grant_Allowance_Order_By = {
  allowance?: InputMaybe<Order_By>;
  grantee?: InputMaybe<Account_Order_By>;
  grantee_address?: InputMaybe<Order_By>;
  granter?: InputMaybe<Account_Order_By>;
  granter_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fee_grant_allowance */
export type Fee_Grant_Allowance_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Fee_Grant_Allowance_Prepend_Input = {
  allowance?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Select_Column {
  /** column name */
  Allowance = 'allowance',
  /** column name */
  GranteeAddress = 'grantee_address',
  /** column name */
  GranterAddress = 'granter_address',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Set_Input = {
  allowance?: InputMaybe<Scalars['jsonb']>;
  grantee_address?: InputMaybe<Scalars['String']>;
  granter_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Fee_Grant_Allowance_Stddev_Fields = {
  __typename?: 'fee_grant_allowance_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Fee_Grant_Allowance_Stddev_Pop_Fields = {
  __typename?: 'fee_grant_allowance_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Fee_Grant_Allowance_Stddev_Samp_Fields = {
  __typename?: 'fee_grant_allowance_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fee_Grant_Allowance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fee_Grant_Allowance_Stream_Cursor_Value_Input = {
  allowance?: InputMaybe<Scalars['jsonb']>;
  grantee_address?: InputMaybe<Scalars['String']>;
  granter_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Fee_Grant_Allowance_Sum_Fields = {
  __typename?: 'fee_grant_allowance_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Update_Column {
  /** column name */
  Allowance = 'allowance',
  /** column name */
  GranteeAddress = 'grantee_address',
  /** column name */
  GranterAddress = 'granter_address',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id'
}

export type Fee_Grant_Allowance_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Fee_Grant_Allowance_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Fee_Grant_Allowance_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Fee_Grant_Allowance_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Fee_Grant_Allowance_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Fee_Grant_Allowance_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Fee_Grant_Allowance_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fee_Grant_Allowance_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fee_Grant_Allowance_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Fee_Grant_Allowance_Var_Pop_Fields = {
  __typename?: 'fee_grant_allowance_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Fee_Grant_Allowance_Var_Samp_Fields = {
  __typename?: 'fee_grant_allowance_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Fee_Grant_Allowance_Variance_Fields = {
  __typename?: 'fee_grant_allowance_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "genesis" */
export type Genesis = {
  __typename?: 'genesis';
  chain_id: Scalars['String'];
  initial_height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  time: Scalars['timestamp'];
};

/** aggregated selection of "genesis" */
export type Genesis_Aggregate = {
  __typename?: 'genesis_aggregate';
  aggregate?: Maybe<Genesis_Aggregate_Fields>;
  nodes: Array<Genesis>;
};

/** aggregate fields of "genesis" */
export type Genesis_Aggregate_Fields = {
  __typename?: 'genesis_aggregate_fields';
  avg?: Maybe<Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Genesis_Max_Fields>;
  min?: Maybe<Genesis_Min_Fields>;
  stddev?: Maybe<Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Genesis_Sum_Fields>;
  var_pop?: Maybe<Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Genesis_Var_Samp_Fields>;
  variance?: Maybe<Genesis_Variance_Fields>;
};


/** aggregate fields of "genesis" */
export type Genesis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Genesis_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Genesis_Avg_Fields = {
  __typename?: 'genesis_avg_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "genesis". All fields are combined with a logical 'AND'. */
export type Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Genesis_Bool_Exp>>;
  _not?: InputMaybe<Genesis_Bool_Exp>;
  _or?: InputMaybe<Array<Genesis_Bool_Exp>>;
  chain_id?: InputMaybe<String_Comparison_Exp>;
  initial_height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "genesis" */
export enum Genesis_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  GenesisPkey = 'genesis_pkey'
}

/** input type for incrementing numeric columns in table "genesis" */
export type Genesis_Inc_Input = {
  initial_height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "genesis" */
export type Genesis_Insert_Input = {
  chain_id?: InputMaybe<Scalars['String']>;
  initial_height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Genesis_Max_Fields = {
  __typename?: 'genesis_max_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Genesis_Min_Fields = {
  __typename?: 'genesis_min_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "genesis" */
export type Genesis_Mutation_Response = {
  __typename?: 'genesis_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Genesis>;
};

/** on_conflict condition type for table "genesis" */
export type Genesis_On_Conflict = {
  constraint: Genesis_Constraint;
  update_columns?: Array<Genesis_Update_Column>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};

/** Ordering options when selecting data from "genesis". */
export type Genesis_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  initial_height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: genesis */
export type Genesis_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "genesis" */
export enum Genesis_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Time = 'time'
}

/** input type for updating data in table "genesis" */
export type Genesis_Set_Input = {
  chain_id?: InputMaybe<Scalars['String']>;
  initial_height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Genesis_Stddev_Fields = {
  __typename?: 'genesis_stddev_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Genesis_Stddev_Pop_Fields = {
  __typename?: 'genesis_stddev_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Genesis_Stddev_Samp_Fields = {
  __typename?: 'genesis_stddev_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "genesis" */
export type Genesis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Genesis_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Genesis_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars['String']>;
  initial_height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Genesis_Sum_Fields = {
  __typename?: 'genesis_sum_fields';
  initial_height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "genesis" */
export enum Genesis_Update_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Time = 'time'
}

export type Genesis_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Genesis_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Genesis_Set_Input>;
  /** filter the rows which have to be updated */
  where: Genesis_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Genesis_Var_Pop_Fields = {
  __typename?: 'genesis_var_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Genesis_Var_Samp_Fields = {
  __typename?: 'genesis_var_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Genesis_Variance_Fields = {
  __typename?: 'genesis_variance_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "gov_params" */
export type Gov_Params = {
  __typename?: 'gov_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "gov_params" */
export type Gov_Params_Aggregate = {
  __typename?: 'gov_params_aggregate';
  aggregate?: Maybe<Gov_Params_Aggregate_Fields>;
  nodes: Array<Gov_Params>;
};

/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_Fields = {
  __typename?: 'gov_params_aggregate_fields';
  avg?: Maybe<Gov_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gov_Params_Max_Fields>;
  min?: Maybe<Gov_Params_Min_Fields>;
  stddev?: Maybe<Gov_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Gov_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gov_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Gov_Params_Sum_Fields>;
  var_pop?: Maybe<Gov_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Gov_Params_Var_Samp_Fields>;
  variance?: Maybe<Gov_Params_Variance_Fields>;
};


/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gov_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Gov_Params_Append_Input = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Gov_Params_Avg_Fields = {
  __typename?: 'gov_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "gov_params". All fields are combined with a logical 'AND'. */
export type Gov_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  _not?: InputMaybe<Gov_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "gov_params" */
export enum Gov_Params_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  GovParamsPkey = 'gov_params_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Gov_Params_Delete_At_Path_Input = {
  params?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Gov_Params_Delete_Elem_Input = {
  params?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Gov_Params_Delete_Key_Input = {
  params?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "gov_params" */
export type Gov_Params_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "gov_params" */
export type Gov_Params_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Gov_Params_Max_Fields = {
  __typename?: 'gov_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Gov_Params_Min_Fields = {
  __typename?: 'gov_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "gov_params" */
export type Gov_Params_Mutation_Response = {
  __typename?: 'gov_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gov_Params>;
};

/** on_conflict condition type for table "gov_params" */
export type Gov_Params_On_Conflict = {
  constraint: Gov_Params_Constraint;
  update_columns?: Array<Gov_Params_Update_Column>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "gov_params". */
export type Gov_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gov_params */
export type Gov_Params_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Gov_Params_Prepend_Input = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "gov_params" */
export enum Gov_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "gov_params" */
export type Gov_Params_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Gov_Params_Stddev_Fields = {
  __typename?: 'gov_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Gov_Params_Stddev_Pop_Fields = {
  __typename?: 'gov_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Gov_Params_Stddev_Samp_Fields = {
  __typename?: 'gov_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "gov_params" */
export type Gov_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gov_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gov_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Gov_Params_Sum_Fields = {
  __typename?: 'gov_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "gov_params" */
export enum Gov_Params_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

export type Gov_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Gov_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Gov_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Gov_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Gov_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Gov_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Gov_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gov_Params_Set_Input>;
  /** filter the rows which have to be updated */
  where: Gov_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Gov_Params_Var_Pop_Fields = {
  __typename?: 'gov_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Gov_Params_Var_Samp_Fields = {
  __typename?: 'gov_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Gov_Params_Variance_Fields = {
  __typename?: 'gov_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "inflation" */
export type Inflation = {
  __typename?: 'inflation';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  value: Scalars['numeric'];
};

/** aggregated selection of "inflation" */
export type Inflation_Aggregate = {
  __typename?: 'inflation_aggregate';
  aggregate?: Maybe<Inflation_Aggregate_Fields>;
  nodes: Array<Inflation>;
};

/** aggregate fields of "inflation" */
export type Inflation_Aggregate_Fields = {
  __typename?: 'inflation_aggregate_fields';
  avg?: Maybe<Inflation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inflation_Max_Fields>;
  min?: Maybe<Inflation_Min_Fields>;
  stddev?: Maybe<Inflation_Stddev_Fields>;
  stddev_pop?: Maybe<Inflation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inflation_Stddev_Samp_Fields>;
  sum?: Maybe<Inflation_Sum_Fields>;
  var_pop?: Maybe<Inflation_Var_Pop_Fields>;
  var_samp?: Maybe<Inflation_Var_Samp_Fields>;
  variance?: Maybe<Inflation_Variance_Fields>;
};


/** aggregate fields of "inflation" */
export type Inflation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Inflation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Inflation_Avg_Fields = {
  __typename?: 'inflation_avg_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "inflation". All fields are combined with a logical 'AND'. */
export type Inflation_Bool_Exp = {
  _and?: InputMaybe<Array<Inflation_Bool_Exp>>;
  _not?: InputMaybe<Inflation_Bool_Exp>;
  _or?: InputMaybe<Array<Inflation_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "inflation" */
export enum Inflation_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  InflationPkey = 'inflation_pkey'
}

/** input type for incrementing numeric columns in table "inflation" */
export type Inflation_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "inflation" */
export type Inflation_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Inflation_Max_Fields = {
  __typename?: 'inflation_max_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Inflation_Min_Fields = {
  __typename?: 'inflation_min_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "inflation" */
export type Inflation_Mutation_Response = {
  __typename?: 'inflation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inflation>;
};

/** on_conflict condition type for table "inflation" */
export type Inflation_On_Conflict = {
  constraint: Inflation_Constraint;
  update_columns?: Array<Inflation_Update_Column>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};

/** Ordering options when selecting data from "inflation". */
export type Inflation_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: inflation */
export type Inflation_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "inflation" */
export enum Inflation_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "inflation" */
export type Inflation_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Inflation_Stddev_Fields = {
  __typename?: 'inflation_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Inflation_Stddev_Pop_Fields = {
  __typename?: 'inflation_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Inflation_Stddev_Samp_Fields = {
  __typename?: 'inflation_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "inflation" */
export type Inflation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Inflation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Inflation_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type Inflation_Sum_Fields = {
  __typename?: 'inflation_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** update columns of table "inflation" */
export enum Inflation_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Value = 'value'
}

export type Inflation_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Inflation_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Inflation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Inflation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Inflation_Var_Pop_Fields = {
  __typename?: 'inflation_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Inflation_Var_Samp_Fields = {
  __typename?: 'inflation_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Inflation_Variance_Fields = {
  __typename?: 'inflation_variance_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message';
  height: Scalars['bigint'];
  index: Scalars['bigint'];
  involved_accounts_addresses: Array<Scalars['String']>;
  /** An object relationship */
  message_type: Message_Type;
  partition_id: Scalars['bigint'];
  /** An object relationship */
  transaction?: Maybe<Transaction>;
  /** An object relationship */
  transactionByPartitionIdTransactionHash?: Maybe<Transaction>;
  /** An object relationship */
  transaction_105?: Maybe<Transaction_105>;
  transaction_hash: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['json'];
};


/** columns and relationships of "message" */
export type MessageValueArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "message_105" */
export type Message_105 = {
  __typename?: 'message_105';
  height: Scalars['bigint'];
  index: Scalars['bigint'];
  involved_accounts_addresses: Array<Scalars['String']>;
  /** An object relationship */
  message_type: Message_Type;
  partition_id: Scalars['bigint'];
  /** An object relationship */
  transaction?: Maybe<Transaction>;
  transaction_hash: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['json'];
};


/** columns and relationships of "message_105" */
export type Message_105ValueArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "message_105" */
export type Message_105_Aggregate = {
  __typename?: 'message_105_aggregate';
  aggregate?: Maybe<Message_105_Aggregate_Fields>;
  nodes: Array<Message_105>;
};

export type Message_105_Aggregate_Bool_Exp = {
  count?: InputMaybe<Message_105_Aggregate_Bool_Exp_Count>;
};

export type Message_105_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Message_105_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Message_105_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "message_105" */
export type Message_105_Aggregate_Fields = {
  __typename?: 'message_105_aggregate_fields';
  avg?: Maybe<Message_105_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Message_105_Max_Fields>;
  min?: Maybe<Message_105_Min_Fields>;
  stddev?: Maybe<Message_105_Stddev_Fields>;
  stddev_pop?: Maybe<Message_105_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_105_Stddev_Samp_Fields>;
  sum?: Maybe<Message_105_Sum_Fields>;
  var_pop?: Maybe<Message_105_Var_Pop_Fields>;
  var_samp?: Maybe<Message_105_Var_Samp_Fields>;
  variance?: Maybe<Message_105_Variance_Fields>;
};


/** aggregate fields of "message_105" */
export type Message_105_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_105_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message_105" */
export type Message_105_Aggregate_Order_By = {
  avg?: InputMaybe<Message_105_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_105_Max_Order_By>;
  min?: InputMaybe<Message_105_Min_Order_By>;
  stddev?: InputMaybe<Message_105_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Message_105_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Message_105_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Message_105_Sum_Order_By>;
  var_pop?: InputMaybe<Message_105_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Message_105_Var_Samp_Order_By>;
  variance?: InputMaybe<Message_105_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "message_105" */
export type Message_105_Arr_Rel_Insert_Input = {
  data: Array<Message_105_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_105_On_Conflict>;
};

/** aggregate avg on columns */
export type Message_105_Avg_Fields = {
  __typename?: 'message_105_avg_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "message_105" */
export type Message_105_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message_105". All fields are combined with a logical 'AND'. */
export type Message_105_Bool_Exp = {
  _and?: InputMaybe<Array<Message_105_Bool_Exp>>;
  _not?: InputMaybe<Message_105_Bool_Exp>;
  _or?: InputMaybe<Array<Message_105_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  involved_accounts_addresses?: InputMaybe<String_Array_Comparison_Exp>;
  message_type?: InputMaybe<Message_Type_Bool_Exp>;
  partition_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "message_105" */
export enum Message_105_Constraint {
  /** unique or primary key constraint on columns "index", "partition_id", "transaction_hash" */
  Message_105TransactionHashIndexPartitionIdKey = 'message_105_transaction_hash_index_partition_id_key'
}

/** input type for incrementing numeric columns in table "message_105" */
export type Message_105_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  partition_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "message_105" */
export type Message_105_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  involved_accounts_addresses?: InputMaybe<Array<Scalars['String']>>;
  message_type?: InputMaybe<Message_Type_Obj_Rel_Insert_Input>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  transaction?: InputMaybe<Transaction_Obj_Rel_Insert_Input>;
  transaction_hash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['json']>;
};

/** aggregate max on columns */
export type Message_105_Max_Fields = {
  __typename?: 'message_105_max_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  involved_accounts_addresses?: Maybe<Array<Scalars['String']>>;
  partition_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "message_105" */
export type Message_105_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  involved_accounts_addresses?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_105_Min_Fields = {
  __typename?: 'message_105_min_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  involved_accounts_addresses?: Maybe<Array<Scalars['String']>>;
  partition_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "message_105" */
export type Message_105_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  involved_accounts_addresses?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "message_105" */
export type Message_105_Mutation_Response = {
  __typename?: 'message_105_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message_105>;
};

/** on_conflict condition type for table "message_105" */
export type Message_105_On_Conflict = {
  constraint: Message_105_Constraint;
  update_columns?: Array<Message_105_Update_Column>;
  where?: InputMaybe<Message_105_Bool_Exp>;
};

/** Ordering options when selecting data from "message_105". */
export type Message_105_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  involved_accounts_addresses?: InputMaybe<Order_By>;
  message_type?: InputMaybe<Message_Type_Order_By>;
  partition_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "message_105" */
export enum Message_105_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "message_105" */
export type Message_105_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  involved_accounts_addresses?: InputMaybe<Array<Scalars['String']>>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['json']>;
};

/** aggregate stddev on columns */
export type Message_105_Stddev_Fields = {
  __typename?: 'message_105_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "message_105" */
export type Message_105_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_105_Stddev_Pop_Fields = {
  __typename?: 'message_105_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "message_105" */
export type Message_105_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_105_Stddev_Samp_Fields = {
  __typename?: 'message_105_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "message_105" */
export type Message_105_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "message_105" */
export type Message_105_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_105_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_105_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  involved_accounts_addresses?: InputMaybe<Array<Scalars['String']>>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['json']>;
};

/** aggregate sum on columns */
export type Message_105_Sum_Fields = {
  __typename?: 'message_105_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "message_105" */
export type Message_105_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** update columns of table "message_105" */
export enum Message_105_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

export type Message_105_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Message_105_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_105_Set_Input>;
  /** filter the rows which have to be updated */
  where: Message_105_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Message_105_Var_Pop_Fields = {
  __typename?: 'message_105_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "message_105" */
export type Message_105_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_105_Var_Samp_Fields = {
  __typename?: 'message_105_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "message_105" */
export type Message_105_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_105_Variance_Fields = {
  __typename?: 'message_105_variance_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "message_105" */
export type Message_105_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: 'message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

export type Message_Aggregate_Bool_Exp = {
  count?: InputMaybe<Message_Aggregate_Bool_Exp_Count>;
};

export type Message_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Message_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg?: InputMaybe<Message_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
  stddev?: InputMaybe<Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Message_Sum_Order_By>;
  var_pop?: InputMaybe<Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'message_avg_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  involved_accounts_addresses?: InputMaybe<String_Array_Comparison_Exp>;
  message_type?: InputMaybe<Message_Type_Bool_Exp>;
  partition_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transactionByPartitionIdTransactionHash?: InputMaybe<Transaction_Bool_Exp>;
  transaction_105?: InputMaybe<Transaction_105_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "message" */
export enum Message_Constraint {
  /** unique or primary key constraint on columns "index", "partition_id", "transaction_hash" */
  UniqueMessagePerTx = 'unique_message_per_tx'
}

/** input type for incrementing numeric columns in table "message" */
export type Message_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  partition_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "message" */
export type Message_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  involved_accounts_addresses?: InputMaybe<Array<Scalars['String']>>;
  message_type?: InputMaybe<Message_Type_Obj_Rel_Insert_Input>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  transaction?: InputMaybe<Transaction_Obj_Rel_Insert_Input>;
  transactionByPartitionIdTransactionHash?: InputMaybe<Transaction_Obj_Rel_Insert_Input>;
  transaction_105?: InputMaybe<Transaction_105_Obj_Rel_Insert_Input>;
  transaction_hash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['json']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'message_max_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  involved_accounts_addresses?: Maybe<Array<Scalars['String']>>;
  partition_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  involved_accounts_addresses?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'message_min_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  involved_accounts_addresses?: Maybe<Array<Scalars['String']>>;
  partition_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  involved_accounts_addresses?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "message" */
export type Message_Mutation_Response = {
  __typename?: 'message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  involved_accounts_addresses?: InputMaybe<Order_By>;
  message_type?: InputMaybe<Message_Type_Order_By>;
  partition_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transactionByPartitionIdTransactionHash?: InputMaybe<Transaction_Order_By>;
  transaction_105?: InputMaybe<Transaction_105_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "message" */
export type Message_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  involved_accounts_addresses?: InputMaybe<Array<Scalars['String']>>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['json']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'message_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'message_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'message_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  involved_accounts_addresses?: InputMaybe<Array<Scalars['String']>>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['json']>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'message_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "message_type" */
export type Message_Type = {
  __typename?: 'message_type';
  height: Scalars['bigint'];
  label: Scalars['String'];
  /** An array relationship */
  message_105s: Array<Message_105>;
  /** An aggregate relationship */
  message_105s_aggregate: Message_105_Aggregate;
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregate relationship */
  messages_aggregate: Message_Aggregate;
  module: Scalars['String'];
  type: Scalars['String'];
};


/** columns and relationships of "message_type" */
export type Message_TypeMessage_105sArgs = {
  distinct_on?: InputMaybe<Array<Message_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_105_Order_By>>;
  where?: InputMaybe<Message_105_Bool_Exp>;
};


/** columns and relationships of "message_type" */
export type Message_TypeMessage_105s_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_105_Order_By>>;
  where?: InputMaybe<Message_105_Bool_Exp>;
};


/** columns and relationships of "message_type" */
export type Message_TypeMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "message_type" */
export type Message_TypeMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** aggregated selection of "message_type" */
export type Message_Type_Aggregate = {
  __typename?: 'message_type_aggregate';
  aggregate?: Maybe<Message_Type_Aggregate_Fields>;
  nodes: Array<Message_Type>;
};

/** aggregate fields of "message_type" */
export type Message_Type_Aggregate_Fields = {
  __typename?: 'message_type_aggregate_fields';
  avg?: Maybe<Message_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Message_Type_Max_Fields>;
  min?: Maybe<Message_Type_Min_Fields>;
  stddev?: Maybe<Message_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Type_Sum_Fields>;
  var_pop?: Maybe<Message_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Type_Var_Samp_Fields>;
  variance?: Maybe<Message_Type_Variance_Fields>;
};


/** aggregate fields of "message_type" */
export type Message_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Message_Type_Avg_Fields = {
  __typename?: 'message_type_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "message_type". All fields are combined with a logical 'AND'. */
export type Message_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Type_Bool_Exp>>;
  _not?: InputMaybe<Message_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Type_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  message_105s?: InputMaybe<Message_105_Bool_Exp>;
  message_105s_aggregate?: InputMaybe<Message_105_Aggregate_Bool_Exp>;
  messages?: InputMaybe<Message_Bool_Exp>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  module?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "message_type" */
export enum Message_Type_Constraint {
  /** unique or primary key constraint on columns "type" */
  MessageTypeTypeKey = 'message_type_type_key'
}

/** input type for incrementing numeric columns in table "message_type" */
export type Message_Type_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "message_type" */
export type Message_Type_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  label?: InputMaybe<Scalars['String']>;
  message_105s?: InputMaybe<Message_105_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  module?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Message_Type_Max_Fields = {
  __typename?: 'message_type_max_fields';
  height?: Maybe<Scalars['bigint']>;
  label?: Maybe<Scalars['String']>;
  module?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Message_Type_Min_Fields = {
  __typename?: 'message_type_min_fields';
  height?: Maybe<Scalars['bigint']>;
  label?: Maybe<Scalars['String']>;
  module?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "message_type" */
export type Message_Type_Mutation_Response = {
  __typename?: 'message_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message_Type>;
};

/** input type for inserting object relation for remote table "message_type" */
export type Message_Type_Obj_Rel_Insert_Input = {
  data: Message_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Message_Type_On_Conflict>;
};

/** on_conflict condition type for table "message_type" */
export type Message_Type_On_Conflict = {
  constraint: Message_Type_Constraint;
  update_columns?: Array<Message_Type_Update_Column>;
  where?: InputMaybe<Message_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "message_type". */
export type Message_Type_Order_By = {
  height?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  message_105s_aggregate?: InputMaybe<Message_105_Aggregate_Order_By>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  module?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "message_type" */
export enum Message_Type_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Label = 'label',
  /** column name */
  Module = 'module',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "message_type" */
export type Message_Type_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  label?: InputMaybe<Scalars['String']>;
  module?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Message_Type_Stddev_Fields = {
  __typename?: 'message_type_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Message_Type_Stddev_Pop_Fields = {
  __typename?: 'message_type_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Message_Type_Stddev_Samp_Fields = {
  __typename?: 'message_type_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "message_type" */
export type Message_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Type_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  label?: InputMaybe<Scalars['String']>;
  module?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Message_Type_Sum_Fields = {
  __typename?: 'message_type_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "message_type" */
export enum Message_Type_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Label = 'label',
  /** column name */
  Module = 'module',
  /** column name */
  Type = 'type'
}

export type Message_Type_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Message_Type_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Message_Type_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Message_Type_Var_Pop_Fields = {
  __typename?: 'message_type_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Message_Type_Var_Samp_Fields = {
  __typename?: 'message_type_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Message_Type_Variance_Fields = {
  __typename?: 'message_type_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** update columns of table "message" */
export enum Message_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

export type Message_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Message_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_Set_Input>;
  /** filter the rows which have to be updated */
  where: Message_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'message_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'message_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'message_variance_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

export type Messages_By_Address_Args = {
  addresses?: InputMaybe<Scalars['_text']>;
  limit?: InputMaybe<Scalars['bigint']>;
  offset?: InputMaybe<Scalars['bigint']>;
  types?: InputMaybe<Scalars['_text']>;
};

/** columns and relationships of "mint_params" */
export type Mint_Params = {
  __typename?: 'mint_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "mint_params" */
export type Mint_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mint_params" */
export type Mint_Params_Aggregate = {
  __typename?: 'mint_params_aggregate';
  aggregate?: Maybe<Mint_Params_Aggregate_Fields>;
  nodes: Array<Mint_Params>;
};

/** aggregate fields of "mint_params" */
export type Mint_Params_Aggregate_Fields = {
  __typename?: 'mint_params_aggregate_fields';
  avg?: Maybe<Mint_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Mint_Params_Max_Fields>;
  min?: Maybe<Mint_Params_Min_Fields>;
  stddev?: Maybe<Mint_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Mint_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mint_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Mint_Params_Sum_Fields>;
  var_pop?: Maybe<Mint_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Mint_Params_Var_Samp_Fields>;
  variance?: Maybe<Mint_Params_Variance_Fields>;
};


/** aggregate fields of "mint_params" */
export type Mint_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mint_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Mint_Params_Append_Input = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Mint_Params_Avg_Fields = {
  __typename?: 'mint_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mint_params". All fields are combined with a logical 'AND'. */
export type Mint_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Mint_Params_Bool_Exp>>;
  _not?: InputMaybe<Mint_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Mint_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "mint_params" */
export enum Mint_Params_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  MintParamsPkey = 'mint_params_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Mint_Params_Delete_At_Path_Input = {
  params?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Mint_Params_Delete_Elem_Input = {
  params?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Mint_Params_Delete_Key_Input = {
  params?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "mint_params" */
export type Mint_Params_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "mint_params" */
export type Mint_Params_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Mint_Params_Max_Fields = {
  __typename?: 'mint_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Mint_Params_Min_Fields = {
  __typename?: 'mint_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "mint_params" */
export type Mint_Params_Mutation_Response = {
  __typename?: 'mint_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Mint_Params>;
};

/** on_conflict condition type for table "mint_params" */
export type Mint_Params_On_Conflict = {
  constraint: Mint_Params_Constraint;
  update_columns?: Array<Mint_Params_Update_Column>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "mint_params". */
export type Mint_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** primary key columns input for table: mint_params */
export type Mint_Params_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Mint_Params_Prepend_Input = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "mint_params" */
export enum Mint_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "mint_params" */
export type Mint_Params_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Mint_Params_Stddev_Fields = {
  __typename?: 'mint_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Mint_Params_Stddev_Pop_Fields = {
  __typename?: 'mint_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Mint_Params_Stddev_Samp_Fields = {
  __typename?: 'mint_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mint_params" */
export type Mint_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mint_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mint_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Mint_Params_Sum_Fields = {
  __typename?: 'mint_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "mint_params" */
export enum Mint_Params_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

export type Mint_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Mint_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Mint_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Mint_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Mint_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Mint_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Mint_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Mint_Params_Set_Input>;
  /** filter the rows which have to be updated */
  where: Mint_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Mint_Params_Var_Pop_Fields = {
  __typename?: 'mint_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Mint_Params_Var_Samp_Fields = {
  __typename?: 'mint_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Mint_Params_Variance_Fields = {
  __typename?: 'mint_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "modules" */
export type Modules = {
  __typename?: 'modules';
  module_name: Scalars['String'];
};

/** aggregated selection of "modules" */
export type Modules_Aggregate = {
  __typename?: 'modules_aggregate';
  aggregate?: Maybe<Modules_Aggregate_Fields>;
  nodes: Array<Modules>;
};

/** aggregate fields of "modules" */
export type Modules_Aggregate_Fields = {
  __typename?: 'modules_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Modules_Max_Fields>;
  min?: Maybe<Modules_Min_Fields>;
};


/** aggregate fields of "modules" */
export type Modules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Modules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "modules". All fields are combined with a logical 'AND'. */
export type Modules_Bool_Exp = {
  _and?: InputMaybe<Array<Modules_Bool_Exp>>;
  _not?: InputMaybe<Modules_Bool_Exp>;
  _or?: InputMaybe<Array<Modules_Bool_Exp>>;
  module_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "modules" */
export enum Modules_Constraint {
  /** unique or primary key constraint on columns "module_name" */
  ModulesPkey = 'modules_pkey'
}

/** input type for inserting data into table "modules" */
export type Modules_Insert_Input = {
  module_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Modules_Max_Fields = {
  __typename?: 'modules_max_fields';
  module_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Modules_Min_Fields = {
  __typename?: 'modules_min_fields';
  module_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "modules" */
export type Modules_Mutation_Response = {
  __typename?: 'modules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Modules>;
};

/** on_conflict condition type for table "modules" */
export type Modules_On_Conflict = {
  constraint: Modules_Constraint;
  update_columns?: Array<Modules_Update_Column>;
  where?: InputMaybe<Modules_Bool_Exp>;
};

/** Ordering options when selecting data from "modules". */
export type Modules_Order_By = {
  module_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: modules */
export type Modules_Pk_Columns_Input = {
  module_name: Scalars['String'];
};

/** select columns of table "modules" */
export enum Modules_Select_Column {
  /** column name */
  ModuleName = 'module_name'
}

/** input type for updating data in table "modules" */
export type Modules_Set_Input = {
  module_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "modules" */
export type Modules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Modules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Modules_Stream_Cursor_Value_Input = {
  module_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "modules" */
export enum Modules_Update_Column {
  /** column name */
  ModuleName = 'module_name'
}

export type Modules_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Modules_Set_Input>;
  /** filter the rows which have to be updated */
  where: Modules_Bool_Exp;
};

/** Boolean expression to compare columns of type "ms_coin". All fields are combined with logical 'AND'. */
export type Ms_Coin_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['ms_coin']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['ms_coin']>>;
  _eq?: InputMaybe<Array<Scalars['ms_coin']>>;
  _gt?: InputMaybe<Array<Scalars['ms_coin']>>;
  _gte?: InputMaybe<Array<Scalars['ms_coin']>>;
  _in?: InputMaybe<Array<Array<Scalars['ms_coin']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Array<Scalars['ms_coin']>>;
  _lte?: InputMaybe<Array<Scalars['ms_coin']>>;
  _neq?: InputMaybe<Array<Scalars['ms_coin']>>;
  _nin?: InputMaybe<Array<Array<Scalars['ms_coin']>>>;
};

/** columns and relationships of "ms_event" */
export type Ms_Event = {
  __typename?: 'ms_event';
  amount: Scalars['String'];
  /** An object relationship */
  block: Block;
  del_addr: Scalars['String'];
  height: Scalars['bigint'];
  name: Scalars['String'];
  val_addr: Scalars['String'];
};

/** aggregated selection of "ms_event" */
export type Ms_Event_Aggregate = {
  __typename?: 'ms_event_aggregate';
  aggregate?: Maybe<Ms_Event_Aggregate_Fields>;
  nodes: Array<Ms_Event>;
};

export type Ms_Event_Aggregate_Bool_Exp = {
  count?: InputMaybe<Ms_Event_Aggregate_Bool_Exp_Count>;
};

export type Ms_Event_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Ms_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Ms_Event_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ms_event" */
export type Ms_Event_Aggregate_Fields = {
  __typename?: 'ms_event_aggregate_fields';
  avg?: Maybe<Ms_Event_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ms_Event_Max_Fields>;
  min?: Maybe<Ms_Event_Min_Fields>;
  stddev?: Maybe<Ms_Event_Stddev_Fields>;
  stddev_pop?: Maybe<Ms_Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ms_Event_Stddev_Samp_Fields>;
  sum?: Maybe<Ms_Event_Sum_Fields>;
  var_pop?: Maybe<Ms_Event_Var_Pop_Fields>;
  var_samp?: Maybe<Ms_Event_Var_Samp_Fields>;
  variance?: Maybe<Ms_Event_Variance_Fields>;
};


/** aggregate fields of "ms_event" */
export type Ms_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ms_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ms_event" */
export type Ms_Event_Aggregate_Order_By = {
  avg?: InputMaybe<Ms_Event_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ms_Event_Max_Order_By>;
  min?: InputMaybe<Ms_Event_Min_Order_By>;
  stddev?: InputMaybe<Ms_Event_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ms_Event_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ms_Event_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ms_Event_Sum_Order_By>;
  var_pop?: InputMaybe<Ms_Event_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ms_Event_Var_Samp_Order_By>;
  variance?: InputMaybe<Ms_Event_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ms_event" */
export type Ms_Event_Arr_Rel_Insert_Input = {
  data: Array<Ms_Event_Insert_Input>;
};

/** aggregate avg on columns */
export type Ms_Event_Avg_Fields = {
  __typename?: 'ms_event_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ms_event" */
export type Ms_Event_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ms_event". All fields are combined with a logical 'AND'. */
export type Ms_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Ms_Event_Bool_Exp>>;
  _not?: InputMaybe<Ms_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Ms_Event_Bool_Exp>>;
  amount?: InputMaybe<String_Comparison_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  del_addr?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  val_addr?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "ms_event" */
export type Ms_Event_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "ms_event" */
export type Ms_Event_Insert_Input = {
  amount?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  del_addr?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ms_Event_Max_Fields = {
  __typename?: 'ms_event_max_fields';
  amount?: Maybe<Scalars['String']>;
  del_addr?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  val_addr?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ms_event" */
export type Ms_Event_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  del_addr?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  val_addr?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ms_Event_Min_Fields = {
  __typename?: 'ms_event_min_fields';
  amount?: Maybe<Scalars['String']>;
  del_addr?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  val_addr?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ms_event" */
export type Ms_Event_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  del_addr?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  val_addr?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ms_event" */
export type Ms_Event_Mutation_Response = {
  __typename?: 'ms_event_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ms_Event>;
};

/** Ordering options when selecting data from "ms_event". */
export type Ms_Event_Order_By = {
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Block_Order_By>;
  del_addr?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  val_addr?: InputMaybe<Order_By>;
};

/** select columns of table "ms_event" */
export enum Ms_Event_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DelAddr = 'del_addr',
  /** column name */
  Height = 'height',
  /** column name */
  Name = 'name',
  /** column name */
  ValAddr = 'val_addr'
}

/** input type for updating data in table "ms_event" */
export type Ms_Event_Set_Input = {
  amount?: InputMaybe<Scalars['String']>;
  del_addr?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ms_Event_Stddev_Fields = {
  __typename?: 'ms_event_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ms_event" */
export type Ms_Event_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ms_Event_Stddev_Pop_Fields = {
  __typename?: 'ms_event_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ms_event" */
export type Ms_Event_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ms_Event_Stddev_Samp_Fields = {
  __typename?: 'ms_event_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ms_event" */
export type Ms_Event_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ms_event" */
export type Ms_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ms_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ms_Event_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['String']>;
  del_addr?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Ms_Event_Sum_Fields = {
  __typename?: 'ms_event_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "ms_event" */
export type Ms_Event_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

export type Ms_Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ms_Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ms_Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ms_Event_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ms_Event_Var_Pop_Fields = {
  __typename?: 'ms_event_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ms_event" */
export type Ms_Event_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ms_Event_Var_Samp_Fields = {
  __typename?: 'ms_event_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ms_event" */
export type Ms_Event_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ms_Event_Variance_Fields = {
  __typename?: 'ms_event_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ms_event" */
export type Ms_Event_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "ms_locks" */
export type Ms_Locks = {
  __typename?: 'ms_locks';
  height: Scalars['bigint'];
  ms_lock: Array<Scalars['ms_coin']>;
  staker_addr: Scalars['String'];
  val_addr: Scalars['String'];
};

/** aggregated selection of "ms_locks" */
export type Ms_Locks_Aggregate = {
  __typename?: 'ms_locks_aggregate';
  aggregate?: Maybe<Ms_Locks_Aggregate_Fields>;
  nodes: Array<Ms_Locks>;
};

/** aggregate fields of "ms_locks" */
export type Ms_Locks_Aggregate_Fields = {
  __typename?: 'ms_locks_aggregate_fields';
  avg?: Maybe<Ms_Locks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ms_Locks_Max_Fields>;
  min?: Maybe<Ms_Locks_Min_Fields>;
  stddev?: Maybe<Ms_Locks_Stddev_Fields>;
  stddev_pop?: Maybe<Ms_Locks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ms_Locks_Stddev_Samp_Fields>;
  sum?: Maybe<Ms_Locks_Sum_Fields>;
  var_pop?: Maybe<Ms_Locks_Var_Pop_Fields>;
  var_samp?: Maybe<Ms_Locks_Var_Samp_Fields>;
  variance?: Maybe<Ms_Locks_Variance_Fields>;
};


/** aggregate fields of "ms_locks" */
export type Ms_Locks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ms_Locks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ms_Locks_Avg_Fields = {
  __typename?: 'ms_locks_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ms_locks". All fields are combined with a logical 'AND'. */
export type Ms_Locks_Bool_Exp = {
  _and?: InputMaybe<Array<Ms_Locks_Bool_Exp>>;
  _not?: InputMaybe<Ms_Locks_Bool_Exp>;
  _or?: InputMaybe<Array<Ms_Locks_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  ms_lock?: InputMaybe<Ms_Coin_Array_Comparison_Exp>;
  staker_addr?: InputMaybe<String_Comparison_Exp>;
  val_addr?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ms_locks" */
export enum Ms_Locks_Constraint {
  /** unique or primary key constraint on columns "val_addr", "staker_addr" */
  MsLocksPkey = 'ms_locks_pkey'
}

/** input type for incrementing numeric columns in table "ms_locks" */
export type Ms_Locks_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "ms_locks" */
export type Ms_Locks_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  ms_lock?: InputMaybe<Array<Scalars['ms_coin']>>;
  staker_addr?: InputMaybe<Scalars['String']>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ms_Locks_Max_Fields = {
  __typename?: 'ms_locks_max_fields';
  height?: Maybe<Scalars['bigint']>;
  ms_lock?: Maybe<Array<Scalars['ms_coin']>>;
  staker_addr?: Maybe<Scalars['String']>;
  val_addr?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ms_Locks_Min_Fields = {
  __typename?: 'ms_locks_min_fields';
  height?: Maybe<Scalars['bigint']>;
  ms_lock?: Maybe<Array<Scalars['ms_coin']>>;
  staker_addr?: Maybe<Scalars['String']>;
  val_addr?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ms_locks" */
export type Ms_Locks_Mutation_Response = {
  __typename?: 'ms_locks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ms_Locks>;
};

/** on_conflict condition type for table "ms_locks" */
export type Ms_Locks_On_Conflict = {
  constraint: Ms_Locks_Constraint;
  update_columns?: Array<Ms_Locks_Update_Column>;
  where?: InputMaybe<Ms_Locks_Bool_Exp>;
};

/** Ordering options when selecting data from "ms_locks". */
export type Ms_Locks_Order_By = {
  height?: InputMaybe<Order_By>;
  ms_lock?: InputMaybe<Order_By>;
  staker_addr?: InputMaybe<Order_By>;
  val_addr?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ms_locks */
export type Ms_Locks_Pk_Columns_Input = {
  staker_addr: Scalars['String'];
  val_addr: Scalars['String'];
};

/** select columns of table "ms_locks" */
export enum Ms_Locks_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  MsLock = 'ms_lock',
  /** column name */
  StakerAddr = 'staker_addr',
  /** column name */
  ValAddr = 'val_addr'
}

/** input type for updating data in table "ms_locks" */
export type Ms_Locks_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  ms_lock?: InputMaybe<Array<Scalars['ms_coin']>>;
  staker_addr?: InputMaybe<Scalars['String']>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ms_Locks_Stddev_Fields = {
  __typename?: 'ms_locks_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ms_Locks_Stddev_Pop_Fields = {
  __typename?: 'ms_locks_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ms_Locks_Stddev_Samp_Fields = {
  __typename?: 'ms_locks_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "ms_locks" */
export type Ms_Locks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ms_Locks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ms_Locks_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  ms_lock?: InputMaybe<Array<Scalars['ms_coin']>>;
  staker_addr?: InputMaybe<Scalars['String']>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Ms_Locks_Sum_Fields = {
  __typename?: 'ms_locks_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "ms_locks" */
export enum Ms_Locks_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  MsLock = 'ms_lock',
  /** column name */
  StakerAddr = 'staker_addr',
  /** column name */
  ValAddr = 'val_addr'
}

export type Ms_Locks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ms_Locks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ms_Locks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ms_Locks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ms_Locks_Var_Pop_Fields = {
  __typename?: 'ms_locks_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ms_Locks_Var_Samp_Fields = {
  __typename?: 'ms_locks_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ms_Locks_Variance_Fields = {
  __typename?: 'ms_locks_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "ms_unlock_entry". All fields are combined with logical 'AND'. */
export type Ms_Unlock_Entry_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  _eq?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  _gt?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  _gte?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  _in?: InputMaybe<Array<Array<Scalars['ms_unlock_entry']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  _lte?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  _neq?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  _nin?: InputMaybe<Array<Array<Scalars['ms_unlock_entry']>>>;
};

/** columns and relationships of "ms_unlocks" */
export type Ms_Unlocks = {
  __typename?: 'ms_unlocks';
  height: Scalars['bigint'];
  staker_addr: Scalars['String'];
  unlock_entry: Array<Scalars['ms_unlock_entry']>;
  val_addr: Scalars['String'];
};

/** aggregated selection of "ms_unlocks" */
export type Ms_Unlocks_Aggregate = {
  __typename?: 'ms_unlocks_aggregate';
  aggregate?: Maybe<Ms_Unlocks_Aggregate_Fields>;
  nodes: Array<Ms_Unlocks>;
};

/** aggregate fields of "ms_unlocks" */
export type Ms_Unlocks_Aggregate_Fields = {
  __typename?: 'ms_unlocks_aggregate_fields';
  avg?: Maybe<Ms_Unlocks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ms_Unlocks_Max_Fields>;
  min?: Maybe<Ms_Unlocks_Min_Fields>;
  stddev?: Maybe<Ms_Unlocks_Stddev_Fields>;
  stddev_pop?: Maybe<Ms_Unlocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ms_Unlocks_Stddev_Samp_Fields>;
  sum?: Maybe<Ms_Unlocks_Sum_Fields>;
  var_pop?: Maybe<Ms_Unlocks_Var_Pop_Fields>;
  var_samp?: Maybe<Ms_Unlocks_Var_Samp_Fields>;
  variance?: Maybe<Ms_Unlocks_Variance_Fields>;
};


/** aggregate fields of "ms_unlocks" */
export type Ms_Unlocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ms_Unlocks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ms_Unlocks_Avg_Fields = {
  __typename?: 'ms_unlocks_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ms_unlocks". All fields are combined with a logical 'AND'. */
export type Ms_Unlocks_Bool_Exp = {
  _and?: InputMaybe<Array<Ms_Unlocks_Bool_Exp>>;
  _not?: InputMaybe<Ms_Unlocks_Bool_Exp>;
  _or?: InputMaybe<Array<Ms_Unlocks_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  staker_addr?: InputMaybe<String_Comparison_Exp>;
  unlock_entry?: InputMaybe<Ms_Unlock_Entry_Array_Comparison_Exp>;
  val_addr?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ms_unlocks" */
export enum Ms_Unlocks_Constraint {
  /** unique or primary key constraint on columns "val_addr", "staker_addr" */
  MsUnlocksPkey = 'ms_unlocks_pkey'
}

/** input type for incrementing numeric columns in table "ms_unlocks" */
export type Ms_Unlocks_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "ms_unlocks" */
export type Ms_Unlocks_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  staker_addr?: InputMaybe<Scalars['String']>;
  unlock_entry?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ms_Unlocks_Max_Fields = {
  __typename?: 'ms_unlocks_max_fields';
  height?: Maybe<Scalars['bigint']>;
  staker_addr?: Maybe<Scalars['String']>;
  unlock_entry?: Maybe<Array<Scalars['ms_unlock_entry']>>;
  val_addr?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ms_Unlocks_Min_Fields = {
  __typename?: 'ms_unlocks_min_fields';
  height?: Maybe<Scalars['bigint']>;
  staker_addr?: Maybe<Scalars['String']>;
  unlock_entry?: Maybe<Array<Scalars['ms_unlock_entry']>>;
  val_addr?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ms_unlocks" */
export type Ms_Unlocks_Mutation_Response = {
  __typename?: 'ms_unlocks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ms_Unlocks>;
};

/** on_conflict condition type for table "ms_unlocks" */
export type Ms_Unlocks_On_Conflict = {
  constraint: Ms_Unlocks_Constraint;
  update_columns?: Array<Ms_Unlocks_Update_Column>;
  where?: InputMaybe<Ms_Unlocks_Bool_Exp>;
};

/** Ordering options when selecting data from "ms_unlocks". */
export type Ms_Unlocks_Order_By = {
  height?: InputMaybe<Order_By>;
  staker_addr?: InputMaybe<Order_By>;
  unlock_entry?: InputMaybe<Order_By>;
  val_addr?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ms_unlocks */
export type Ms_Unlocks_Pk_Columns_Input = {
  staker_addr: Scalars['String'];
  val_addr: Scalars['String'];
};

/** select columns of table "ms_unlocks" */
export enum Ms_Unlocks_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  StakerAddr = 'staker_addr',
  /** column name */
  UnlockEntry = 'unlock_entry',
  /** column name */
  ValAddr = 'val_addr'
}

/** input type for updating data in table "ms_unlocks" */
export type Ms_Unlocks_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  staker_addr?: InputMaybe<Scalars['String']>;
  unlock_entry?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ms_Unlocks_Stddev_Fields = {
  __typename?: 'ms_unlocks_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ms_Unlocks_Stddev_Pop_Fields = {
  __typename?: 'ms_unlocks_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ms_Unlocks_Stddev_Samp_Fields = {
  __typename?: 'ms_unlocks_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "ms_unlocks" */
export type Ms_Unlocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ms_Unlocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ms_Unlocks_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  staker_addr?: InputMaybe<Scalars['String']>;
  unlock_entry?: InputMaybe<Array<Scalars['ms_unlock_entry']>>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Ms_Unlocks_Sum_Fields = {
  __typename?: 'ms_unlocks_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "ms_unlocks" */
export enum Ms_Unlocks_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  StakerAddr = 'staker_addr',
  /** column name */
  UnlockEntry = 'unlock_entry',
  /** column name */
  ValAddr = 'val_addr'
}

export type Ms_Unlocks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ms_Unlocks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ms_Unlocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ms_Unlocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ms_Unlocks_Var_Pop_Fields = {
  __typename?: 'ms_unlocks_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ms_Unlocks_Var_Samp_Fields = {
  __typename?: 'ms_unlocks_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ms_Unlocks_Variance_Fields = {
  __typename?: 'ms_unlocks_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "average_block_time_from_genesis" */
  delete_average_block_time_from_genesis?: Maybe<Average_Block_Time_From_Genesis_Mutation_Response>;
  /** delete single row from the table: "average_block_time_from_genesis" */
  delete_average_block_time_from_genesis_by_pk?: Maybe<Average_Block_Time_From_Genesis>;
  /** delete data from the table: "average_block_time_per_day" */
  delete_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_day" */
  delete_average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** delete data from the table: "average_block_time_per_hour" */
  delete_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_hour" */
  delete_average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** delete data from the table: "average_block_time_per_minute" */
  delete_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_minute" */
  delete_average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** delete data from the table: "balance" */
  delete_balance?: Maybe<Balance_Mutation_Response>;
  /** delete single row from the table: "balance" */
  delete_balance_by_pk?: Maybe<Balance>;
  /** delete data from the table: "block" */
  delete_block?: Maybe<Block_Mutation_Response>;
  /** delete single row from the table: "block" */
  delete_block_by_pk?: Maybe<Block>;
  /** delete data from the table: "community_pool" */
  delete_community_pool?: Maybe<Community_Pool_Mutation_Response>;
  /** delete single row from the table: "community_pool" */
  delete_community_pool_by_pk?: Maybe<Community_Pool>;
  /** delete data from the table: "distribution_params" */
  delete_distribution_params?: Maybe<Distribution_Params_Mutation_Response>;
  /** delete single row from the table: "distribution_params" */
  delete_distribution_params_by_pk?: Maybe<Distribution_Params>;
  /** delete data from the table: "double_sign_evidence" */
  delete_double_sign_evidence?: Maybe<Double_Sign_Evidence_Mutation_Response>;
  /** delete data from the table: "double_sign_vote" */
  delete_double_sign_vote?: Maybe<Double_Sign_Vote_Mutation_Response>;
  /** delete single row from the table: "double_sign_vote" */
  delete_double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** delete data from the table: "fee_grant_allowance" */
  delete_fee_grant_allowance?: Maybe<Fee_Grant_Allowance_Mutation_Response>;
  /** delete single row from the table: "fee_grant_allowance" */
  delete_fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>;
  /** delete data from the table: "genesis" */
  delete_genesis?: Maybe<Genesis_Mutation_Response>;
  /** delete single row from the table: "genesis" */
  delete_genesis_by_pk?: Maybe<Genesis>;
  /** delete data from the table: "gov_params" */
  delete_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** delete single row from the table: "gov_params" */
  delete_gov_params_by_pk?: Maybe<Gov_Params>;
  /** delete data from the table: "inflation" */
  delete_inflation?: Maybe<Inflation_Mutation_Response>;
  /** delete single row from the table: "inflation" */
  delete_inflation_by_pk?: Maybe<Inflation>;
  /** delete data from the table: "message" */
  delete_message?: Maybe<Message_Mutation_Response>;
  /** delete data from the table: "message_105" */
  delete_message_105?: Maybe<Message_105_Mutation_Response>;
  /** delete data from the table: "message_type" */
  delete_message_type?: Maybe<Message_Type_Mutation_Response>;
  /** delete data from the table: "mint_params" */
  delete_mint_params?: Maybe<Mint_Params_Mutation_Response>;
  /** delete single row from the table: "mint_params" */
  delete_mint_params_by_pk?: Maybe<Mint_Params>;
  /** delete data from the table: "modules" */
  delete_modules?: Maybe<Modules_Mutation_Response>;
  /** delete single row from the table: "modules" */
  delete_modules_by_pk?: Maybe<Modules>;
  /** delete data from the table: "ms_event" */
  delete_ms_event?: Maybe<Ms_Event_Mutation_Response>;
  /** delete data from the table: "ms_locks" */
  delete_ms_locks?: Maybe<Ms_Locks_Mutation_Response>;
  /** delete single row from the table: "ms_locks" */
  delete_ms_locks_by_pk?: Maybe<Ms_Locks>;
  /** delete data from the table: "ms_unlocks" */
  delete_ms_unlocks?: Maybe<Ms_Unlocks_Mutation_Response>;
  /** delete single row from the table: "ms_unlocks" */
  delete_ms_unlocks_by_pk?: Maybe<Ms_Unlocks>;
  /** delete data from the table: "pre_commit" */
  delete_pre_commit?: Maybe<Pre_Commit_Mutation_Response>;
  /** delete data from the table: "proposal" */
  delete_proposal?: Maybe<Proposal_Mutation_Response>;
  /** delete single row from the table: "proposal" */
  delete_proposal_by_pk?: Maybe<Proposal>;
  /** delete data from the table: "proposal_deposit" */
  delete_proposal_deposit?: Maybe<Proposal_Deposit_Mutation_Response>;
  /** delete data from the table: "proposal_staking_pool_snapshot" */
  delete_proposal_staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>;
  /** delete single row from the table: "proposal_staking_pool_snapshot" */
  delete_proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** delete data from the table: "proposal_tally_result" */
  delete_proposal_tally_result?: Maybe<Proposal_Tally_Result_Mutation_Response>;
  /** delete single row from the table: "proposal_tally_result" */
  delete_proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** delete data from the table: "proposal_validator_status_snapshot" */
  delete_proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>;
  /** delete single row from the table: "proposal_validator_status_snapshot" */
  delete_proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** delete data from the table: "proposal_vote" */
  delete_proposal_vote?: Maybe<Proposal_Vote_Mutation_Response>;
  /** delete data from the table: "pruning" */
  delete_pruning?: Maybe<Pruning_Mutation_Response>;
  /** delete data from the table: "slashing_params" */
  delete_slashing_params?: Maybe<Slashing_Params_Mutation_Response>;
  /** delete single row from the table: "slashing_params" */
  delete_slashing_params_by_pk?: Maybe<Slashing_Params>;
  /** delete data from the table: "software_upgrade_plan" */
  delete_software_upgrade_plan?: Maybe<Software_Upgrade_Plan_Mutation_Response>;
  /** delete data from the table: "staking_params" */
  delete_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** delete single row from the table: "staking_params" */
  delete_staking_params_by_pk?: Maybe<Staking_Params>;
  /** delete data from the table: "staking_pool" */
  delete_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** delete single row from the table: "staking_pool" */
  delete_staking_pool_by_pk?: Maybe<Staking_Pool>;
  /** delete data from the table: "supply" */
  delete_supply?: Maybe<Supply_Mutation_Response>;
  /** delete single row from the table: "supply" */
  delete_supply_by_pk?: Maybe<Supply>;
  /** delete data from the table: "token" */
  delete_token?: Maybe<Token_Mutation_Response>;
  /** delete data from the table: "token_bonded" */
  delete_token_bonded?: Maybe<Token_Bonded_Mutation_Response>;
  /** delete single row from the table: "token_bonded" */
  delete_token_bonded_by_pk?: Maybe<Token_Bonded>;
  /** delete data from the table: "token_holder" */
  delete_token_holder?: Maybe<Token_Holder_Mutation_Response>;
  /** delete single row from the table: "token_holder" */
  delete_token_holder_by_pk?: Maybe<Token_Holder>;
  /** delete data from the table: "token_price" */
  delete_token_price?: Maybe<Token_Price_Mutation_Response>;
  /** delete single row from the table: "token_price" */
  delete_token_price_by_pk?: Maybe<Token_Price>;
  /** delete data from the table: "token_price_history" */
  delete_token_price_history?: Maybe<Token_Price_History_Mutation_Response>;
  /** delete single row from the table: "token_price_history" */
  delete_token_price_history_by_pk?: Maybe<Token_Price_History>;
  /** delete data from the table: "token_unbonding" */
  delete_token_unbonding?: Maybe<Token_Unbonding_Mutation_Response>;
  /** delete single row from the table: "token_unbonding" */
  delete_token_unbonding_by_pk?: Maybe<Token_Unbonding>;
  /** delete data from the table: "token_unit" */
  delete_token_unit?: Maybe<Token_Unit_Mutation_Response>;
  /** delete data from the table: "transaction" */
  delete_transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete data from the table: "transaction_105" */
  delete_transaction_105?: Maybe<Transaction_105_Mutation_Response>;
  /** delete data from the table: "validator" */
  delete_validator?: Maybe<Validator_Mutation_Response>;
  /** delete single row from the table: "validator" */
  delete_validator_by_pk?: Maybe<Validator>;
  /** delete data from the table: "validator_commission" */
  delete_validator_commission?: Maybe<Validator_Commission_Mutation_Response>;
  /** delete single row from the table: "validator_commission" */
  delete_validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** delete data from the table: "validator_denom" */
  delete_validator_denom?: Maybe<Validator_Denom_Mutation_Response>;
  /** delete single row from the table: "validator_denom" */
  delete_validator_denom_by_pk?: Maybe<Validator_Denom>;
  /** delete data from the table: "validator_description" */
  delete_validator_description?: Maybe<Validator_Description_Mutation_Response>;
  /** delete single row from the table: "validator_description" */
  delete_validator_description_by_pk?: Maybe<Validator_Description>;
  /** delete data from the table: "validator_info" */
  delete_validator_info?: Maybe<Validator_Info_Mutation_Response>;
  /** delete single row from the table: "validator_info" */
  delete_validator_info_by_pk?: Maybe<Validator_Info>;
  /** delete data from the table: "validator_signing_info" */
  delete_validator_signing_info?: Maybe<Validator_Signing_Info_Mutation_Response>;
  /** delete single row from the table: "validator_signing_info" */
  delete_validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** delete data from the table: "validator_status" */
  delete_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** delete single row from the table: "validator_status" */
  delete_validator_status_by_pk?: Maybe<Validator_Status>;
  /** delete data from the table: "validator_voting_power" */
  delete_validator_voting_power?: Maybe<Validator_Voting_Power_Mutation_Response>;
  /** delete single row from the table: "validator_voting_power" */
  delete_validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** delete data from the table: "vesting_account" */
  delete_vesting_account?: Maybe<Vesting_Account_Mutation_Response>;
  /** delete single row from the table: "vesting_account" */
  delete_vesting_account_by_pk?: Maybe<Vesting_Account>;
  /** delete data from the table: "vesting_period" */
  delete_vesting_period?: Maybe<Vesting_Period_Mutation_Response>;
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>;
  /** insert data into the table: "average_block_time_from_genesis" */
  insert_average_block_time_from_genesis?: Maybe<Average_Block_Time_From_Genesis_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_from_genesis" */
  insert_average_block_time_from_genesis_one?: Maybe<Average_Block_Time_From_Genesis>;
  /** insert data into the table: "average_block_time_per_day" */
  insert_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_day" */
  insert_average_block_time_per_day_one?: Maybe<Average_Block_Time_Per_Day>;
  /** insert data into the table: "average_block_time_per_hour" */
  insert_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_hour" */
  insert_average_block_time_per_hour_one?: Maybe<Average_Block_Time_Per_Hour>;
  /** insert data into the table: "average_block_time_per_minute" */
  insert_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_minute" */
  insert_average_block_time_per_minute_one?: Maybe<Average_Block_Time_Per_Minute>;
  /** insert data into the table: "balance" */
  insert_balance?: Maybe<Balance_Mutation_Response>;
  /** insert a single row into the table: "balance" */
  insert_balance_one?: Maybe<Balance>;
  /** insert data into the table: "block" */
  insert_block?: Maybe<Block_Mutation_Response>;
  /** insert a single row into the table: "block" */
  insert_block_one?: Maybe<Block>;
  /** insert data into the table: "community_pool" */
  insert_community_pool?: Maybe<Community_Pool_Mutation_Response>;
  /** insert a single row into the table: "community_pool" */
  insert_community_pool_one?: Maybe<Community_Pool>;
  /** insert data into the table: "distribution_params" */
  insert_distribution_params?: Maybe<Distribution_Params_Mutation_Response>;
  /** insert a single row into the table: "distribution_params" */
  insert_distribution_params_one?: Maybe<Distribution_Params>;
  /** insert data into the table: "double_sign_evidence" */
  insert_double_sign_evidence?: Maybe<Double_Sign_Evidence_Mutation_Response>;
  /** insert a single row into the table: "double_sign_evidence" */
  insert_double_sign_evidence_one?: Maybe<Double_Sign_Evidence>;
  /** insert data into the table: "double_sign_vote" */
  insert_double_sign_vote?: Maybe<Double_Sign_Vote_Mutation_Response>;
  /** insert a single row into the table: "double_sign_vote" */
  insert_double_sign_vote_one?: Maybe<Double_Sign_Vote>;
  /** insert data into the table: "fee_grant_allowance" */
  insert_fee_grant_allowance?: Maybe<Fee_Grant_Allowance_Mutation_Response>;
  /** insert a single row into the table: "fee_grant_allowance" */
  insert_fee_grant_allowance_one?: Maybe<Fee_Grant_Allowance>;
  /** insert data into the table: "genesis" */
  insert_genesis?: Maybe<Genesis_Mutation_Response>;
  /** insert a single row into the table: "genesis" */
  insert_genesis_one?: Maybe<Genesis>;
  /** insert data into the table: "gov_params" */
  insert_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** insert a single row into the table: "gov_params" */
  insert_gov_params_one?: Maybe<Gov_Params>;
  /** insert data into the table: "inflation" */
  insert_inflation?: Maybe<Inflation_Mutation_Response>;
  /** insert a single row into the table: "inflation" */
  insert_inflation_one?: Maybe<Inflation>;
  /** insert data into the table: "message" */
  insert_message?: Maybe<Message_Mutation_Response>;
  /** insert data into the table: "message_105" */
  insert_message_105?: Maybe<Message_105_Mutation_Response>;
  /** insert a single row into the table: "message_105" */
  insert_message_105_one?: Maybe<Message_105>;
  /** insert a single row into the table: "message" */
  insert_message_one?: Maybe<Message>;
  /** insert data into the table: "message_type" */
  insert_message_type?: Maybe<Message_Type_Mutation_Response>;
  /** insert a single row into the table: "message_type" */
  insert_message_type_one?: Maybe<Message_Type>;
  /** insert data into the table: "mint_params" */
  insert_mint_params?: Maybe<Mint_Params_Mutation_Response>;
  /** insert a single row into the table: "mint_params" */
  insert_mint_params_one?: Maybe<Mint_Params>;
  /** insert data into the table: "modules" */
  insert_modules?: Maybe<Modules_Mutation_Response>;
  /** insert a single row into the table: "modules" */
  insert_modules_one?: Maybe<Modules>;
  /** insert data into the table: "ms_event" */
  insert_ms_event?: Maybe<Ms_Event_Mutation_Response>;
  /** insert a single row into the table: "ms_event" */
  insert_ms_event_one?: Maybe<Ms_Event>;
  /** insert data into the table: "ms_locks" */
  insert_ms_locks?: Maybe<Ms_Locks_Mutation_Response>;
  /** insert a single row into the table: "ms_locks" */
  insert_ms_locks_one?: Maybe<Ms_Locks>;
  /** insert data into the table: "ms_unlocks" */
  insert_ms_unlocks?: Maybe<Ms_Unlocks_Mutation_Response>;
  /** insert a single row into the table: "ms_unlocks" */
  insert_ms_unlocks_one?: Maybe<Ms_Unlocks>;
  /** insert data into the table: "pre_commit" */
  insert_pre_commit?: Maybe<Pre_Commit_Mutation_Response>;
  /** insert a single row into the table: "pre_commit" */
  insert_pre_commit_one?: Maybe<Pre_Commit>;
  /** insert data into the table: "proposal" */
  insert_proposal?: Maybe<Proposal_Mutation_Response>;
  /** insert data into the table: "proposal_deposit" */
  insert_proposal_deposit?: Maybe<Proposal_Deposit_Mutation_Response>;
  /** insert a single row into the table: "proposal_deposit" */
  insert_proposal_deposit_one?: Maybe<Proposal_Deposit>;
  /** insert a single row into the table: "proposal" */
  insert_proposal_one?: Maybe<Proposal>;
  /** insert data into the table: "proposal_staking_pool_snapshot" */
  insert_proposal_staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>;
  /** insert a single row into the table: "proposal_staking_pool_snapshot" */
  insert_proposal_staking_pool_snapshot_one?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** insert data into the table: "proposal_tally_result" */
  insert_proposal_tally_result?: Maybe<Proposal_Tally_Result_Mutation_Response>;
  /** insert a single row into the table: "proposal_tally_result" */
  insert_proposal_tally_result_one?: Maybe<Proposal_Tally_Result>;
  /** insert data into the table: "proposal_validator_status_snapshot" */
  insert_proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>;
  /** insert a single row into the table: "proposal_validator_status_snapshot" */
  insert_proposal_validator_status_snapshot_one?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** insert data into the table: "proposal_vote" */
  insert_proposal_vote?: Maybe<Proposal_Vote_Mutation_Response>;
  /** insert a single row into the table: "proposal_vote" */
  insert_proposal_vote_one?: Maybe<Proposal_Vote>;
  /** insert data into the table: "pruning" */
  insert_pruning?: Maybe<Pruning_Mutation_Response>;
  /** insert a single row into the table: "pruning" */
  insert_pruning_one?: Maybe<Pruning>;
  /** insert data into the table: "slashing_params" */
  insert_slashing_params?: Maybe<Slashing_Params_Mutation_Response>;
  /** insert a single row into the table: "slashing_params" */
  insert_slashing_params_one?: Maybe<Slashing_Params>;
  /** insert data into the table: "software_upgrade_plan" */
  insert_software_upgrade_plan?: Maybe<Software_Upgrade_Plan_Mutation_Response>;
  /** insert a single row into the table: "software_upgrade_plan" */
  insert_software_upgrade_plan_one?: Maybe<Software_Upgrade_Plan>;
  /** insert data into the table: "staking_params" */
  insert_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** insert a single row into the table: "staking_params" */
  insert_staking_params_one?: Maybe<Staking_Params>;
  /** insert data into the table: "staking_pool" */
  insert_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** insert a single row into the table: "staking_pool" */
  insert_staking_pool_one?: Maybe<Staking_Pool>;
  /** insert data into the table: "supply" */
  insert_supply?: Maybe<Supply_Mutation_Response>;
  /** insert a single row into the table: "supply" */
  insert_supply_one?: Maybe<Supply>;
  /** insert data into the table: "token" */
  insert_token?: Maybe<Token_Mutation_Response>;
  /** insert data into the table: "token_bonded" */
  insert_token_bonded?: Maybe<Token_Bonded_Mutation_Response>;
  /** insert a single row into the table: "token_bonded" */
  insert_token_bonded_one?: Maybe<Token_Bonded>;
  /** insert data into the table: "token_holder" */
  insert_token_holder?: Maybe<Token_Holder_Mutation_Response>;
  /** insert a single row into the table: "token_holder" */
  insert_token_holder_one?: Maybe<Token_Holder>;
  /** insert a single row into the table: "token" */
  insert_token_one?: Maybe<Token>;
  /** insert data into the table: "token_price" */
  insert_token_price?: Maybe<Token_Price_Mutation_Response>;
  /** insert data into the table: "token_price_history" */
  insert_token_price_history?: Maybe<Token_Price_History_Mutation_Response>;
  /** insert a single row into the table: "token_price_history" */
  insert_token_price_history_one?: Maybe<Token_Price_History>;
  /** insert a single row into the table: "token_price" */
  insert_token_price_one?: Maybe<Token_Price>;
  /** insert data into the table: "token_unbonding" */
  insert_token_unbonding?: Maybe<Token_Unbonding_Mutation_Response>;
  /** insert a single row into the table: "token_unbonding" */
  insert_token_unbonding_one?: Maybe<Token_Unbonding>;
  /** insert data into the table: "token_unit" */
  insert_token_unit?: Maybe<Token_Unit_Mutation_Response>;
  /** insert a single row into the table: "token_unit" */
  insert_token_unit_one?: Maybe<Token_Unit>;
  /** insert data into the table: "transaction" */
  insert_transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert data into the table: "transaction_105" */
  insert_transaction_105?: Maybe<Transaction_105_Mutation_Response>;
  /** insert a single row into the table: "transaction_105" */
  insert_transaction_105_one?: Maybe<Transaction_105>;
  /** insert a single row into the table: "transaction" */
  insert_transaction_one?: Maybe<Transaction>;
  /** insert data into the table: "validator" */
  insert_validator?: Maybe<Validator_Mutation_Response>;
  /** insert data into the table: "validator_commission" */
  insert_validator_commission?: Maybe<Validator_Commission_Mutation_Response>;
  /** insert a single row into the table: "validator_commission" */
  insert_validator_commission_one?: Maybe<Validator_Commission>;
  /** insert data into the table: "validator_denom" */
  insert_validator_denom?: Maybe<Validator_Denom_Mutation_Response>;
  /** insert a single row into the table: "validator_denom" */
  insert_validator_denom_one?: Maybe<Validator_Denom>;
  /** insert data into the table: "validator_description" */
  insert_validator_description?: Maybe<Validator_Description_Mutation_Response>;
  /** insert a single row into the table: "validator_description" */
  insert_validator_description_one?: Maybe<Validator_Description>;
  /** insert data into the table: "validator_info" */
  insert_validator_info?: Maybe<Validator_Info_Mutation_Response>;
  /** insert a single row into the table: "validator_info" */
  insert_validator_info_one?: Maybe<Validator_Info>;
  /** insert a single row into the table: "validator" */
  insert_validator_one?: Maybe<Validator>;
  /** insert data into the table: "validator_signing_info" */
  insert_validator_signing_info?: Maybe<Validator_Signing_Info_Mutation_Response>;
  /** insert a single row into the table: "validator_signing_info" */
  insert_validator_signing_info_one?: Maybe<Validator_Signing_Info>;
  /** insert data into the table: "validator_status" */
  insert_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** insert a single row into the table: "validator_status" */
  insert_validator_status_one?: Maybe<Validator_Status>;
  /** insert data into the table: "validator_voting_power" */
  insert_validator_voting_power?: Maybe<Validator_Voting_Power_Mutation_Response>;
  /** insert a single row into the table: "validator_voting_power" */
  insert_validator_voting_power_one?: Maybe<Validator_Voting_Power>;
  /** insert data into the table: "vesting_account" */
  insert_vesting_account?: Maybe<Vesting_Account_Mutation_Response>;
  /** insert a single row into the table: "vesting_account" */
  insert_vesting_account_one?: Maybe<Vesting_Account>;
  /** insert data into the table: "vesting_period" */
  insert_vesting_period?: Maybe<Vesting_Period_Mutation_Response>;
  /** insert a single row into the table: "vesting_period" */
  insert_vesting_period_one?: Maybe<Vesting_Period>;
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>;
  /** update multiples rows of table: "account" */
  update_account_many?: Maybe<Array<Maybe<Account_Mutation_Response>>>;
  /** update data of the table: "average_block_time_from_genesis" */
  update_average_block_time_from_genesis?: Maybe<Average_Block_Time_From_Genesis_Mutation_Response>;
  /** update single row of the table: "average_block_time_from_genesis" */
  update_average_block_time_from_genesis_by_pk?: Maybe<Average_Block_Time_From_Genesis>;
  /** update multiples rows of table: "average_block_time_from_genesis" */
  update_average_block_time_from_genesis_many?: Maybe<Array<Maybe<Average_Block_Time_From_Genesis_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_day" */
  update_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_day" */
  update_average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** update multiples rows of table: "average_block_time_per_day" */
  update_average_block_time_per_day_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Day_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_hour" */
  update_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_hour" */
  update_average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** update multiples rows of table: "average_block_time_per_hour" */
  update_average_block_time_per_hour_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Hour_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_minute" */
  update_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_minute" */
  update_average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** update multiples rows of table: "average_block_time_per_minute" */
  update_average_block_time_per_minute_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Minute_Mutation_Response>>>;
  /** update data of the table: "balance" */
  update_balance?: Maybe<Balance_Mutation_Response>;
  /** update single row of the table: "balance" */
  update_balance_by_pk?: Maybe<Balance>;
  /** update multiples rows of table: "balance" */
  update_balance_many?: Maybe<Array<Maybe<Balance_Mutation_Response>>>;
  /** update data of the table: "block" */
  update_block?: Maybe<Block_Mutation_Response>;
  /** update single row of the table: "block" */
  update_block_by_pk?: Maybe<Block>;
  /** update multiples rows of table: "block" */
  update_block_many?: Maybe<Array<Maybe<Block_Mutation_Response>>>;
  /** update data of the table: "community_pool" */
  update_community_pool?: Maybe<Community_Pool_Mutation_Response>;
  /** update single row of the table: "community_pool" */
  update_community_pool_by_pk?: Maybe<Community_Pool>;
  /** update multiples rows of table: "community_pool" */
  update_community_pool_many?: Maybe<Array<Maybe<Community_Pool_Mutation_Response>>>;
  /** update data of the table: "distribution_params" */
  update_distribution_params?: Maybe<Distribution_Params_Mutation_Response>;
  /** update single row of the table: "distribution_params" */
  update_distribution_params_by_pk?: Maybe<Distribution_Params>;
  /** update multiples rows of table: "distribution_params" */
  update_distribution_params_many?: Maybe<Array<Maybe<Distribution_Params_Mutation_Response>>>;
  /** update data of the table: "double_sign_evidence" */
  update_double_sign_evidence?: Maybe<Double_Sign_Evidence_Mutation_Response>;
  /** update multiples rows of table: "double_sign_evidence" */
  update_double_sign_evidence_many?: Maybe<Array<Maybe<Double_Sign_Evidence_Mutation_Response>>>;
  /** update data of the table: "double_sign_vote" */
  update_double_sign_vote?: Maybe<Double_Sign_Vote_Mutation_Response>;
  /** update single row of the table: "double_sign_vote" */
  update_double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** update multiples rows of table: "double_sign_vote" */
  update_double_sign_vote_many?: Maybe<Array<Maybe<Double_Sign_Vote_Mutation_Response>>>;
  /** update data of the table: "fee_grant_allowance" */
  update_fee_grant_allowance?: Maybe<Fee_Grant_Allowance_Mutation_Response>;
  /** update single row of the table: "fee_grant_allowance" */
  update_fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>;
  /** update multiples rows of table: "fee_grant_allowance" */
  update_fee_grant_allowance_many?: Maybe<Array<Maybe<Fee_Grant_Allowance_Mutation_Response>>>;
  /** update data of the table: "genesis" */
  update_genesis?: Maybe<Genesis_Mutation_Response>;
  /** update single row of the table: "genesis" */
  update_genesis_by_pk?: Maybe<Genesis>;
  /** update multiples rows of table: "genesis" */
  update_genesis_many?: Maybe<Array<Maybe<Genesis_Mutation_Response>>>;
  /** update data of the table: "gov_params" */
  update_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** update single row of the table: "gov_params" */
  update_gov_params_by_pk?: Maybe<Gov_Params>;
  /** update multiples rows of table: "gov_params" */
  update_gov_params_many?: Maybe<Array<Maybe<Gov_Params_Mutation_Response>>>;
  /** update data of the table: "inflation" */
  update_inflation?: Maybe<Inflation_Mutation_Response>;
  /** update single row of the table: "inflation" */
  update_inflation_by_pk?: Maybe<Inflation>;
  /** update multiples rows of table: "inflation" */
  update_inflation_many?: Maybe<Array<Maybe<Inflation_Mutation_Response>>>;
  /** update data of the table: "message" */
  update_message?: Maybe<Message_Mutation_Response>;
  /** update data of the table: "message_105" */
  update_message_105?: Maybe<Message_105_Mutation_Response>;
  /** update multiples rows of table: "message_105" */
  update_message_105_many?: Maybe<Array<Maybe<Message_105_Mutation_Response>>>;
  /** update multiples rows of table: "message" */
  update_message_many?: Maybe<Array<Maybe<Message_Mutation_Response>>>;
  /** update data of the table: "message_type" */
  update_message_type?: Maybe<Message_Type_Mutation_Response>;
  /** update multiples rows of table: "message_type" */
  update_message_type_many?: Maybe<Array<Maybe<Message_Type_Mutation_Response>>>;
  /** update data of the table: "mint_params" */
  update_mint_params?: Maybe<Mint_Params_Mutation_Response>;
  /** update single row of the table: "mint_params" */
  update_mint_params_by_pk?: Maybe<Mint_Params>;
  /** update multiples rows of table: "mint_params" */
  update_mint_params_many?: Maybe<Array<Maybe<Mint_Params_Mutation_Response>>>;
  /** update data of the table: "modules" */
  update_modules?: Maybe<Modules_Mutation_Response>;
  /** update single row of the table: "modules" */
  update_modules_by_pk?: Maybe<Modules>;
  /** update multiples rows of table: "modules" */
  update_modules_many?: Maybe<Array<Maybe<Modules_Mutation_Response>>>;
  /** update data of the table: "ms_event" */
  update_ms_event?: Maybe<Ms_Event_Mutation_Response>;
  /** update multiples rows of table: "ms_event" */
  update_ms_event_many?: Maybe<Array<Maybe<Ms_Event_Mutation_Response>>>;
  /** update data of the table: "ms_locks" */
  update_ms_locks?: Maybe<Ms_Locks_Mutation_Response>;
  /** update single row of the table: "ms_locks" */
  update_ms_locks_by_pk?: Maybe<Ms_Locks>;
  /** update multiples rows of table: "ms_locks" */
  update_ms_locks_many?: Maybe<Array<Maybe<Ms_Locks_Mutation_Response>>>;
  /** update data of the table: "ms_unlocks" */
  update_ms_unlocks?: Maybe<Ms_Unlocks_Mutation_Response>;
  /** update single row of the table: "ms_unlocks" */
  update_ms_unlocks_by_pk?: Maybe<Ms_Unlocks>;
  /** update multiples rows of table: "ms_unlocks" */
  update_ms_unlocks_many?: Maybe<Array<Maybe<Ms_Unlocks_Mutation_Response>>>;
  /** update data of the table: "pre_commit" */
  update_pre_commit?: Maybe<Pre_Commit_Mutation_Response>;
  /** update multiples rows of table: "pre_commit" */
  update_pre_commit_many?: Maybe<Array<Maybe<Pre_Commit_Mutation_Response>>>;
  /** update data of the table: "proposal" */
  update_proposal?: Maybe<Proposal_Mutation_Response>;
  /** update single row of the table: "proposal" */
  update_proposal_by_pk?: Maybe<Proposal>;
  /** update data of the table: "proposal_deposit" */
  update_proposal_deposit?: Maybe<Proposal_Deposit_Mutation_Response>;
  /** update multiples rows of table: "proposal_deposit" */
  update_proposal_deposit_many?: Maybe<Array<Maybe<Proposal_Deposit_Mutation_Response>>>;
  /** update multiples rows of table: "proposal" */
  update_proposal_many?: Maybe<Array<Maybe<Proposal_Mutation_Response>>>;
  /** update data of the table: "proposal_staking_pool_snapshot" */
  update_proposal_staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>;
  /** update single row of the table: "proposal_staking_pool_snapshot" */
  update_proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** update multiples rows of table: "proposal_staking_pool_snapshot" */
  update_proposal_staking_pool_snapshot_many?: Maybe<Array<Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>>>;
  /** update data of the table: "proposal_tally_result" */
  update_proposal_tally_result?: Maybe<Proposal_Tally_Result_Mutation_Response>;
  /** update single row of the table: "proposal_tally_result" */
  update_proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** update multiples rows of table: "proposal_tally_result" */
  update_proposal_tally_result_many?: Maybe<Array<Maybe<Proposal_Tally_Result_Mutation_Response>>>;
  /** update data of the table: "proposal_validator_status_snapshot" */
  update_proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>;
  /** update single row of the table: "proposal_validator_status_snapshot" */
  update_proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** update multiples rows of table: "proposal_validator_status_snapshot" */
  update_proposal_validator_status_snapshot_many?: Maybe<Array<Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>>>;
  /** update data of the table: "proposal_vote" */
  update_proposal_vote?: Maybe<Proposal_Vote_Mutation_Response>;
  /** update multiples rows of table: "proposal_vote" */
  update_proposal_vote_many?: Maybe<Array<Maybe<Proposal_Vote_Mutation_Response>>>;
  /** update data of the table: "pruning" */
  update_pruning?: Maybe<Pruning_Mutation_Response>;
  /** update multiples rows of table: "pruning" */
  update_pruning_many?: Maybe<Array<Maybe<Pruning_Mutation_Response>>>;
  /** update data of the table: "slashing_params" */
  update_slashing_params?: Maybe<Slashing_Params_Mutation_Response>;
  /** update single row of the table: "slashing_params" */
  update_slashing_params_by_pk?: Maybe<Slashing_Params>;
  /** update multiples rows of table: "slashing_params" */
  update_slashing_params_many?: Maybe<Array<Maybe<Slashing_Params_Mutation_Response>>>;
  /** update data of the table: "software_upgrade_plan" */
  update_software_upgrade_plan?: Maybe<Software_Upgrade_Plan_Mutation_Response>;
  /** update multiples rows of table: "software_upgrade_plan" */
  update_software_upgrade_plan_many?: Maybe<Array<Maybe<Software_Upgrade_Plan_Mutation_Response>>>;
  /** update data of the table: "staking_params" */
  update_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** update single row of the table: "staking_params" */
  update_staking_params_by_pk?: Maybe<Staking_Params>;
  /** update multiples rows of table: "staking_params" */
  update_staking_params_many?: Maybe<Array<Maybe<Staking_Params_Mutation_Response>>>;
  /** update data of the table: "staking_pool" */
  update_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** update single row of the table: "staking_pool" */
  update_staking_pool_by_pk?: Maybe<Staking_Pool>;
  /** update multiples rows of table: "staking_pool" */
  update_staking_pool_many?: Maybe<Array<Maybe<Staking_Pool_Mutation_Response>>>;
  /** update data of the table: "supply" */
  update_supply?: Maybe<Supply_Mutation_Response>;
  /** update single row of the table: "supply" */
  update_supply_by_pk?: Maybe<Supply>;
  /** update multiples rows of table: "supply" */
  update_supply_many?: Maybe<Array<Maybe<Supply_Mutation_Response>>>;
  /** update data of the table: "token" */
  update_token?: Maybe<Token_Mutation_Response>;
  /** update data of the table: "token_bonded" */
  update_token_bonded?: Maybe<Token_Bonded_Mutation_Response>;
  /** update single row of the table: "token_bonded" */
  update_token_bonded_by_pk?: Maybe<Token_Bonded>;
  /** update multiples rows of table: "token_bonded" */
  update_token_bonded_many?: Maybe<Array<Maybe<Token_Bonded_Mutation_Response>>>;
  /** update data of the table: "token_holder" */
  update_token_holder?: Maybe<Token_Holder_Mutation_Response>;
  /** update single row of the table: "token_holder" */
  update_token_holder_by_pk?: Maybe<Token_Holder>;
  /** update multiples rows of table: "token_holder" */
  update_token_holder_many?: Maybe<Array<Maybe<Token_Holder_Mutation_Response>>>;
  /** update multiples rows of table: "token" */
  update_token_many?: Maybe<Array<Maybe<Token_Mutation_Response>>>;
  /** update data of the table: "token_price" */
  update_token_price?: Maybe<Token_Price_Mutation_Response>;
  /** update single row of the table: "token_price" */
  update_token_price_by_pk?: Maybe<Token_Price>;
  /** update data of the table: "token_price_history" */
  update_token_price_history?: Maybe<Token_Price_History_Mutation_Response>;
  /** update single row of the table: "token_price_history" */
  update_token_price_history_by_pk?: Maybe<Token_Price_History>;
  /** update multiples rows of table: "token_price_history" */
  update_token_price_history_many?: Maybe<Array<Maybe<Token_Price_History_Mutation_Response>>>;
  /** update multiples rows of table: "token_price" */
  update_token_price_many?: Maybe<Array<Maybe<Token_Price_Mutation_Response>>>;
  /** update data of the table: "token_unbonding" */
  update_token_unbonding?: Maybe<Token_Unbonding_Mutation_Response>;
  /** update single row of the table: "token_unbonding" */
  update_token_unbonding_by_pk?: Maybe<Token_Unbonding>;
  /** update multiples rows of table: "token_unbonding" */
  update_token_unbonding_many?: Maybe<Array<Maybe<Token_Unbonding_Mutation_Response>>>;
  /** update data of the table: "token_unit" */
  update_token_unit?: Maybe<Token_Unit_Mutation_Response>;
  /** update multiples rows of table: "token_unit" */
  update_token_unit_many?: Maybe<Array<Maybe<Token_Unit_Mutation_Response>>>;
  /** update data of the table: "transaction" */
  update_transaction?: Maybe<Transaction_Mutation_Response>;
  /** update data of the table: "transaction_105" */
  update_transaction_105?: Maybe<Transaction_105_Mutation_Response>;
  /** update multiples rows of table: "transaction_105" */
  update_transaction_105_many?: Maybe<Array<Maybe<Transaction_105_Mutation_Response>>>;
  /** update multiples rows of table: "transaction" */
  update_transaction_many?: Maybe<Array<Maybe<Transaction_Mutation_Response>>>;
  /** update data of the table: "validator" */
  update_validator?: Maybe<Validator_Mutation_Response>;
  /** update single row of the table: "validator" */
  update_validator_by_pk?: Maybe<Validator>;
  /** update data of the table: "validator_commission" */
  update_validator_commission?: Maybe<Validator_Commission_Mutation_Response>;
  /** update single row of the table: "validator_commission" */
  update_validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** update multiples rows of table: "validator_commission" */
  update_validator_commission_many?: Maybe<Array<Maybe<Validator_Commission_Mutation_Response>>>;
  /** update data of the table: "validator_denom" */
  update_validator_denom?: Maybe<Validator_Denom_Mutation_Response>;
  /** update single row of the table: "validator_denom" */
  update_validator_denom_by_pk?: Maybe<Validator_Denom>;
  /** update multiples rows of table: "validator_denom" */
  update_validator_denom_many?: Maybe<Array<Maybe<Validator_Denom_Mutation_Response>>>;
  /** update data of the table: "validator_description" */
  update_validator_description?: Maybe<Validator_Description_Mutation_Response>;
  /** update single row of the table: "validator_description" */
  update_validator_description_by_pk?: Maybe<Validator_Description>;
  /** update multiples rows of table: "validator_description" */
  update_validator_description_many?: Maybe<Array<Maybe<Validator_Description_Mutation_Response>>>;
  /** update data of the table: "validator_info" */
  update_validator_info?: Maybe<Validator_Info_Mutation_Response>;
  /** update single row of the table: "validator_info" */
  update_validator_info_by_pk?: Maybe<Validator_Info>;
  /** update multiples rows of table: "validator_info" */
  update_validator_info_many?: Maybe<Array<Maybe<Validator_Info_Mutation_Response>>>;
  /** update multiples rows of table: "validator" */
  update_validator_many?: Maybe<Array<Maybe<Validator_Mutation_Response>>>;
  /** update data of the table: "validator_signing_info" */
  update_validator_signing_info?: Maybe<Validator_Signing_Info_Mutation_Response>;
  /** update single row of the table: "validator_signing_info" */
  update_validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** update multiples rows of table: "validator_signing_info" */
  update_validator_signing_info_many?: Maybe<Array<Maybe<Validator_Signing_Info_Mutation_Response>>>;
  /** update data of the table: "validator_status" */
  update_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** update single row of the table: "validator_status" */
  update_validator_status_by_pk?: Maybe<Validator_Status>;
  /** update multiples rows of table: "validator_status" */
  update_validator_status_many?: Maybe<Array<Maybe<Validator_Status_Mutation_Response>>>;
  /** update data of the table: "validator_voting_power" */
  update_validator_voting_power?: Maybe<Validator_Voting_Power_Mutation_Response>;
  /** update single row of the table: "validator_voting_power" */
  update_validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** update multiples rows of table: "validator_voting_power" */
  update_validator_voting_power_many?: Maybe<Array<Maybe<Validator_Voting_Power_Mutation_Response>>>;
  /** update data of the table: "vesting_account" */
  update_vesting_account?: Maybe<Vesting_Account_Mutation_Response>;
  /** update single row of the table: "vesting_account" */
  update_vesting_account_by_pk?: Maybe<Vesting_Account>;
  /** update multiples rows of table: "vesting_account" */
  update_vesting_account_many?: Maybe<Array<Maybe<Vesting_Account_Mutation_Response>>>;
  /** update data of the table: "vesting_period" */
  update_vesting_period?: Maybe<Vesting_Period_Mutation_Response>;
  /** update multiples rows of table: "vesting_period" */
  update_vesting_period_many?: Maybe<Array<Maybe<Vesting_Period_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_From_GenesisArgs = {
  where: Average_Block_Time_From_Genesis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_From_Genesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_DayArgs = {
  where: Average_Block_Time_Per_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_HourArgs = {
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_MinuteArgs = {
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_BalanceArgs = {
  where: Balance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Balance_By_PkArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_BlockArgs = {
  where: Block_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Block_By_PkArgs = {
  height: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Community_PoolArgs = {
  where: Community_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Community_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Distribution_ParamsArgs = {
  where: Distribution_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Distribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Double_Sign_EvidenceArgs = {
  where: Double_Sign_Evidence_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Double_Sign_VoteArgs = {
  where: Double_Sign_Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Double_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Fee_Grant_AllowanceArgs = {
  where: Fee_Grant_Allowance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_GenesisArgs = {
  where: Genesis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Genesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Gov_ParamsArgs = {
  where: Gov_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_InflationArgs = {
  where: Inflation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inflation_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_105Args = {
  where: Message_105_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_TypeArgs = {
  where: Message_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mint_ParamsArgs = {
  where: Mint_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_ModulesArgs = {
  where: Modules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Modules_By_PkArgs = {
  module_name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ms_EventArgs = {
  where: Ms_Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ms_LocksArgs = {
  where: Ms_Locks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ms_Locks_By_PkArgs = {
  staker_addr: Scalars['String'];
  val_addr: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ms_UnlocksArgs = {
  where: Ms_Unlocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ms_Unlocks_By_PkArgs = {
  staker_addr: Scalars['String'];
  val_addr: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Pre_CommitArgs = {
  where: Pre_Commit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ProposalArgs = {
  where: Proposal_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_DepositArgs = {
  where: Proposal_Deposit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Staking_Pool_SnapshotArgs = {
  where: Proposal_Staking_Pool_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Tally_ResultArgs = {
  where: Proposal_Tally_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Validator_Status_SnapshotArgs = {
  where: Proposal_Validator_Status_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_VoteArgs = {
  where: Proposal_Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PruningArgs = {
  where: Pruning_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slashing_ParamsArgs = {
  where: Slashing_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Software_Upgrade_PlanArgs = {
  where: Software_Upgrade_Plan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staking_ParamsArgs = {
  where: Staking_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Staking_PoolArgs = {
  where: Staking_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staking_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_SupplyArgs = {
  where: Supply_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Supply_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_TokenArgs = {
  where: Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_BondedArgs = {
  where: Token_Bonded_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_Bonded_By_PkArgs = {
  denom: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Token_HolderArgs = {
  where: Token_Holder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_Holder_By_PkArgs = {
  denom: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Token_PriceArgs = {
  where: Token_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_Price_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Token_Price_HistoryArgs = {
  where: Token_Price_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_Price_History_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Token_UnbondingArgs = {
  where: Token_Unbonding_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_Unbonding_By_PkArgs = {
  denom: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Token_UnitArgs = {
  where: Token_Unit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_105Args = {
  where: Transaction_105_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ValidatorArgs = {
  where: Validator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_CommissionArgs = {
  where: Validator_Commission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_DenomArgs = {
  where: Validator_Denom_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Denom_By_PkArgs = {
  val_addr: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_DescriptionArgs = {
  where: Validator_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_InfoArgs = {
  where: Validator_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_Signing_InfoArgs = {
  where: Validator_Signing_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_StatusArgs = {
  where: Validator_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_Voting_PowerArgs = {
  where: Validator_Voting_Power_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Vesting_AccountArgs = {
  where: Vesting_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vesting_Account_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vesting_PeriodArgs = {
  where: Vesting_Period_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_From_GenesisArgs = {
  objects: Array<Average_Block_Time_From_Genesis_Insert_Input>;
  on_conflict?: InputMaybe<Average_Block_Time_From_Genesis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_From_Genesis_OneArgs = {
  object: Average_Block_Time_From_Genesis_Insert_Input;
  on_conflict?: InputMaybe<Average_Block_Time_From_Genesis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_DayArgs = {
  objects: Array<Average_Block_Time_Per_Day_Insert_Input>;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Day_OneArgs = {
  object: Average_Block_Time_Per_Day_Insert_Input;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_HourArgs = {
  objects: Array<Average_Block_Time_Per_Hour_Insert_Input>;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Hour_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Hour_OneArgs = {
  object: Average_Block_Time_Per_Hour_Insert_Input;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Hour_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_MinuteArgs = {
  objects: Array<Average_Block_Time_Per_Minute_Insert_Input>;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Minute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Minute_OneArgs = {
  object: Average_Block_Time_Per_Minute_Insert_Input;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Minute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BalanceArgs = {
  objects: Array<Balance_Insert_Input>;
  on_conflict?: InputMaybe<Balance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Balance_OneArgs = {
  object: Balance_Insert_Input;
  on_conflict?: InputMaybe<Balance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlockArgs = {
  objects: Array<Block_Insert_Input>;
  on_conflict?: InputMaybe<Block_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Block_OneArgs = {
  object: Block_Insert_Input;
  on_conflict?: InputMaybe<Block_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Community_PoolArgs = {
  objects: Array<Community_Pool_Insert_Input>;
  on_conflict?: InputMaybe<Community_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Community_Pool_OneArgs = {
  object: Community_Pool_Insert_Input;
  on_conflict?: InputMaybe<Community_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Distribution_ParamsArgs = {
  objects: Array<Distribution_Params_Insert_Input>;
  on_conflict?: InputMaybe<Distribution_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Distribution_Params_OneArgs = {
  object: Distribution_Params_Insert_Input;
  on_conflict?: InputMaybe<Distribution_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Double_Sign_EvidenceArgs = {
  objects: Array<Double_Sign_Evidence_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Double_Sign_Evidence_OneArgs = {
  object: Double_Sign_Evidence_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Double_Sign_VoteArgs = {
  objects: Array<Double_Sign_Vote_Insert_Input>;
  on_conflict?: InputMaybe<Double_Sign_Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Double_Sign_Vote_OneArgs = {
  object: Double_Sign_Vote_Insert_Input;
  on_conflict?: InputMaybe<Double_Sign_Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fee_Grant_AllowanceArgs = {
  objects: Array<Fee_Grant_Allowance_Insert_Input>;
  on_conflict?: InputMaybe<Fee_Grant_Allowance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fee_Grant_Allowance_OneArgs = {
  object: Fee_Grant_Allowance_Insert_Input;
  on_conflict?: InputMaybe<Fee_Grant_Allowance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GenesisArgs = {
  objects: Array<Genesis_Insert_Input>;
  on_conflict?: InputMaybe<Genesis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Genesis_OneArgs = {
  object: Genesis_Insert_Input;
  on_conflict?: InputMaybe<Genesis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gov_ParamsArgs = {
  objects: Array<Gov_Params_Insert_Input>;
  on_conflict?: InputMaybe<Gov_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gov_Params_OneArgs = {
  object: Gov_Params_Insert_Input;
  on_conflict?: InputMaybe<Gov_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InflationArgs = {
  objects: Array<Inflation_Insert_Input>;
  on_conflict?: InputMaybe<Inflation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inflation_OneArgs = {
  object: Inflation_Insert_Input;
  on_conflict?: InputMaybe<Inflation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_105Args = {
  objects: Array<Message_105_Insert_Input>;
  on_conflict?: InputMaybe<Message_105_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_105_OneArgs = {
  object: Message_105_Insert_Input;
  on_conflict?: InputMaybe<Message_105_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_TypeArgs = {
  objects: Array<Message_Type_Insert_Input>;
  on_conflict?: InputMaybe<Message_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_Type_OneArgs = {
  object: Message_Type_Insert_Input;
  on_conflict?: InputMaybe<Message_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mint_ParamsArgs = {
  objects: Array<Mint_Params_Insert_Input>;
  on_conflict?: InputMaybe<Mint_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mint_Params_OneArgs = {
  object: Mint_Params_Insert_Input;
  on_conflict?: InputMaybe<Mint_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ModulesArgs = {
  objects: Array<Modules_Insert_Input>;
  on_conflict?: InputMaybe<Modules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Modules_OneArgs = {
  object: Modules_Insert_Input;
  on_conflict?: InputMaybe<Modules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ms_EventArgs = {
  objects: Array<Ms_Event_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Ms_Event_OneArgs = {
  object: Ms_Event_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Ms_LocksArgs = {
  objects: Array<Ms_Locks_Insert_Input>;
  on_conflict?: InputMaybe<Ms_Locks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ms_Locks_OneArgs = {
  object: Ms_Locks_Insert_Input;
  on_conflict?: InputMaybe<Ms_Locks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ms_UnlocksArgs = {
  objects: Array<Ms_Unlocks_Insert_Input>;
  on_conflict?: InputMaybe<Ms_Unlocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ms_Unlocks_OneArgs = {
  object: Ms_Unlocks_Insert_Input;
  on_conflict?: InputMaybe<Ms_Unlocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pre_CommitArgs = {
  objects: Array<Pre_Commit_Insert_Input>;
  on_conflict?: InputMaybe<Pre_Commit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pre_Commit_OneArgs = {
  object: Pre_Commit_Insert_Input;
  on_conflict?: InputMaybe<Pre_Commit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProposalArgs = {
  objects: Array<Proposal_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_DepositArgs = {
  objects: Array<Proposal_Deposit_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_Deposit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Deposit_OneArgs = {
  object: Proposal_Deposit_Insert_Input;
  on_conflict?: InputMaybe<Proposal_Deposit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_OneArgs = {
  object: Proposal_Insert_Input;
  on_conflict?: InputMaybe<Proposal_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Staking_Pool_SnapshotArgs = {
  objects: Array<Proposal_Staking_Pool_Snapshot_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_Staking_Pool_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Staking_Pool_Snapshot_OneArgs = {
  object: Proposal_Staking_Pool_Snapshot_Insert_Input;
  on_conflict?: InputMaybe<Proposal_Staking_Pool_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Tally_ResultArgs = {
  objects: Array<Proposal_Tally_Result_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_Tally_Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Tally_Result_OneArgs = {
  object: Proposal_Tally_Result_Insert_Input;
  on_conflict?: InputMaybe<Proposal_Tally_Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Validator_Status_SnapshotArgs = {
  objects: Array<Proposal_Validator_Status_Snapshot_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Validator_Status_Snapshot_OneArgs = {
  object: Proposal_Validator_Status_Snapshot_Insert_Input;
  on_conflict?: InputMaybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_VoteArgs = {
  objects: Array<Proposal_Vote_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Vote_OneArgs = {
  object: Proposal_Vote_Insert_Input;
  on_conflict?: InputMaybe<Proposal_Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PruningArgs = {
  objects: Array<Pruning_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Pruning_OneArgs = {
  object: Pruning_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Slashing_ParamsArgs = {
  objects: Array<Slashing_Params_Insert_Input>;
  on_conflict?: InputMaybe<Slashing_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slashing_Params_OneArgs = {
  object: Slashing_Params_Insert_Input;
  on_conflict?: InputMaybe<Slashing_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Software_Upgrade_PlanArgs = {
  objects: Array<Software_Upgrade_Plan_Insert_Input>;
  on_conflict?: InputMaybe<Software_Upgrade_Plan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Software_Upgrade_Plan_OneArgs = {
  object: Software_Upgrade_Plan_Insert_Input;
  on_conflict?: InputMaybe<Software_Upgrade_Plan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_ParamsArgs = {
  objects: Array<Staking_Params_Insert_Input>;
  on_conflict?: InputMaybe<Staking_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_Params_OneArgs = {
  object: Staking_Params_Insert_Input;
  on_conflict?: InputMaybe<Staking_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_PoolArgs = {
  objects: Array<Staking_Pool_Insert_Input>;
  on_conflict?: InputMaybe<Staking_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_Pool_OneArgs = {
  object: Staking_Pool_Insert_Input;
  on_conflict?: InputMaybe<Staking_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SupplyArgs = {
  objects: Array<Supply_Insert_Input>;
  on_conflict?: InputMaybe<Supply_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Supply_OneArgs = {
  object: Supply_Insert_Input;
  on_conflict?: InputMaybe<Supply_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TokenArgs = {
  objects: Array<Token_Insert_Input>;
  on_conflict?: InputMaybe<Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_BondedArgs = {
  objects: Array<Token_Bonded_Insert_Input>;
  on_conflict?: InputMaybe<Token_Bonded_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Bonded_OneArgs = {
  object: Token_Bonded_Insert_Input;
  on_conflict?: InputMaybe<Token_Bonded_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_HolderArgs = {
  objects: Array<Token_Holder_Insert_Input>;
  on_conflict?: InputMaybe<Token_Holder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Holder_OneArgs = {
  object: Token_Holder_Insert_Input;
  on_conflict?: InputMaybe<Token_Holder_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_OneArgs = {
  object: Token_Insert_Input;
  on_conflict?: InputMaybe<Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_PriceArgs = {
  objects: Array<Token_Price_Insert_Input>;
  on_conflict?: InputMaybe<Token_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Price_HistoryArgs = {
  objects: Array<Token_Price_History_Insert_Input>;
  on_conflict?: InputMaybe<Token_Price_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Price_History_OneArgs = {
  object: Token_Price_History_Insert_Input;
  on_conflict?: InputMaybe<Token_Price_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Price_OneArgs = {
  object: Token_Price_Insert_Input;
  on_conflict?: InputMaybe<Token_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_UnbondingArgs = {
  objects: Array<Token_Unbonding_Insert_Input>;
  on_conflict?: InputMaybe<Token_Unbonding_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Unbonding_OneArgs = {
  object: Token_Unbonding_Insert_Input;
  on_conflict?: InputMaybe<Token_Unbonding_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_UnitArgs = {
  objects: Array<Token_Unit_Insert_Input>;
  on_conflict?: InputMaybe<Token_Unit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Unit_OneArgs = {
  object: Token_Unit_Insert_Input;
  on_conflict?: InputMaybe<Token_Unit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_105Args = {
  objects: Array<Transaction_105_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_105_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_105_OneArgs = {
  object: Transaction_105_Insert_Input;
  on_conflict?: InputMaybe<Transaction_105_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ValidatorArgs = {
  objects: Array<Validator_Insert_Input>;
  on_conflict?: InputMaybe<Validator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_CommissionArgs = {
  objects: Array<Validator_Commission_Insert_Input>;
  on_conflict?: InputMaybe<Validator_Commission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Commission_OneArgs = {
  object: Validator_Commission_Insert_Input;
  on_conflict?: InputMaybe<Validator_Commission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_DenomArgs = {
  objects: Array<Validator_Denom_Insert_Input>;
  on_conflict?: InputMaybe<Validator_Denom_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Denom_OneArgs = {
  object: Validator_Denom_Insert_Input;
  on_conflict?: InputMaybe<Validator_Denom_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_DescriptionArgs = {
  objects: Array<Validator_Description_Insert_Input>;
  on_conflict?: InputMaybe<Validator_Description_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Description_OneArgs = {
  object: Validator_Description_Insert_Input;
  on_conflict?: InputMaybe<Validator_Description_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_InfoArgs = {
  objects: Array<Validator_Info_Insert_Input>;
  on_conflict?: InputMaybe<Validator_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Info_OneArgs = {
  object: Validator_Info_Insert_Input;
  on_conflict?: InputMaybe<Validator_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_OneArgs = {
  object: Validator_Insert_Input;
  on_conflict?: InputMaybe<Validator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Signing_InfoArgs = {
  objects: Array<Validator_Signing_Info_Insert_Input>;
  on_conflict?: InputMaybe<Validator_Signing_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Signing_Info_OneArgs = {
  object: Validator_Signing_Info_Insert_Input;
  on_conflict?: InputMaybe<Validator_Signing_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_StatusArgs = {
  objects: Array<Validator_Status_Insert_Input>;
  on_conflict?: InputMaybe<Validator_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Status_OneArgs = {
  object: Validator_Status_Insert_Input;
  on_conflict?: InputMaybe<Validator_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Voting_PowerArgs = {
  objects: Array<Validator_Voting_Power_Insert_Input>;
  on_conflict?: InputMaybe<Validator_Voting_Power_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Voting_Power_OneArgs = {
  object: Validator_Voting_Power_Insert_Input;
  on_conflict?: InputMaybe<Validator_Voting_Power_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vesting_AccountArgs = {
  objects: Array<Vesting_Account_Insert_Input>;
  on_conflict?: InputMaybe<Vesting_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vesting_Account_OneArgs = {
  object: Vesting_Account_Insert_Input;
  on_conflict?: InputMaybe<Vesting_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vesting_PeriodArgs = {
  objects: Array<Vesting_Period_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Vesting_Period_OneArgs = {
  object: Vesting_Period_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _set?: InputMaybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _set?: InputMaybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Account_ManyArgs = {
  updates: Array<Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_From_GenesisArgs = {
  _inc?: InputMaybe<Average_Block_Time_From_Genesis_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_From_Genesis_Set_Input>;
  where: Average_Block_Time_From_Genesis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_From_Genesis_By_PkArgs = {
  _inc?: InputMaybe<Average_Block_Time_From_Genesis_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_From_Genesis_Set_Input>;
  pk_columns: Average_Block_Time_From_Genesis_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_From_Genesis_ManyArgs = {
  updates: Array<Average_Block_Time_From_Genesis_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_DayArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Day_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Day_Set_Input>;
  where: Average_Block_Time_Per_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Day_By_PkArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Day_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Day_Set_Input>;
  pk_columns: Average_Block_Time_Per_Day_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Day_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Day_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_HourArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Hour_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Hour_Set_Input>;
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Hour_By_PkArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Hour_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Hour_Set_Input>;
  pk_columns: Average_Block_Time_Per_Hour_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Hour_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Hour_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_MinuteArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Minute_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Minute_Set_Input>;
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Minute_By_PkArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Minute_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Minute_Set_Input>;
  pk_columns: Average_Block_Time_Per_Minute_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Minute_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Minute_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BalanceArgs = {
  _inc?: InputMaybe<Balance_Inc_Input>;
  _set?: InputMaybe<Balance_Set_Input>;
  where: Balance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Balance_By_PkArgs = {
  _inc?: InputMaybe<Balance_Inc_Input>;
  _set?: InputMaybe<Balance_Set_Input>;
  pk_columns: Balance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Balance_ManyArgs = {
  updates: Array<Balance_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BlockArgs = {
  _inc?: InputMaybe<Block_Inc_Input>;
  _set?: InputMaybe<Block_Set_Input>;
  where: Block_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Block_By_PkArgs = {
  _inc?: InputMaybe<Block_Inc_Input>;
  _set?: InputMaybe<Block_Set_Input>;
  pk_columns: Block_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Block_ManyArgs = {
  updates: Array<Block_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Community_PoolArgs = {
  _inc?: InputMaybe<Community_Pool_Inc_Input>;
  _set?: InputMaybe<Community_Pool_Set_Input>;
  where: Community_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Community_Pool_By_PkArgs = {
  _inc?: InputMaybe<Community_Pool_Inc_Input>;
  _set?: InputMaybe<Community_Pool_Set_Input>;
  pk_columns: Community_Pool_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Community_Pool_ManyArgs = {
  updates: Array<Community_Pool_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Distribution_ParamsArgs = {
  _append?: InputMaybe<Distribution_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Distribution_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Distribution_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Distribution_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Distribution_Params_Inc_Input>;
  _prepend?: InputMaybe<Distribution_Params_Prepend_Input>;
  _set?: InputMaybe<Distribution_Params_Set_Input>;
  where: Distribution_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Distribution_Params_By_PkArgs = {
  _append?: InputMaybe<Distribution_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Distribution_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Distribution_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Distribution_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Distribution_Params_Inc_Input>;
  _prepend?: InputMaybe<Distribution_Params_Prepend_Input>;
  _set?: InputMaybe<Distribution_Params_Set_Input>;
  pk_columns: Distribution_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Distribution_Params_ManyArgs = {
  updates: Array<Distribution_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Double_Sign_EvidenceArgs = {
  _inc?: InputMaybe<Double_Sign_Evidence_Inc_Input>;
  _set?: InputMaybe<Double_Sign_Evidence_Set_Input>;
  where: Double_Sign_Evidence_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Double_Sign_Evidence_ManyArgs = {
  updates: Array<Double_Sign_Evidence_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Double_Sign_VoteArgs = {
  _inc?: InputMaybe<Double_Sign_Vote_Inc_Input>;
  _set?: InputMaybe<Double_Sign_Vote_Set_Input>;
  where: Double_Sign_Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Double_Sign_Vote_By_PkArgs = {
  _inc?: InputMaybe<Double_Sign_Vote_Inc_Input>;
  _set?: InputMaybe<Double_Sign_Vote_Set_Input>;
  pk_columns: Double_Sign_Vote_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Double_Sign_Vote_ManyArgs = {
  updates: Array<Double_Sign_Vote_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fee_Grant_AllowanceArgs = {
  _append?: InputMaybe<Fee_Grant_Allowance_Append_Input>;
  _delete_at_path?: InputMaybe<Fee_Grant_Allowance_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Fee_Grant_Allowance_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Fee_Grant_Allowance_Delete_Key_Input>;
  _inc?: InputMaybe<Fee_Grant_Allowance_Inc_Input>;
  _prepend?: InputMaybe<Fee_Grant_Allowance_Prepend_Input>;
  _set?: InputMaybe<Fee_Grant_Allowance_Set_Input>;
  where: Fee_Grant_Allowance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fee_Grant_Allowance_By_PkArgs = {
  _append?: InputMaybe<Fee_Grant_Allowance_Append_Input>;
  _delete_at_path?: InputMaybe<Fee_Grant_Allowance_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Fee_Grant_Allowance_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Fee_Grant_Allowance_Delete_Key_Input>;
  _inc?: InputMaybe<Fee_Grant_Allowance_Inc_Input>;
  _prepend?: InputMaybe<Fee_Grant_Allowance_Prepend_Input>;
  _set?: InputMaybe<Fee_Grant_Allowance_Set_Input>;
  pk_columns: Fee_Grant_Allowance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fee_Grant_Allowance_ManyArgs = {
  updates: Array<Fee_Grant_Allowance_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GenesisArgs = {
  _inc?: InputMaybe<Genesis_Inc_Input>;
  _set?: InputMaybe<Genesis_Set_Input>;
  where: Genesis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Genesis_By_PkArgs = {
  _inc?: InputMaybe<Genesis_Inc_Input>;
  _set?: InputMaybe<Genesis_Set_Input>;
  pk_columns: Genesis_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Genesis_ManyArgs = {
  updates: Array<Genesis_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Gov_ParamsArgs = {
  _append?: InputMaybe<Gov_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Gov_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Gov_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Gov_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Gov_Params_Inc_Input>;
  _prepend?: InputMaybe<Gov_Params_Prepend_Input>;
  _set?: InputMaybe<Gov_Params_Set_Input>;
  where: Gov_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gov_Params_By_PkArgs = {
  _append?: InputMaybe<Gov_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Gov_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Gov_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Gov_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Gov_Params_Inc_Input>;
  _prepend?: InputMaybe<Gov_Params_Prepend_Input>;
  _set?: InputMaybe<Gov_Params_Set_Input>;
  pk_columns: Gov_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gov_Params_ManyArgs = {
  updates: Array<Gov_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_InflationArgs = {
  _inc?: InputMaybe<Inflation_Inc_Input>;
  _set?: InputMaybe<Inflation_Set_Input>;
  where: Inflation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inflation_By_PkArgs = {
  _inc?: InputMaybe<Inflation_Inc_Input>;
  _set?: InputMaybe<Inflation_Set_Input>;
  pk_columns: Inflation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Inflation_ManyArgs = {
  updates: Array<Inflation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_105Args = {
  _inc?: InputMaybe<Message_105_Inc_Input>;
  _set?: InputMaybe<Message_105_Set_Input>;
  where: Message_105_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_105_ManyArgs = {
  updates: Array<Message_105_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Message_ManyArgs = {
  updates: Array<Message_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Message_TypeArgs = {
  _inc?: InputMaybe<Message_Type_Inc_Input>;
  _set?: InputMaybe<Message_Type_Set_Input>;
  where: Message_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_Type_ManyArgs = {
  updates: Array<Message_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Mint_ParamsArgs = {
  _append?: InputMaybe<Mint_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Mint_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Mint_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Mint_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Mint_Params_Inc_Input>;
  _prepend?: InputMaybe<Mint_Params_Prepend_Input>;
  _set?: InputMaybe<Mint_Params_Set_Input>;
  where: Mint_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Mint_Params_By_PkArgs = {
  _append?: InputMaybe<Mint_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Mint_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Mint_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Mint_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Mint_Params_Inc_Input>;
  _prepend?: InputMaybe<Mint_Params_Prepend_Input>;
  _set?: InputMaybe<Mint_Params_Set_Input>;
  pk_columns: Mint_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Mint_Params_ManyArgs = {
  updates: Array<Mint_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ModulesArgs = {
  _set?: InputMaybe<Modules_Set_Input>;
  where: Modules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Modules_By_PkArgs = {
  _set?: InputMaybe<Modules_Set_Input>;
  pk_columns: Modules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Modules_ManyArgs = {
  updates: Array<Modules_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ms_EventArgs = {
  _inc?: InputMaybe<Ms_Event_Inc_Input>;
  _set?: InputMaybe<Ms_Event_Set_Input>;
  where: Ms_Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ms_Event_ManyArgs = {
  updates: Array<Ms_Event_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ms_LocksArgs = {
  _inc?: InputMaybe<Ms_Locks_Inc_Input>;
  _set?: InputMaybe<Ms_Locks_Set_Input>;
  where: Ms_Locks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ms_Locks_By_PkArgs = {
  _inc?: InputMaybe<Ms_Locks_Inc_Input>;
  _set?: InputMaybe<Ms_Locks_Set_Input>;
  pk_columns: Ms_Locks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ms_Locks_ManyArgs = {
  updates: Array<Ms_Locks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ms_UnlocksArgs = {
  _inc?: InputMaybe<Ms_Unlocks_Inc_Input>;
  _set?: InputMaybe<Ms_Unlocks_Set_Input>;
  where: Ms_Unlocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ms_Unlocks_By_PkArgs = {
  _inc?: InputMaybe<Ms_Unlocks_Inc_Input>;
  _set?: InputMaybe<Ms_Unlocks_Set_Input>;
  pk_columns: Ms_Unlocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ms_Unlocks_ManyArgs = {
  updates: Array<Ms_Unlocks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pre_CommitArgs = {
  _inc?: InputMaybe<Pre_Commit_Inc_Input>;
  _set?: InputMaybe<Pre_Commit_Set_Input>;
  where: Pre_Commit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pre_Commit_ManyArgs = {
  updates: Array<Pre_Commit_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProposalArgs = {
  _append?: InputMaybe<Proposal_Append_Input>;
  _delete_at_path?: InputMaybe<Proposal_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Proposal_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Proposal_Delete_Key_Input>;
  _inc?: InputMaybe<Proposal_Inc_Input>;
  _prepend?: InputMaybe<Proposal_Prepend_Input>;
  _set?: InputMaybe<Proposal_Set_Input>;
  where: Proposal_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_By_PkArgs = {
  _append?: InputMaybe<Proposal_Append_Input>;
  _delete_at_path?: InputMaybe<Proposal_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Proposal_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Proposal_Delete_Key_Input>;
  _inc?: InputMaybe<Proposal_Inc_Input>;
  _prepend?: InputMaybe<Proposal_Prepend_Input>;
  _set?: InputMaybe<Proposal_Set_Input>;
  pk_columns: Proposal_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_DepositArgs = {
  _inc?: InputMaybe<Proposal_Deposit_Inc_Input>;
  _set?: InputMaybe<Proposal_Deposit_Set_Input>;
  where: Proposal_Deposit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Deposit_ManyArgs = {
  updates: Array<Proposal_Deposit_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_ManyArgs = {
  updates: Array<Proposal_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Staking_Pool_SnapshotArgs = {
  _inc?: InputMaybe<Proposal_Staking_Pool_Snapshot_Inc_Input>;
  _set?: InputMaybe<Proposal_Staking_Pool_Snapshot_Set_Input>;
  where: Proposal_Staking_Pool_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Staking_Pool_Snapshot_By_PkArgs = {
  _inc?: InputMaybe<Proposal_Staking_Pool_Snapshot_Inc_Input>;
  _set?: InputMaybe<Proposal_Staking_Pool_Snapshot_Set_Input>;
  pk_columns: Proposal_Staking_Pool_Snapshot_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Staking_Pool_Snapshot_ManyArgs = {
  updates: Array<Proposal_Staking_Pool_Snapshot_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Tally_ResultArgs = {
  _inc?: InputMaybe<Proposal_Tally_Result_Inc_Input>;
  _set?: InputMaybe<Proposal_Tally_Result_Set_Input>;
  where: Proposal_Tally_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Tally_Result_By_PkArgs = {
  _inc?: InputMaybe<Proposal_Tally_Result_Inc_Input>;
  _set?: InputMaybe<Proposal_Tally_Result_Set_Input>;
  pk_columns: Proposal_Tally_Result_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Tally_Result_ManyArgs = {
  updates: Array<Proposal_Tally_Result_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_SnapshotArgs = {
  _inc?: InputMaybe<Proposal_Validator_Status_Snapshot_Inc_Input>;
  _set?: InputMaybe<Proposal_Validator_Status_Snapshot_Set_Input>;
  where: Proposal_Validator_Status_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_Snapshot_By_PkArgs = {
  _inc?: InputMaybe<Proposal_Validator_Status_Snapshot_Inc_Input>;
  _set?: InputMaybe<Proposal_Validator_Status_Snapshot_Set_Input>;
  pk_columns: Proposal_Validator_Status_Snapshot_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_Snapshot_ManyArgs = {
  updates: Array<Proposal_Validator_Status_Snapshot_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_VoteArgs = {
  _inc?: InputMaybe<Proposal_Vote_Inc_Input>;
  _set?: InputMaybe<Proposal_Vote_Set_Input>;
  where: Proposal_Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Vote_ManyArgs = {
  updates: Array<Proposal_Vote_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PruningArgs = {
  _inc?: InputMaybe<Pruning_Inc_Input>;
  _set?: InputMaybe<Pruning_Set_Input>;
  where: Pruning_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pruning_ManyArgs = {
  updates: Array<Pruning_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Slashing_ParamsArgs = {
  _append?: InputMaybe<Slashing_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Slashing_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Slashing_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Slashing_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Slashing_Params_Inc_Input>;
  _prepend?: InputMaybe<Slashing_Params_Prepend_Input>;
  _set?: InputMaybe<Slashing_Params_Set_Input>;
  where: Slashing_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slashing_Params_By_PkArgs = {
  _append?: InputMaybe<Slashing_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Slashing_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Slashing_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Slashing_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Slashing_Params_Inc_Input>;
  _prepend?: InputMaybe<Slashing_Params_Prepend_Input>;
  _set?: InputMaybe<Slashing_Params_Set_Input>;
  pk_columns: Slashing_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slashing_Params_ManyArgs = {
  updates: Array<Slashing_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Software_Upgrade_PlanArgs = {
  _inc?: InputMaybe<Software_Upgrade_Plan_Inc_Input>;
  _set?: InputMaybe<Software_Upgrade_Plan_Set_Input>;
  where: Software_Upgrade_Plan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Software_Upgrade_Plan_ManyArgs = {
  updates: Array<Software_Upgrade_Plan_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_ParamsArgs = {
  _append?: InputMaybe<Staking_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Staking_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Staking_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Staking_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Staking_Params_Inc_Input>;
  _prepend?: InputMaybe<Staking_Params_Prepend_Input>;
  _set?: InputMaybe<Staking_Params_Set_Input>;
  where: Staking_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Params_By_PkArgs = {
  _append?: InputMaybe<Staking_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Staking_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Staking_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Staking_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Staking_Params_Inc_Input>;
  _prepend?: InputMaybe<Staking_Params_Prepend_Input>;
  _set?: InputMaybe<Staking_Params_Set_Input>;
  pk_columns: Staking_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Params_ManyArgs = {
  updates: Array<Staking_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_PoolArgs = {
  _inc?: InputMaybe<Staking_Pool_Inc_Input>;
  _set?: InputMaybe<Staking_Pool_Set_Input>;
  where: Staking_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Pool_By_PkArgs = {
  _inc?: InputMaybe<Staking_Pool_Inc_Input>;
  _set?: InputMaybe<Staking_Pool_Set_Input>;
  pk_columns: Staking_Pool_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Pool_ManyArgs = {
  updates: Array<Staking_Pool_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SupplyArgs = {
  _inc?: InputMaybe<Supply_Inc_Input>;
  _set?: InputMaybe<Supply_Set_Input>;
  where: Supply_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Supply_By_PkArgs = {
  _inc?: InputMaybe<Supply_Inc_Input>;
  _set?: InputMaybe<Supply_Set_Input>;
  pk_columns: Supply_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Supply_ManyArgs = {
  updates: Array<Supply_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TokenArgs = {
  _set?: InputMaybe<Token_Set_Input>;
  where: Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_BondedArgs = {
  _inc?: InputMaybe<Token_Bonded_Inc_Input>;
  _set?: InputMaybe<Token_Bonded_Set_Input>;
  where: Token_Bonded_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Bonded_By_PkArgs = {
  _inc?: InputMaybe<Token_Bonded_Inc_Input>;
  _set?: InputMaybe<Token_Bonded_Set_Input>;
  pk_columns: Token_Bonded_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Bonded_ManyArgs = {
  updates: Array<Token_Bonded_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Token_HolderArgs = {
  _inc?: InputMaybe<Token_Holder_Inc_Input>;
  _set?: InputMaybe<Token_Holder_Set_Input>;
  where: Token_Holder_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Holder_By_PkArgs = {
  _inc?: InputMaybe<Token_Holder_Inc_Input>;
  _set?: InputMaybe<Token_Holder_Set_Input>;
  pk_columns: Token_Holder_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Holder_ManyArgs = {
  updates: Array<Token_Holder_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Token_ManyArgs = {
  updates: Array<Token_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Token_PriceArgs = {
  _inc?: InputMaybe<Token_Price_Inc_Input>;
  _set?: InputMaybe<Token_Price_Set_Input>;
  where: Token_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Price_By_PkArgs = {
  _inc?: InputMaybe<Token_Price_Inc_Input>;
  _set?: InputMaybe<Token_Price_Set_Input>;
  pk_columns: Token_Price_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Price_HistoryArgs = {
  _inc?: InputMaybe<Token_Price_History_Inc_Input>;
  _set?: InputMaybe<Token_Price_History_Set_Input>;
  where: Token_Price_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Price_History_By_PkArgs = {
  _inc?: InputMaybe<Token_Price_History_Inc_Input>;
  _set?: InputMaybe<Token_Price_History_Set_Input>;
  pk_columns: Token_Price_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Price_History_ManyArgs = {
  updates: Array<Token_Price_History_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Price_ManyArgs = {
  updates: Array<Token_Price_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Token_UnbondingArgs = {
  _inc?: InputMaybe<Token_Unbonding_Inc_Input>;
  _set?: InputMaybe<Token_Unbonding_Set_Input>;
  where: Token_Unbonding_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Unbonding_By_PkArgs = {
  _inc?: InputMaybe<Token_Unbonding_Inc_Input>;
  _set?: InputMaybe<Token_Unbonding_Set_Input>;
  pk_columns: Token_Unbonding_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Unbonding_ManyArgs = {
  updates: Array<Token_Unbonding_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Token_UnitArgs = {
  _inc?: InputMaybe<Token_Unit_Inc_Input>;
  _set?: InputMaybe<Token_Unit_Set_Input>;
  where: Token_Unit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Unit_ManyArgs = {
  updates: Array<Token_Unit_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _append?: InputMaybe<Transaction_Append_Input>;
  _delete_at_path?: InputMaybe<Transaction_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Transaction_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Transaction_Delete_Key_Input>;
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _prepend?: InputMaybe<Transaction_Prepend_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_105Args = {
  _append?: InputMaybe<Transaction_105_Append_Input>;
  _delete_at_path?: InputMaybe<Transaction_105_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Transaction_105_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Transaction_105_Delete_Key_Input>;
  _inc?: InputMaybe<Transaction_105_Inc_Input>;
  _prepend?: InputMaybe<Transaction_105_Prepend_Input>;
  _set?: InputMaybe<Transaction_105_Set_Input>;
  where: Transaction_105_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_105_ManyArgs = {
  updates: Array<Transaction_105_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_ManyArgs = {
  updates: Array<Transaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ValidatorArgs = {
  _set?: InputMaybe<Validator_Set_Input>;
  where: Validator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_By_PkArgs = {
  _set?: InputMaybe<Validator_Set_Input>;
  pk_columns: Validator_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_CommissionArgs = {
  _inc?: InputMaybe<Validator_Commission_Inc_Input>;
  _set?: InputMaybe<Validator_Commission_Set_Input>;
  where: Validator_Commission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Commission_By_PkArgs = {
  _inc?: InputMaybe<Validator_Commission_Inc_Input>;
  _set?: InputMaybe<Validator_Commission_Set_Input>;
  pk_columns: Validator_Commission_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Commission_ManyArgs = {
  updates: Array<Validator_Commission_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_DenomArgs = {
  _inc?: InputMaybe<Validator_Denom_Inc_Input>;
  _set?: InputMaybe<Validator_Denom_Set_Input>;
  where: Validator_Denom_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Denom_By_PkArgs = {
  _inc?: InputMaybe<Validator_Denom_Inc_Input>;
  _set?: InputMaybe<Validator_Denom_Set_Input>;
  pk_columns: Validator_Denom_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Denom_ManyArgs = {
  updates: Array<Validator_Denom_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_DescriptionArgs = {
  _inc?: InputMaybe<Validator_Description_Inc_Input>;
  _set?: InputMaybe<Validator_Description_Set_Input>;
  where: Validator_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Description_By_PkArgs = {
  _inc?: InputMaybe<Validator_Description_Inc_Input>;
  _set?: InputMaybe<Validator_Description_Set_Input>;
  pk_columns: Validator_Description_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Description_ManyArgs = {
  updates: Array<Validator_Description_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_InfoArgs = {
  _inc?: InputMaybe<Validator_Info_Inc_Input>;
  _set?: InputMaybe<Validator_Info_Set_Input>;
  where: Validator_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Info_By_PkArgs = {
  _inc?: InputMaybe<Validator_Info_Inc_Input>;
  _set?: InputMaybe<Validator_Info_Set_Input>;
  pk_columns: Validator_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Info_ManyArgs = {
  updates: Array<Validator_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_ManyArgs = {
  updates: Array<Validator_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Signing_InfoArgs = {
  _inc?: InputMaybe<Validator_Signing_Info_Inc_Input>;
  _set?: InputMaybe<Validator_Signing_Info_Set_Input>;
  where: Validator_Signing_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Signing_Info_By_PkArgs = {
  _inc?: InputMaybe<Validator_Signing_Info_Inc_Input>;
  _set?: InputMaybe<Validator_Signing_Info_Set_Input>;
  pk_columns: Validator_Signing_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Signing_Info_ManyArgs = {
  updates: Array<Validator_Signing_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_StatusArgs = {
  _inc?: InputMaybe<Validator_Status_Inc_Input>;
  _set?: InputMaybe<Validator_Status_Set_Input>;
  where: Validator_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Status_By_PkArgs = {
  _inc?: InputMaybe<Validator_Status_Inc_Input>;
  _set?: InputMaybe<Validator_Status_Set_Input>;
  pk_columns: Validator_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Status_ManyArgs = {
  updates: Array<Validator_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Voting_PowerArgs = {
  _inc?: InputMaybe<Validator_Voting_Power_Inc_Input>;
  _set?: InputMaybe<Validator_Voting_Power_Set_Input>;
  where: Validator_Voting_Power_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Voting_Power_By_PkArgs = {
  _inc?: InputMaybe<Validator_Voting_Power_Inc_Input>;
  _set?: InputMaybe<Validator_Voting_Power_Set_Input>;
  pk_columns: Validator_Voting_Power_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Voting_Power_ManyArgs = {
  updates: Array<Validator_Voting_Power_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vesting_AccountArgs = {
  _inc?: InputMaybe<Vesting_Account_Inc_Input>;
  _set?: InputMaybe<Vesting_Account_Set_Input>;
  where: Vesting_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vesting_Account_By_PkArgs = {
  _inc?: InputMaybe<Vesting_Account_Inc_Input>;
  _set?: InputMaybe<Vesting_Account_Set_Input>;
  pk_columns: Vesting_Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vesting_Account_ManyArgs = {
  updates: Array<Vesting_Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vesting_PeriodArgs = {
  _inc?: InputMaybe<Vesting_Period_Inc_Input>;
  _set?: InputMaybe<Vesting_Period_Set_Input>;
  where: Vesting_Period_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vesting_Period_ManyArgs = {
  updates: Array<Vesting_Period_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pre_commit" */
export type Pre_Commit = {
  __typename?: 'pre_commit';
  height: Scalars['bigint'];
  proposer_priority: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "pre_commit" */
export type Pre_Commit_Aggregate = {
  __typename?: 'pre_commit_aggregate';
  aggregate?: Maybe<Pre_Commit_Aggregate_Fields>;
  nodes: Array<Pre_Commit>;
};

export type Pre_Commit_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp_Count>;
};

export type Pre_Commit_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Pre_Commit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_Fields = {
  __typename?: 'pre_commit_aggregate_fields';
  avg?: Maybe<Pre_Commit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pre_Commit_Max_Fields>;
  min?: Maybe<Pre_Commit_Min_Fields>;
  stddev?: Maybe<Pre_Commit_Stddev_Fields>;
  stddev_pop?: Maybe<Pre_Commit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pre_Commit_Stddev_Samp_Fields>;
  sum?: Maybe<Pre_Commit_Sum_Fields>;
  var_pop?: Maybe<Pre_Commit_Var_Pop_Fields>;
  var_samp?: Maybe<Pre_Commit_Var_Samp_Fields>;
  variance?: Maybe<Pre_Commit_Variance_Fields>;
};


/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pre_commit" */
export type Pre_Commit_Aggregate_Order_By = {
  avg?: InputMaybe<Pre_Commit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pre_Commit_Max_Order_By>;
  min?: InputMaybe<Pre_Commit_Min_Order_By>;
  stddev?: InputMaybe<Pre_Commit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pre_Commit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pre_Commit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pre_Commit_Sum_Order_By>;
  var_pop?: InputMaybe<Pre_Commit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pre_Commit_Var_Samp_Order_By>;
  variance?: InputMaybe<Pre_Commit_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pre_commit" */
export type Pre_Commit_Arr_Rel_Insert_Input = {
  data: Array<Pre_Commit_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pre_Commit_On_Conflict>;
};

/** aggregate avg on columns */
export type Pre_Commit_Avg_Fields = {
  __typename?: 'pre_commit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pre_commit" */
export type Pre_Commit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pre_commit". All fields are combined with a logical 'AND'. */
export type Pre_Commit_Bool_Exp = {
  _and?: InputMaybe<Array<Pre_Commit_Bool_Exp>>;
  _not?: InputMaybe<Pre_Commit_Bool_Exp>;
  _or?: InputMaybe<Array<Pre_Commit_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposer_priority?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "pre_commit" */
export enum Pre_Commit_Constraint {
  /** unique or primary key constraint on columns "validator_address", "timestamp" */
  PreCommitValidatorAddressTimestampKey = 'pre_commit_validator_address_timestamp_key'
}

/** input type for incrementing numeric columns in table "pre_commit" */
export type Pre_Commit_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposer_priority?: InputMaybe<Scalars['bigint']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "pre_commit" */
export type Pre_Commit_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposer_priority?: InputMaybe<Scalars['bigint']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Pre_Commit_Max_Fields = {
  __typename?: 'pre_commit_max_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "pre_commit" */
export type Pre_Commit_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pre_Commit_Min_Fields = {
  __typename?: 'pre_commit_min_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "pre_commit" */
export type Pre_Commit_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pre_commit" */
export type Pre_Commit_Mutation_Response = {
  __typename?: 'pre_commit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pre_Commit>;
};

/** on_conflict condition type for table "pre_commit" */
export type Pre_Commit_On_Conflict = {
  constraint: Pre_Commit_Constraint;
  update_columns?: Array<Pre_Commit_Update_Column>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};

/** Ordering options when selecting data from "pre_commit". */
export type Pre_Commit_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "pre_commit" */
export enum Pre_Commit_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** input type for updating data in table "pre_commit" */
export type Pre_Commit_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposer_priority?: InputMaybe<Scalars['bigint']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Pre_Commit_Stddev_Fields = {
  __typename?: 'pre_commit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pre_Commit_Stddev_Pop_Fields = {
  __typename?: 'pre_commit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pre_Commit_Stddev_Samp_Fields = {
  __typename?: 'pre_commit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pre_commit" */
export type Pre_Commit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pre_Commit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pre_Commit_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposer_priority?: InputMaybe<Scalars['bigint']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Pre_Commit_Sum_Fields = {
  __typename?: 'pre_commit_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "pre_commit" */
export type Pre_Commit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** update columns of table "pre_commit" */
export enum Pre_Commit_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

export type Pre_Commit_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pre_Commit_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pre_Commit_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pre_Commit_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pre_Commit_Var_Pop_Fields = {
  __typename?: 'pre_commit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pre_commit" */
export type Pre_Commit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pre_Commit_Var_Samp_Fields = {
  __typename?: 'pre_commit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pre_commit" */
export type Pre_Commit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pre_Commit_Variance_Fields = {
  __typename?: 'pre_commit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pre_commit" */
export type Pre_Commit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal" */
export type Proposal = {
  __typename?: 'proposal';
  content: Scalars['jsonb'];
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  metadata: Scalars['String'];
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  /** An object relationship */
  proposal_tally_result?: Maybe<Proposal_Tally_Result>;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Result>;
  /** An aggregate relationship */
  proposal_tally_results_aggregate: Proposal_Tally_Result_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  /** An object relationship */
  proposer: Account;
  proposer_address: Scalars['String'];
  /** An object relationship */
  staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot>;
  status?: Maybe<Scalars['String']>;
  submit_time: Scalars['timestamp'];
  title: Scalars['String'];
  /** An array relationship */
  validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  /** An aggregate relationship */
  validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "proposal" */
export type ProposalContentArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalValidator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalValidator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};

/** aggregated selection of "proposal" */
export type Proposal_Aggregate = {
  __typename?: 'proposal_aggregate';
  aggregate?: Maybe<Proposal_Aggregate_Fields>;
  nodes: Array<Proposal>;
};

export type Proposal_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Proposal_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_Fields = {
  __typename?: 'proposal_aggregate_fields';
  avg?: Maybe<Proposal_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Max_Fields>;
  min?: Maybe<Proposal_Min_Fields>;
  stddev?: Maybe<Proposal_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Sum_Fields>;
  var_pop?: Maybe<Proposal_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Variance_Fields>;
};


/** aggregate fields of "proposal" */
export type Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal" */
export type Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Max_Order_By>;
  min?: InputMaybe<Proposal_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Proposal_Append_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "proposal" */
export type Proposal_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Avg_Fields = {
  __typename?: 'proposal_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal" */
export type Proposal_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Bool_Exp>>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  deposit_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<String_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Bool_Exp>;
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Bool_Exp>;
  proposer?: InputMaybe<Account_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp>;
  voting_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  voting_start_time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal" */
export enum Proposal_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProposalPkey = 'proposal_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Proposal_Delete_At_Path_Input = {
  content?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Proposal_Delete_Elem_Input = {
  content?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Proposal_Delete_Key_Input = {
  content?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "proposal_deposit" */
export type Proposal_Deposit = {
  __typename?: 'proposal_deposit';
  amount?: Maybe<Array<Scalars['coin']>>;
  /** An object relationship */
  block?: Maybe<Block>;
  /** An object relationship */
  depositor?: Maybe<Account>;
  depositor_address?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  timestamp?: Maybe<Scalars['timestamp']>;
  transaction_hash: Scalars['String'];
};

/** aggregated selection of "proposal_deposit" */
export type Proposal_Deposit_Aggregate = {
  __typename?: 'proposal_deposit_aggregate';
  aggregate?: Maybe<Proposal_Deposit_Aggregate_Fields>;
  nodes: Array<Proposal_Deposit>;
};

export type Proposal_Deposit_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Deposit_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Deposit_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Fields = {
  __typename?: 'proposal_deposit_aggregate_fields';
  avg?: Maybe<Proposal_Deposit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Deposit_Max_Fields>;
  min?: Maybe<Proposal_Deposit_Min_Fields>;
  stddev?: Maybe<Proposal_Deposit_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Deposit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Deposit_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Deposit_Sum_Fields>;
  var_pop?: Maybe<Proposal_Deposit_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Deposit_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Deposit_Variance_Fields>;
};


/** aggregate fields of "proposal_deposit" */
export type Proposal_Deposit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Deposit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Deposit_Max_Order_By>;
  min?: InputMaybe<Proposal_Deposit_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Deposit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Deposit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Deposit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Deposit_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Deposit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Deposit_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Deposit_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_deposit" */
export type Proposal_Deposit_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Deposit_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Deposit_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Deposit_Avg_Fields = {
  __typename?: 'proposal_deposit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_deposit". All fields are combined with a logical 'AND'. */
export type Proposal_Deposit_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>;
  amount?: InputMaybe<Coin_Array_Comparison_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  depositor?: InputMaybe<Account_Bool_Exp>;
  depositor_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_deposit" */
export enum Proposal_Deposit_Constraint {
  /** unique or primary key constraint on columns "transaction_hash", "proposal_id", "depositor_address" */
  UniqueDeposit = 'unique_deposit'
}

/** input type for incrementing numeric columns in table "proposal_deposit" */
export type Proposal_Deposit_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "proposal_deposit" */
export type Proposal_Deposit_Insert_Input = {
  amount?: InputMaybe<Array<Scalars['coin']>>;
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  depositor?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  depositor_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Proposal_Deposit_Max_Fields = {
  __typename?: 'proposal_deposit_max_fields';
  amount?: Maybe<Array<Scalars['coin']>>;
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Deposit_Min_Fields = {
  __typename?: 'proposal_deposit_min_fields';
  amount?: Maybe<Array<Scalars['coin']>>;
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_deposit" */
export type Proposal_Deposit_Mutation_Response = {
  __typename?: 'proposal_deposit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Deposit>;
};

/** on_conflict condition type for table "proposal_deposit" */
export type Proposal_Deposit_On_Conflict = {
  constraint: Proposal_Deposit_Constraint;
  update_columns?: Array<Proposal_Deposit_Update_Column>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_deposit". */
export type Proposal_Deposit_Order_By = {
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Block_Order_By>;
  depositor?: InputMaybe<Account_Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_deposit" */
export enum Proposal_Deposit_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** input type for updating data in table "proposal_deposit" */
export type Proposal_Deposit_Set_Input = {
  amount?: InputMaybe<Array<Scalars['coin']>>;
  depositor_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Proposal_Deposit_Stddev_Fields = {
  __typename?: 'proposal_deposit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Deposit_Stddev_Pop_Fields = {
  __typename?: 'proposal_deposit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Deposit_Stddev_Samp_Fields = {
  __typename?: 'proposal_deposit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_deposit" */
export type Proposal_Deposit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Deposit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Deposit_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Array<Scalars['coin']>>;
  depositor_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Proposal_Deposit_Sum_Fields = {
  __typename?: 'proposal_deposit_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** update columns of table "proposal_deposit" */
export enum Proposal_Deposit_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionHash = 'transaction_hash'
}

export type Proposal_Deposit_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Deposit_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Deposit_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Deposit_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Deposit_Var_Pop_Fields = {
  __typename?: 'proposal_deposit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Deposit_Var_Samp_Fields = {
  __typename?: 'proposal_deposit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Deposit_Variance_Fields = {
  __typename?: 'proposal_deposit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "proposal" */
export type Proposal_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "proposal" */
export type Proposal_Insert_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['String']>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Arr_Rel_Insert_Input>;
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Obj_Rel_Insert_Input>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Arr_Rel_Insert_Input>;
  proposal_votes?: InputMaybe<Proposal_Vote_Arr_Rel_Insert_Input>;
  proposer?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  proposer_address?: InputMaybe<Scalars['String']>;
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Obj_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
  submit_time?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Arr_Rel_Insert_Input>;
  voting_end_time?: InputMaybe<Scalars['timestamp']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Proposal_Max_Fields = {
  __typename?: 'proposal_max_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "proposal" */
export type Proposal_Max_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Min_Fields = {
  __typename?: 'proposal_min_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "proposal" */
export type Proposal_Min_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal" */
export type Proposal_Mutation_Response = {
  __typename?: 'proposal_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal>;
};

/** input type for inserting object relation for remote table "proposal" */
export type Proposal_Obj_Rel_Insert_Input = {
  data: Proposal_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_On_Conflict>;
};

/** on_conflict condition type for table "proposal" */
export type Proposal_On_Conflict = {
  constraint: Proposal_Constraint;
  update_columns?: Array<Proposal_Update_Column>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
  content?: InputMaybe<Order_By>;
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Order_By>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposer?: InputMaybe<Account_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: proposal */
export type Proposal_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Proposal_Prepend_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "proposal" */
export enum Proposal_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

/** input type for updating data in table "proposal" */
export type Proposal_Set_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['String']>;
  proposer_address?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  submit_time?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']>;
};

/** columns and relationships of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot = {
  __typename?: 'proposal_staking_pool_snapshot';
  bonded_tokens: Scalars['String'];
  height: Scalars['bigint'];
  not_bonded_tokens: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
};

/** aggregated selection of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate = {
  __typename?: 'proposal_staking_pool_snapshot_aggregate';
  aggregate?: Maybe<Proposal_Staking_Pool_Snapshot_Aggregate_Fields>;
  nodes: Array<Proposal_Staking_Pool_Snapshot>;
};

/** aggregate fields of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_aggregate_fields';
  avg?: Maybe<Proposal_Staking_Pool_Snapshot_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Staking_Pool_Snapshot_Max_Fields>;
  min?: Maybe<Proposal_Staking_Pool_Snapshot_Min_Fields>;
  stddev?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Staking_Pool_Snapshot_Sum_Fields>;
  var_pop?: Maybe<Proposal_Staking_Pool_Snapshot_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Staking_Pool_Snapshot_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Staking_Pool_Snapshot_Variance_Fields>;
};


/** aggregate fields of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Proposal_Staking_Pool_Snapshot_Avg_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "proposal_staking_pool_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Staking_Pool_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Constraint {
  /** unique or primary key constraint on columns "proposal_id" */
  UniqueStakingPoolSnapshot = 'unique_staking_pool_snapshot'
}

/** input type for incrementing numeric columns in table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Insert_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Proposal_Staking_Pool_Snapshot_Max_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_max_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Proposal_Staking_Pool_Snapshot_Min_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_min_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Mutation_Response = {
  __typename?: 'proposal_staking_pool_snapshot_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Staking_Pool_Snapshot>;
};

/** input type for inserting object relation for remote table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Obj_Rel_Insert_Input = {
  data: Proposal_Staking_Pool_Snapshot_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Staking_Pool_Snapshot_On_Conflict>;
};

/** on_conflict condition type for table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_On_Conflict = {
  constraint: Proposal_Staking_Pool_Snapshot_Constraint;
  update_columns?: Array<Proposal_Staking_Pool_Snapshot_Update_Column>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_staking_pool_snapshot". */
export type Proposal_Staking_Pool_Snapshot_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: proposal_staking_pool_snapshot */
export type Proposal_Staking_Pool_Snapshot_Pk_Columns_Input = {
  proposal_id: Scalars['Int'];
};

/** select columns of table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

/** input type for updating data in table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Set_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Proposal_Staking_Pool_Snapshot_Sum_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Update_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

export type Proposal_Staking_Pool_Snapshot_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Staking_Pool_Snapshot_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Staking_Pool_Snapshot_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Staking_Pool_Snapshot_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Staking_Pool_Snapshot_Var_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Proposal_Staking_Pool_Snapshot_Var_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Proposal_Staking_Pool_Snapshot_Variance_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Proposal_Stddev_Fields = {
  __typename?: 'proposal_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal" */
export type Proposal_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Stddev_Pop_Fields = {
  __typename?: 'proposal_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal" */
export type Proposal_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Stddev_Samp_Fields = {
  __typename?: 'proposal_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal" */
export type Proposal_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal" */
export type Proposal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['String']>;
  proposer_address?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  submit_time?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Proposal_Sum_Fields = {
  __typename?: 'proposal_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal" */
export type Proposal_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_tally_result" */
export type Proposal_Tally_Result = {
  __typename?: 'proposal_tally_result';
  abstain: Scalars['String'];
  height: Scalars['bigint'];
  no: Scalars['String'];
  no_with_veto: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  yes: Scalars['String'];
};

/** aggregated selection of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate = {
  __typename?: 'proposal_tally_result_aggregate';
  aggregate?: Maybe<Proposal_Tally_Result_Aggregate_Fields>;
  nodes: Array<Proposal_Tally_Result>;
};

export type Proposal_Tally_Result_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Tally_Result_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Tally_Result_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Fields = {
  __typename?: 'proposal_tally_result_aggregate_fields';
  avg?: Maybe<Proposal_Tally_Result_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Tally_Result_Max_Fields>;
  min?: Maybe<Proposal_Tally_Result_Min_Fields>;
  stddev?: Maybe<Proposal_Tally_Result_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Tally_Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Tally_Result_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Tally_Result_Sum_Fields>;
  var_pop?: Maybe<Proposal_Tally_Result_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Tally_Result_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Tally_Result_Variance_Fields>;
};


/** aggregate fields of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Tally_Result_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Tally_Result_Max_Order_By>;
  min?: InputMaybe<Proposal_Tally_Result_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Tally_Result_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Tally_Result_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Tally_Result_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Tally_Result_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Tally_Result_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Tally_Result_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Tally_Result_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_tally_result" */
export type Proposal_Tally_Result_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Tally_Result_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Tally_Result_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Tally_Result_Avg_Fields = {
  __typename?: 'proposal_tally_result_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_tally_result". All fields are combined with a logical 'AND'. */
export type Proposal_Tally_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  abstain?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  no?: InputMaybe<String_Comparison_Exp>;
  no_with_veto?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  yes?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_tally_result" */
export enum Proposal_Tally_Result_Constraint {
  /** unique or primary key constraint on columns "proposal_id" */
  UniqueTallyResult = 'unique_tally_result'
}

/** input type for incrementing numeric columns in table "proposal_tally_result" */
export type Proposal_Tally_Result_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "proposal_tally_result" */
export type Proposal_Tally_Result_Insert_Input = {
  abstain?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  no?: InputMaybe<Scalars['String']>;
  no_with_veto?: InputMaybe<Scalars['String']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  yes?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Proposal_Tally_Result_Max_Fields = {
  __typename?: 'proposal_tally_result_max_fields';
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Max_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Tally_Result_Min_Fields = {
  __typename?: 'proposal_tally_result_min_fields';
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Min_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_tally_result" */
export type Proposal_Tally_Result_Mutation_Response = {
  __typename?: 'proposal_tally_result_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Tally_Result>;
};

/** input type for inserting object relation for remote table "proposal_tally_result" */
export type Proposal_Tally_Result_Obj_Rel_Insert_Input = {
  data: Proposal_Tally_Result_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Tally_Result_On_Conflict>;
};

/** on_conflict condition type for table "proposal_tally_result" */
export type Proposal_Tally_Result_On_Conflict = {
  constraint: Proposal_Tally_Result_Constraint;
  update_columns?: Array<Proposal_Tally_Result_Update_Column>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_tally_result". */
export type Proposal_Tally_Result_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** primary key columns input for table: proposal_tally_result */
export type Proposal_Tally_Result_Pk_Columns_Input = {
  proposal_id: Scalars['Int'];
};

/** select columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Select_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

/** input type for updating data in table "proposal_tally_result" */
export type Proposal_Tally_Result_Set_Input = {
  abstain?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  no?: InputMaybe<Scalars['String']>;
  no_with_veto?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  yes?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Proposal_Tally_Result_Stddev_Fields = {
  __typename?: 'proposal_tally_result_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Tally_Result_Stddev_Pop_Fields = {
  __typename?: 'proposal_tally_result_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Tally_Result_Stddev_Samp_Fields = {
  __typename?: 'proposal_tally_result_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_tally_result" */
export type Proposal_Tally_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Tally_Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Tally_Result_Stream_Cursor_Value_Input = {
  abstain?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  no?: InputMaybe<Scalars['String']>;
  no_with_veto?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  yes?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Proposal_Tally_Result_Sum_Fields = {
  __typename?: 'proposal_tally_result_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** update columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Update_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

export type Proposal_Tally_Result_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Tally_Result_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Tally_Result_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Tally_Result_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Tally_Result_Var_Pop_Fields = {
  __typename?: 'proposal_tally_result_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Tally_Result_Var_Samp_Fields = {
  __typename?: 'proposal_tally_result_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Tally_Result_Variance_Fields = {
  __typename?: 'proposal_tally_result_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** update columns of table "proposal" */
export enum Proposal_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

export type Proposal_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Proposal_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Proposal_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Proposal_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Proposal_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Proposal_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Bool_Exp;
};

/** columns and relationships of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot = {
  __typename?: 'proposal_validator_status_snapshot';
  height: Scalars['bigint'];
  id: Scalars['Int'];
  jailed: Scalars['Boolean'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']>;
  status: Scalars['Int'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate = {
  __typename?: 'proposal_validator_status_snapshot_aggregate';
  aggregate?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Fields>;
  nodes: Array<Proposal_Validator_Status_Snapshot>;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And = {
  arguments: Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Fields = {
  __typename?: 'proposal_validator_status_snapshot_aggregate_fields';
  avg?: Maybe<Proposal_Validator_Status_Snapshot_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Validator_Status_Snapshot_Max_Fields>;
  min?: Maybe<Proposal_Validator_Status_Snapshot_Min_Fields>;
  stddev?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Validator_Status_Snapshot_Sum_Fields>;
  var_pop?: Maybe<Proposal_Validator_Status_Snapshot_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Validator_Status_Snapshot_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Validator_Status_Snapshot_Variance_Fields>;
};


/** aggregate fields of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Validator_Status_Snapshot_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Validator_Status_Snapshot_Max_Order_By>;
  min?: InputMaybe<Proposal_Validator_Status_Snapshot_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Validator_Status_Snapshot_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Validator_Status_Snapshot_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Validator_Status_Snapshot_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Validator_Status_Snapshot_Avg_Fields = {
  __typename?: 'proposal_validator_status_snapshot_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_validator_status_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Validator_Status_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProposalValidatorStatusSnapshotPkey = 'proposal_validator_status_snapshot_pkey',
  /** unique or primary key constraint on columns "validator_address", "proposal_id" */
  UniqueValidatorStatusSnapshot = 'unique_validator_status_snapshot'
}

/** input type for incrementing numeric columns in table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Proposal_Validator_Status_Snapshot_Max_Fields = {
  __typename?: 'proposal_validator_status_snapshot_max_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Validator_Status_Snapshot_Min_Fields = {
  __typename?: 'proposal_validator_status_snapshot_min_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Mutation_Response = {
  __typename?: 'proposal_validator_status_snapshot_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Validator_Status_Snapshot>;
};

/** input type for inserting object relation for remote table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Obj_Rel_Insert_Input = {
  data: Proposal_Validator_Status_Snapshot_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};

/** on_conflict condition type for table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_On_Conflict = {
  constraint: Proposal_Validator_Status_Snapshot_Constraint;
  update_columns?: Array<Proposal_Validator_Status_Snapshot_Update_Column>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_validator_status_snapshot". */
export type Proposal_Validator_Status_Snapshot_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** primary key columns input for table: proposal_validator_status_snapshot */
export type Proposal_Validator_Status_Snapshot_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** select "proposal_validator_status_snapshot_aggregate_bool_exp_bool_and_arguments_columns" columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** select "proposal_validator_status_snapshot_aggregate_bool_exp_bool_or_arguments_columns" columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** input type for updating data in table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Proposal_Validator_Status_Snapshot_Sum_Fields = {
  __typename?: 'proposal_validator_status_snapshot_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** update columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

export type Proposal_Validator_Status_Snapshot_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Validator_Status_Snapshot_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Validator_Status_Snapshot_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Validator_Status_Snapshot_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshot_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshot_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Validator_Status_Snapshot_Variance_Fields = {
  __typename?: 'proposal_validator_status_snapshot_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Var_Pop_Fields = {
  __typename?: 'proposal_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal" */
export type Proposal_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Var_Samp_Fields = {
  __typename?: 'proposal_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal" */
export type Proposal_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Variance_Fields = {
  __typename?: 'proposal_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal" */
export type Proposal_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_vote" */
export type Proposal_Vote = {
  __typename?: 'proposal_vote';
  /** An object relationship */
  account: Account;
  /** An object relationship */
  block?: Maybe<Block>;
  height: Scalars['bigint'];
  option: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  timestamp?: Maybe<Scalars['timestamp']>;
  voter_address: Scalars['String'];
  weight: Scalars['String'];
};

/** aggregated selection of "proposal_vote" */
export type Proposal_Vote_Aggregate = {
  __typename?: 'proposal_vote_aggregate';
  aggregate?: Maybe<Proposal_Vote_Aggregate_Fields>;
  nodes: Array<Proposal_Vote>;
};

export type Proposal_Vote_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Vote_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Vote_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Proposal_Vote_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_vote" */
export type Proposal_Vote_Aggregate_Fields = {
  __typename?: 'proposal_vote_aggregate_fields';
  avg?: Maybe<Proposal_Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Vote_Max_Fields>;
  min?: Maybe<Proposal_Vote_Min_Fields>;
  stddev?: Maybe<Proposal_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Vote_Sum_Fields>;
  var_pop?: Maybe<Proposal_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Vote_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Vote_Variance_Fields>;
};


/** aggregate fields of "proposal_vote" */
export type Proposal_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_vote" */
export type Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Vote_Max_Order_By>;
  min?: InputMaybe<Proposal_Vote_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Vote_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_vote" */
export type Proposal_Vote_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Vote_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Vote_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Vote_Avg_Fields = {
  __typename?: 'proposal_vote_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_vote" */
export type Proposal_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_vote". All fields are combined with a logical 'AND'. */
export type Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  option?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  voter_address?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_vote" */
export enum Proposal_Vote_Constraint {
  /** unique or primary key constraint on columns "voter_address", "option", "proposal_id" */
  UniqueVote = 'unique_vote'
}

/** input type for incrementing numeric columns in table "proposal_vote" */
export type Proposal_Vote_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "proposal_vote" */
export type Proposal_Vote_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']>;
  option?: InputMaybe<Scalars['String']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  voter_address?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Proposal_Vote_Max_Fields = {
  __typename?: 'proposal_vote_max_fields';
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  voter_address?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "proposal_vote" */
export type Proposal_Vote_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Vote_Min_Fields = {
  __typename?: 'proposal_vote_min_fields';
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  voter_address?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "proposal_vote" */
export type Proposal_Vote_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_vote" */
export type Proposal_Vote_Mutation_Response = {
  __typename?: 'proposal_vote_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Vote>;
};

/** on_conflict condition type for table "proposal_vote" */
export type Proposal_Vote_On_Conflict = {
  constraint: Proposal_Vote_Constraint;
  update_columns?: Array<Proposal_Vote_Update_Column>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_vote". */
export type Proposal_Vote_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  block?: InputMaybe<Block_Order_By>;
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_vote" */
export enum Proposal_Vote_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VoterAddress = 'voter_address',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "proposal_vote" */
export type Proposal_Vote_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  option?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  voter_address?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Proposal_Vote_Stddev_Fields = {
  __typename?: 'proposal_vote_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Vote_Stddev_Pop_Fields = {
  __typename?: 'proposal_vote_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Vote_Stddev_Samp_Fields = {
  __typename?: 'proposal_vote_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_vote" */
export type Proposal_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Vote_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  option?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  voter_address?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Proposal_Vote_Sum_Fields = {
  __typename?: 'proposal_vote_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal_vote" */
export type Proposal_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** update columns of table "proposal_vote" */
export enum Proposal_Vote_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VoterAddress = 'voter_address',
  /** column name */
  Weight = 'weight'
}

export type Proposal_Vote_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Vote_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Vote_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Vote_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Vote_Var_Pop_Fields = {
  __typename?: 'proposal_vote_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Vote_Var_Samp_Fields = {
  __typename?: 'proposal_vote_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Vote_Variance_Fields = {
  __typename?: 'proposal_vote_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_vote" */
export type Proposal_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "pruning" */
export type Pruning = {
  __typename?: 'pruning';
  last_pruned_height: Scalars['bigint'];
};

/** aggregated selection of "pruning" */
export type Pruning_Aggregate = {
  __typename?: 'pruning_aggregate';
  aggregate?: Maybe<Pruning_Aggregate_Fields>;
  nodes: Array<Pruning>;
};

/** aggregate fields of "pruning" */
export type Pruning_Aggregate_Fields = {
  __typename?: 'pruning_aggregate_fields';
  avg?: Maybe<Pruning_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pruning_Max_Fields>;
  min?: Maybe<Pruning_Min_Fields>;
  stddev?: Maybe<Pruning_Stddev_Fields>;
  stddev_pop?: Maybe<Pruning_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pruning_Stddev_Samp_Fields>;
  sum?: Maybe<Pruning_Sum_Fields>;
  var_pop?: Maybe<Pruning_Var_Pop_Fields>;
  var_samp?: Maybe<Pruning_Var_Samp_Fields>;
  variance?: Maybe<Pruning_Variance_Fields>;
};


/** aggregate fields of "pruning" */
export type Pruning_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pruning_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Pruning_Avg_Fields = {
  __typename?: 'pruning_avg_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pruning". All fields are combined with a logical 'AND'. */
export type Pruning_Bool_Exp = {
  _and?: InputMaybe<Array<Pruning_Bool_Exp>>;
  _not?: InputMaybe<Pruning_Bool_Exp>;
  _or?: InputMaybe<Array<Pruning_Bool_Exp>>;
  last_pruned_height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "pruning" */
export type Pruning_Inc_Input = {
  last_pruned_height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "pruning" */
export type Pruning_Insert_Input = {
  last_pruned_height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Pruning_Max_Fields = {
  __typename?: 'pruning_max_fields';
  last_pruned_height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Pruning_Min_Fields = {
  __typename?: 'pruning_min_fields';
  last_pruned_height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "pruning" */
export type Pruning_Mutation_Response = {
  __typename?: 'pruning_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pruning>;
};

/** Ordering options when selecting data from "pruning". */
export type Pruning_Order_By = {
  last_pruned_height?: InputMaybe<Order_By>;
};

/** select columns of table "pruning" */
export enum Pruning_Select_Column {
  /** column name */
  LastPrunedHeight = 'last_pruned_height'
}

/** input type for updating data in table "pruning" */
export type Pruning_Set_Input = {
  last_pruned_height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Pruning_Stddev_Fields = {
  __typename?: 'pruning_stddev_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Pruning_Stddev_Pop_Fields = {
  __typename?: 'pruning_stddev_pop_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Pruning_Stddev_Samp_Fields = {
  __typename?: 'pruning_stddev_samp_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "pruning" */
export type Pruning_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pruning_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pruning_Stream_Cursor_Value_Input = {
  last_pruned_height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Pruning_Sum_Fields = {
  __typename?: 'pruning_sum_fields';
  last_pruned_height?: Maybe<Scalars['bigint']>;
};

export type Pruning_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pruning_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pruning_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pruning_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pruning_Var_Pop_Fields = {
  __typename?: 'pruning_var_pop_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Pruning_Var_Samp_Fields = {
  __typename?: 'pruning_var_samp_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Pruning_Variance_Fields = {
  __typename?: 'pruning_variance_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "account_summary" */
  account_summary: Array<Account_Summary>;
  /** fetch aggregated fields from the table: "account_summary" */
  account_summary_aggregate: Account_Summary_Aggregate;
  action_account_balance?: Maybe<ActionBalance>;
  action_delegation?: Maybe<ActionDelegationResponse>;
  action_delegation_reward?: Maybe<Array<Maybe<ActionDelegationReward>>>;
  action_delegation_total?: Maybe<ActionBalance>;
  action_delegator_withdraw_address: ActionAddress;
  action_redelegation?: Maybe<ActionRedelegationResponse>;
  action_unbonding_delegation?: Maybe<ActionUnbondingDelegationResponse>;
  action_unbonding_delegation_total?: Maybe<ActionBalance>;
  action_validator_commission_amount?: Maybe<ActionValidatorCommissionAmount>;
  action_validator_delegations?: Maybe<ActionDelegationResponse>;
  action_validator_redelegations_from?: Maybe<ActionRedelegationResponse>;
  action_validator_unbonding_delegations?: Maybe<ActionUnbondingDelegationResponse>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate;
  /** fetch data from the table: "average_block_time_from_genesis" using primary key columns */
  average_block_time_from_genesis_by_pk?: Maybe<Average_Block_Time_From_Genesis>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" using primary key columns */
  average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" using primary key columns */
  average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" using primary key columns */
  average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** fetch data from the table: "balance" */
  balance: Array<Balance>;
  /** fetch aggregated fields from the table: "balance" */
  balance_aggregate: Balance_Aggregate;
  /** fetch data from the table: "balance" using primary key columns */
  balance_by_pk?: Maybe<Balance>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>;
  /** fetch aggregated fields from the table: "community_pool" */
  community_pool_aggregate: Community_Pool_Aggregate;
  /** fetch data from the table: "community_pool" using primary key columns */
  community_pool_by_pk?: Maybe<Community_Pool>;
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>;
  /** fetch aggregated fields from the table: "distribution_params" */
  distribution_params_aggregate: Distribution_Params_Aggregate;
  /** fetch data from the table: "distribution_params" using primary key columns */
  distribution_params_by_pk?: Maybe<Distribution_Params>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch aggregated fields from the table: "double_sign_evidence" */
  double_sign_evidence_aggregate: Double_Sign_Evidence_Aggregate;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch aggregated fields from the table: "double_sign_vote" */
  double_sign_vote_aggregate: Double_Sign_Vote_Aggregate;
  /** fetch data from the table: "double_sign_vote" using primary key columns */
  double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>;
  /** fetch aggregated fields from the table: "fee_grant_allowance" */
  fee_grant_allowance_aggregate: Fee_Grant_Allowance_Aggregate;
  /** fetch data from the table: "fee_grant_allowance" using primary key columns */
  fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate;
  /** fetch data from the table: "genesis" using primary key columns */
  genesis_by_pk?: Maybe<Genesis>;
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>;
  /** fetch aggregated fields from the table: "gov_params" */
  gov_params_aggregate: Gov_Params_Aggregate;
  /** fetch data from the table: "gov_params" using primary key columns */
  gov_params_by_pk?: Maybe<Gov_Params>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate;
  /** fetch data from the table: "inflation" using primary key columns */
  inflation_by_pk?: Maybe<Inflation>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch data from the table: "message_105" */
  message_105: Array<Message_105>;
  /** fetch aggregated fields from the table: "message_105" */
  message_105_aggregate: Message_105_Aggregate;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message_type" */
  message_type: Array<Message_Type>;
  /** fetch aggregated fields from the table: "message_type" */
  message_type_aggregate: Message_Type_Aggregate;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_address" and query aggregates on result of table type "message" */
  messages_by_address_aggregate: Message_Aggregate;
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>;
  /** fetch aggregated fields from the table: "mint_params" */
  mint_params_aggregate: Mint_Params_Aggregate;
  /** fetch data from the table: "mint_params" using primary key columns */
  mint_params_by_pk?: Maybe<Mint_Params>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch aggregated fields from the table: "modules" */
  modules_aggregate: Modules_Aggregate;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table: "ms_event" */
  ms_event: Array<Ms_Event>;
  /** fetch aggregated fields from the table: "ms_event" */
  ms_event_aggregate: Ms_Event_Aggregate;
  /** fetch data from the table: "ms_locks" */
  ms_locks: Array<Ms_Locks>;
  /** fetch aggregated fields from the table: "ms_locks" */
  ms_locks_aggregate: Ms_Locks_Aggregate;
  /** fetch data from the table: "ms_locks" using primary key columns */
  ms_locks_by_pk?: Maybe<Ms_Locks>;
  /** fetch data from the table: "ms_unlocks" */
  ms_unlocks: Array<Ms_Unlocks>;
  /** fetch aggregated fields from the table: "ms_unlocks" */
  ms_unlocks_aggregate: Ms_Unlocks_Aggregate;
  /** fetch data from the table: "ms_unlocks" using primary key columns */
  ms_unlocks_by_pk?: Maybe<Ms_Unlocks>;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch aggregated fields from the table: "proposal_deposit" */
  proposal_deposit_aggregate: Proposal_Deposit_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch aggregated fields from the table: "proposal_tally_result" */
  proposal_tally_result_aggregate: Proposal_Tally_Result_Aggregate;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshot" using primary key columns */
  proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch aggregated fields from the table: "proposal_vote" */
  proposal_vote_aggregate: Proposal_Vote_Aggregate;
  /** fetch data from the table: "pruning" */
  pruning: Array<Pruning>;
  /** fetch aggregated fields from the table: "pruning" */
  pruning_aggregate: Pruning_Aggregate;
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>;
  /** fetch aggregated fields from the table: "slashing_params" */
  slashing_params_aggregate: Slashing_Params_Aggregate;
  /** fetch data from the table: "slashing_params" using primary key columns */
  slashing_params_by_pk?: Maybe<Slashing_Params>;
  /** fetch data from the table: "software_upgrade_plan" */
  software_upgrade_plan: Array<Software_Upgrade_Plan>;
  /** fetch aggregated fields from the table: "software_upgrade_plan" */
  software_upgrade_plan_aggregate: Software_Upgrade_Plan_Aggregate;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate;
  /** fetch data from the table: "staking_params" using primary key columns */
  staking_params_by_pk?: Maybe<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table: "staking_pool" using primary key columns */
  staking_pool_by_pk?: Maybe<Staking_Pool>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "supply" using primary key columns */
  supply_by_pk?: Maybe<Supply>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_bonded" */
  token_bonded: Array<Token_Bonded>;
  /** fetch aggregated fields from the table: "token_bonded" */
  token_bonded_aggregate: Token_Bonded_Aggregate;
  /** fetch data from the table: "token_bonded" using primary key columns */
  token_bonded_by_pk?: Maybe<Token_Bonded>;
  /** fetch data from the table: "token_holder" */
  token_holder: Array<Token_Holder>;
  /** fetch aggregated fields from the table: "token_holder" */
  token_holder_aggregate: Token_Holder_Aggregate;
  /** fetch data from the table: "token_holder" using primary key columns */
  token_holder_by_pk?: Maybe<Token_Holder>;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch aggregated fields from the table: "token_price_history" */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  /** fetch data from the table: "token_price_history" using primary key columns */
  token_price_history_by_pk?: Maybe<Token_Price_History>;
  /** fetch data from the table: "token_unbonding" */
  token_unbonding: Array<Token_Unbonding>;
  /** fetch aggregated fields from the table: "token_unbonding" */
  token_unbonding_aggregate: Token_Unbonding_Aggregate;
  /** fetch data from the table: "token_unbonding" using primary key columns */
  token_unbonding_by_pk?: Maybe<Token_Unbonding>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch data from the table: "transaction_105" */
  transaction_105: Array<Transaction_105>;
  /** fetch aggregated fields from the table: "transaction_105" */
  transaction_105_aggregate: Transaction_105_Aggregate;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table: "validator_denom" */
  validator_denom: Array<Validator_Denom>;
  /** fetch aggregated fields from the table: "validator_denom" */
  validator_denom_aggregate: Validator_Denom_Aggregate;
  /** fetch data from the table: "validator_denom" using primary key columns */
  validator_denom_by_pk?: Maybe<Validator_Denom>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch aggregated fields from the table: "validator_info" */
  validator_info_aggregate: Validator_Info_Aggregate;
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>;
  /** fetch aggregated fields from the table: "validator_signing_info" */
  validator_signing_info_aggregate: Validator_Signing_Info_Aggregate;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table: "validator_summary" */
  validator_summary: Array<Validator_Summary>;
  /** fetch aggregated fields from the table: "validator_summary" */
  validator_summary_aggregate: Validator_Summary_Aggregate;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>;
  /** fetch aggregated fields from the table: "vesting_account" */
  vesting_account_aggregate: Vesting_Account_Aggregate;
  /** fetch data from the table: "vesting_account" using primary key columns */
  vesting_account_by_pk?: Maybe<Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>;
  /** fetch aggregated fields from the table: "vesting_period" */
  vesting_period_aggregate: Vesting_Period_Aggregate;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootAccount_SummaryArgs = {
  distinct_on?: InputMaybe<Array<Account_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Summary_Order_By>>;
  where?: InputMaybe<Account_Summary_Bool_Exp>;
};


export type Query_RootAccount_Summary_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Summary_Order_By>>;
  where?: InputMaybe<Account_Summary_Bool_Exp>;
};


export type Query_RootAction_Account_BalanceArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_DelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Delegation_RewardArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Delegation_TotalArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Delegator_Withdraw_AddressArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_RedelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Unbonding_DelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Unbonding_Delegation_TotalArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Commission_AmountArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_Validator_DelegationsArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Redelegations_FromArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Unbonding_DelegationsArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_From_Genesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootBalanceArgs = {
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Query_RootBalance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Query_RootBalance_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Query_RootBlock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Query_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Query_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Query_RootCommunity_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Query_RootCommunity_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Query_RootDistribution_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Query_RootDistribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Query_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Query_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Query_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Query_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Query_RootFee_Grant_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Query_RootFee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Query_RootGenesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Query_RootGenesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Query_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Query_RootGov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Query_RootInflation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Query_RootInflation_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_105Args = {
  distinct_on?: InputMaybe<Array<Message_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_105_Order_By>>;
  where?: InputMaybe<Message_105_Bool_Exp>;
};


export type Query_RootMessage_105_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_105_Order_By>>;
  where?: InputMaybe<Message_105_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_TypeArgs = {
  distinct_on?: InputMaybe<Array<Message_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Type_Order_By>>;
  where?: InputMaybe<Message_Type_Bool_Exp>;
};


export type Query_RootMessage_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Type_Order_By>>;
  where?: InputMaybe<Message_Type_Bool_Exp>;
};


export type Query_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_Address_AggregateArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Query_RootMint_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Query_RootMint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Query_RootModules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Query_RootModules_By_PkArgs = {
  module_name: Scalars['String'];
};


export type Query_RootMs_EventArgs = {
  distinct_on?: InputMaybe<Array<Ms_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Event_Order_By>>;
  where?: InputMaybe<Ms_Event_Bool_Exp>;
};


export type Query_RootMs_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ms_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Event_Order_By>>;
  where?: InputMaybe<Ms_Event_Bool_Exp>;
};


export type Query_RootMs_LocksArgs = {
  distinct_on?: InputMaybe<Array<Ms_Locks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Locks_Order_By>>;
  where?: InputMaybe<Ms_Locks_Bool_Exp>;
};


export type Query_RootMs_Locks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ms_Locks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Locks_Order_By>>;
  where?: InputMaybe<Ms_Locks_Bool_Exp>;
};


export type Query_RootMs_Locks_By_PkArgs = {
  staker_addr: Scalars['String'];
  val_addr: Scalars['String'];
};


export type Query_RootMs_UnlocksArgs = {
  distinct_on?: InputMaybe<Array<Ms_Unlocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Unlocks_Order_By>>;
  where?: InputMaybe<Ms_Unlocks_Bool_Exp>;
};


export type Query_RootMs_Unlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ms_Unlocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Unlocks_Order_By>>;
  where?: InputMaybe<Ms_Unlocks_Bool_Exp>;
};


export type Query_RootMs_Unlocks_By_PkArgs = {
  staker_addr: Scalars['String'];
  val_addr: Scalars['String'];
};


export type Query_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Query_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Query_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Query_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Query_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Query_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Query_RootProposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Query_RootPruningArgs = {
  distinct_on?: InputMaybe<Array<Pruning_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pruning_Order_By>>;
  where?: InputMaybe<Pruning_Bool_Exp>;
};


export type Query_RootPruning_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pruning_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pruning_Order_By>>;
  where?: InputMaybe<Pruning_Bool_Exp>;
};


export type Query_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Query_RootSlashing_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Query_RootSlashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootSoftware_Upgrade_PlanArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Query_RootSoftware_Upgrade_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Query_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootStaking_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Query_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Query_RootSupply_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_BondedArgs = {
  distinct_on?: InputMaybe<Array<Token_Bonded_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Bonded_Order_By>>;
  where?: InputMaybe<Token_Bonded_Bool_Exp>;
};


export type Query_RootToken_Bonded_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Bonded_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Bonded_Order_By>>;
  where?: InputMaybe<Token_Bonded_Bool_Exp>;
};


export type Query_RootToken_Bonded_By_PkArgs = {
  denom: Scalars['String'];
};


export type Query_RootToken_HolderArgs = {
  distinct_on?: InputMaybe<Array<Token_Holder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Holder_Order_By>>;
  where?: InputMaybe<Token_Holder_Bool_Exp>;
};


export type Query_RootToken_Holder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Holder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Holder_Order_By>>;
  where?: InputMaybe<Token_Holder_Bool_Exp>;
};


export type Query_RootToken_Holder_By_PkArgs = {
  denom: Scalars['String'];
};


export type Query_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Query_RootToken_Price_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Query_RootToken_Price_History_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootToken_UnbondingArgs = {
  distinct_on?: InputMaybe<Array<Token_Unbonding_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unbonding_Order_By>>;
  where?: InputMaybe<Token_Unbonding_Bool_Exp>;
};


export type Query_RootToken_Unbonding_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unbonding_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unbonding_Order_By>>;
  where?: InputMaybe<Token_Unbonding_Bool_Exp>;
};


export type Query_RootToken_Unbonding_By_PkArgs = {
  denom: Scalars['String'];
};


export type Query_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Query_RootToken_Unit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_105Args = {
  distinct_on?: InputMaybe<Array<Transaction_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_105_Order_By>>;
  where?: InputMaybe<Transaction_105_Bool_Exp>;
};


export type Query_RootTransaction_105_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_105_Order_By>>;
  where?: InputMaybe<Transaction_105_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Query_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_DenomArgs = {
  distinct_on?: InputMaybe<Array<Validator_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Denom_Order_By>>;
  where?: InputMaybe<Validator_Denom_Bool_Exp>;
};


export type Query_RootValidator_Denom_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Denom_Order_By>>;
  where?: InputMaybe<Validator_Denom_Bool_Exp>;
};


export type Query_RootValidator_Denom_By_PkArgs = {
  val_addr: Scalars['String'];
};


export type Query_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Query_RootValidator_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Query_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Query_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Query_RootValidator_Signing_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Query_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_SummaryArgs = {
  distinct_on?: InputMaybe<Array<Validator_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Summary_Order_By>>;
  where?: InputMaybe<Validator_Summary_Bool_Exp>;
};


export type Query_RootValidator_Summary_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Summary_Order_By>>;
  where?: InputMaybe<Validator_Summary_Bool_Exp>;
};


export type Query_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Query_RootVesting_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Query_RootVesting_Account_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};


export type Query_RootVesting_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "slashing_params" */
export type Slashing_Params = {
  __typename?: 'slashing_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "slashing_params" */
export type Slashing_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "slashing_params" */
export type Slashing_Params_Aggregate = {
  __typename?: 'slashing_params_aggregate';
  aggregate?: Maybe<Slashing_Params_Aggregate_Fields>;
  nodes: Array<Slashing_Params>;
};

/** aggregate fields of "slashing_params" */
export type Slashing_Params_Aggregate_Fields = {
  __typename?: 'slashing_params_aggregate_fields';
  avg?: Maybe<Slashing_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Slashing_Params_Max_Fields>;
  min?: Maybe<Slashing_Params_Min_Fields>;
  stddev?: Maybe<Slashing_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Slashing_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Slashing_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Slashing_Params_Sum_Fields>;
  var_pop?: Maybe<Slashing_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Slashing_Params_Var_Samp_Fields>;
  variance?: Maybe<Slashing_Params_Variance_Fields>;
};


/** aggregate fields of "slashing_params" */
export type Slashing_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Slashing_Params_Append_Input = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Slashing_Params_Avg_Fields = {
  __typename?: 'slashing_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "slashing_params". All fields are combined with a logical 'AND'. */
export type Slashing_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Slashing_Params_Bool_Exp>>;
  _not?: InputMaybe<Slashing_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Slashing_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "slashing_params" */
export enum Slashing_Params_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  SlashingParamsPkey = 'slashing_params_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Slashing_Params_Delete_At_Path_Input = {
  params?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Slashing_Params_Delete_Elem_Input = {
  params?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Slashing_Params_Delete_Key_Input = {
  params?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "slashing_params" */
export type Slashing_Params_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "slashing_params" */
export type Slashing_Params_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Slashing_Params_Max_Fields = {
  __typename?: 'slashing_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Slashing_Params_Min_Fields = {
  __typename?: 'slashing_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "slashing_params" */
export type Slashing_Params_Mutation_Response = {
  __typename?: 'slashing_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slashing_Params>;
};

/** on_conflict condition type for table "slashing_params" */
export type Slashing_Params_On_Conflict = {
  constraint: Slashing_Params_Constraint;
  update_columns?: Array<Slashing_Params_Update_Column>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "slashing_params". */
export type Slashing_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** primary key columns input for table: slashing_params */
export type Slashing_Params_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Slashing_Params_Prepend_Input = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "slashing_params" */
export enum Slashing_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "slashing_params" */
export type Slashing_Params_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Slashing_Params_Stddev_Fields = {
  __typename?: 'slashing_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Slashing_Params_Stddev_Pop_Fields = {
  __typename?: 'slashing_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Slashing_Params_Stddev_Samp_Fields = {
  __typename?: 'slashing_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "slashing_params" */
export type Slashing_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Slashing_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Slashing_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Slashing_Params_Sum_Fields = {
  __typename?: 'slashing_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "slashing_params" */
export enum Slashing_Params_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

export type Slashing_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Slashing_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Slashing_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Slashing_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Slashing_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Slashing_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Slashing_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Slashing_Params_Set_Input>;
  /** filter the rows which have to be updated */
  where: Slashing_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Slashing_Params_Var_Pop_Fields = {
  __typename?: 'slashing_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Slashing_Params_Var_Samp_Fields = {
  __typename?: 'slashing_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Slashing_Params_Variance_Fields = {
  __typename?: 'slashing_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

/** columns and relationships of "software_upgrade_plan" */
export type Software_Upgrade_Plan = {
  __typename?: 'software_upgrade_plan';
  height: Scalars['bigint'];
  info: Scalars['String'];
  plan_name: Scalars['String'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height: Scalars['bigint'];
};

/** aggregated selection of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate = {
  __typename?: 'software_upgrade_plan_aggregate';
  aggregate?: Maybe<Software_Upgrade_Plan_Aggregate_Fields>;
  nodes: Array<Software_Upgrade_Plan>;
};

/** aggregate fields of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate_Fields = {
  __typename?: 'software_upgrade_plan_aggregate_fields';
  avg?: Maybe<Software_Upgrade_Plan_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Software_Upgrade_Plan_Max_Fields>;
  min?: Maybe<Software_Upgrade_Plan_Min_Fields>;
  stddev?: Maybe<Software_Upgrade_Plan_Stddev_Fields>;
  stddev_pop?: Maybe<Software_Upgrade_Plan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Software_Upgrade_Plan_Stddev_Samp_Fields>;
  sum?: Maybe<Software_Upgrade_Plan_Sum_Fields>;
  var_pop?: Maybe<Software_Upgrade_Plan_Var_Pop_Fields>;
  var_samp?: Maybe<Software_Upgrade_Plan_Var_Samp_Fields>;
  variance?: Maybe<Software_Upgrade_Plan_Variance_Fields>;
};


/** aggregate fields of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Software_Upgrade_Plan_Avg_Fields = {
  __typename?: 'software_upgrade_plan_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "software_upgrade_plan". All fields are combined with a logical 'AND'. */
export type Software_Upgrade_Plan_Bool_Exp = {
  _and?: InputMaybe<Array<Software_Upgrade_Plan_Bool_Exp>>;
  _not?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
  _or?: InputMaybe<Array<Software_Upgrade_Plan_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  info?: InputMaybe<String_Comparison_Exp>;
  plan_name?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  upgrade_height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "software_upgrade_plan" */
export enum Software_Upgrade_Plan_Constraint {
  /** unique or primary key constraint on columns "proposal_id" */
  SoftwareUpgradePlanProposalIdKey = 'software_upgrade_plan_proposal_id_key'
}

/** input type for incrementing numeric columns in table "software_upgrade_plan" */
export type Software_Upgrade_Plan_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  upgrade_height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "software_upgrade_plan" */
export type Software_Upgrade_Plan_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  info?: InputMaybe<Scalars['String']>;
  plan_name?: InputMaybe<Scalars['String']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  upgrade_height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Software_Upgrade_Plan_Max_Fields = {
  __typename?: 'software_upgrade_plan_max_fields';
  height?: Maybe<Scalars['bigint']>;
  info?: Maybe<Scalars['String']>;
  plan_name?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Software_Upgrade_Plan_Min_Fields = {
  __typename?: 'software_upgrade_plan_min_fields';
  height?: Maybe<Scalars['bigint']>;
  info?: Maybe<Scalars['String']>;
  plan_name?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "software_upgrade_plan" */
export type Software_Upgrade_Plan_Mutation_Response = {
  __typename?: 'software_upgrade_plan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Software_Upgrade_Plan>;
};

/** on_conflict condition type for table "software_upgrade_plan" */
export type Software_Upgrade_Plan_On_Conflict = {
  constraint: Software_Upgrade_Plan_Constraint;
  update_columns?: Array<Software_Upgrade_Plan_Update_Column>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};

/** Ordering options when selecting data from "software_upgrade_plan". */
export type Software_Upgrade_Plan_Order_By = {
  height?: InputMaybe<Order_By>;
  info?: InputMaybe<Order_By>;
  plan_name?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  upgrade_height?: InputMaybe<Order_By>;
};

/** select columns of table "software_upgrade_plan" */
export enum Software_Upgrade_Plan_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Info = 'info',
  /** column name */
  PlanName = 'plan_name',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  UpgradeHeight = 'upgrade_height'
}

/** input type for updating data in table "software_upgrade_plan" */
export type Software_Upgrade_Plan_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  info?: InputMaybe<Scalars['String']>;
  plan_name?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  upgrade_height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Software_Upgrade_Plan_Stddev_Fields = {
  __typename?: 'software_upgrade_plan_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Software_Upgrade_Plan_Stddev_Pop_Fields = {
  __typename?: 'software_upgrade_plan_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Software_Upgrade_Plan_Stddev_Samp_Fields = {
  __typename?: 'software_upgrade_plan_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "software_upgrade_plan" */
export type Software_Upgrade_Plan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Software_Upgrade_Plan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Software_Upgrade_Plan_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  info?: InputMaybe<Scalars['String']>;
  plan_name?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  upgrade_height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Software_Upgrade_Plan_Sum_Fields = {
  __typename?: 'software_upgrade_plan_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "software_upgrade_plan" */
export enum Software_Upgrade_Plan_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Info = 'info',
  /** column name */
  PlanName = 'plan_name',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  UpgradeHeight = 'upgrade_height'
}

export type Software_Upgrade_Plan_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Software_Upgrade_Plan_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Software_Upgrade_Plan_Set_Input>;
  /** filter the rows which have to be updated */
  where: Software_Upgrade_Plan_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Software_Upgrade_Plan_Var_Pop_Fields = {
  __typename?: 'software_upgrade_plan_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Software_Upgrade_Plan_Var_Samp_Fields = {
  __typename?: 'software_upgrade_plan_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Software_Upgrade_Plan_Variance_Fields = {
  __typename?: 'software_upgrade_plan_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "staking_params" */
export type Staking_Params = {
  __typename?: 'staking_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "staking_params" */
export type Staking_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "staking_params" */
export type Staking_Params_Aggregate = {
  __typename?: 'staking_params_aggregate';
  aggregate?: Maybe<Staking_Params_Aggregate_Fields>;
  nodes: Array<Staking_Params>;
};

/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_Fields = {
  __typename?: 'staking_params_aggregate_fields';
  avg?: Maybe<Staking_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Staking_Params_Max_Fields>;
  min?: Maybe<Staking_Params_Min_Fields>;
  stddev?: Maybe<Staking_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Params_Sum_Fields>;
  var_pop?: Maybe<Staking_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Params_Var_Samp_Fields>;
  variance?: Maybe<Staking_Params_Variance_Fields>;
};


/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Staking_Params_Append_Input = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Staking_Params_Avg_Fields = {
  __typename?: 'staking_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "staking_params". All fields are combined with a logical 'AND'. */
export type Staking_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  _not?: InputMaybe<Staking_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "staking_params" */
export enum Staking_Params_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  StakingParamsPkey = 'staking_params_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Staking_Params_Delete_At_Path_Input = {
  params?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Staking_Params_Delete_Elem_Input = {
  params?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Staking_Params_Delete_Key_Input = {
  params?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "staking_params" */
export type Staking_Params_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "staking_params" */
export type Staking_Params_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Staking_Params_Max_Fields = {
  __typename?: 'staking_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Staking_Params_Min_Fields = {
  __typename?: 'staking_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "staking_params" */
export type Staking_Params_Mutation_Response = {
  __typename?: 'staking_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Staking_Params>;
};

/** on_conflict condition type for table "staking_params" */
export type Staking_Params_On_Conflict = {
  constraint: Staking_Params_Constraint;
  update_columns?: Array<Staking_Params_Update_Column>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "staking_params". */
export type Staking_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** primary key columns input for table: staking_params */
export type Staking_Params_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Staking_Params_Prepend_Input = {
  params?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "staking_params" */
export enum Staking_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "staking_params" */
export type Staking_Params_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Staking_Params_Stddev_Fields = {
  __typename?: 'staking_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Params_Stddev_Pop_Fields = {
  __typename?: 'staking_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Params_Stddev_Samp_Fields = {
  __typename?: 'staking_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "staking_params" */
export type Staking_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Staking_Params_Sum_Fields = {
  __typename?: 'staking_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "staking_params" */
export enum Staking_Params_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

export type Staking_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Staking_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Staking_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Staking_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Staking_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staking_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Staking_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staking_Params_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staking_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staking_Params_Var_Pop_Fields = {
  __typename?: 'staking_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Staking_Params_Var_Samp_Fields = {
  __typename?: 'staking_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Staking_Params_Variance_Fields = {
  __typename?: 'staking_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "staking_pool" */
export type Staking_Pool = {
  __typename?: 'staking_pool';
  bonded_tokens: Scalars['String'];
  height: Scalars['bigint'];
  not_bonded_tokens: Scalars['String'];
  one_row_id: Scalars['Boolean'];
  staked_not_bonded_tokens: Scalars['String'];
  unbonding_tokens: Scalars['String'];
};

/** aggregated selection of "staking_pool" */
export type Staking_Pool_Aggregate = {
  __typename?: 'staking_pool_aggregate';
  aggregate?: Maybe<Staking_Pool_Aggregate_Fields>;
  nodes: Array<Staking_Pool>;
};

/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_Fields = {
  __typename?: 'staking_pool_aggregate_fields';
  avg?: Maybe<Staking_Pool_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Staking_Pool_Max_Fields>;
  min?: Maybe<Staking_Pool_Min_Fields>;
  stddev?: Maybe<Staking_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Pool_Sum_Fields>;
  var_pop?: Maybe<Staking_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Pool_Var_Samp_Fields>;
  variance?: Maybe<Staking_Pool_Variance_Fields>;
};


/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Staking_Pool_Avg_Fields = {
  __typename?: 'staking_pool_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "staking_pool". All fields are combined with a logical 'AND'. */
export type Staking_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  _not?: InputMaybe<Staking_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  staked_not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  unbonding_tokens?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "staking_pool" */
export enum Staking_Pool_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  StakingPoolPkey = 'staking_pool_pkey'
}

/** input type for incrementing numeric columns in table "staking_pool" */
export type Staking_Pool_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "staking_pool" */
export type Staking_Pool_Insert_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  staked_not_bonded_tokens?: InputMaybe<Scalars['String']>;
  unbonding_tokens?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Staking_Pool_Max_Fields = {
  __typename?: 'staking_pool_max_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  staked_not_bonded_tokens?: Maybe<Scalars['String']>;
  unbonding_tokens?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Staking_Pool_Min_Fields = {
  __typename?: 'staking_pool_min_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  staked_not_bonded_tokens?: Maybe<Scalars['String']>;
  unbonding_tokens?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "staking_pool" */
export type Staking_Pool_Mutation_Response = {
  __typename?: 'staking_pool_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Staking_Pool>;
};

/** on_conflict condition type for table "staking_pool" */
export type Staking_Pool_On_Conflict = {
  constraint: Staking_Pool_Constraint;
  update_columns?: Array<Staking_Pool_Update_Column>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};

/** Ordering options when selecting data from "staking_pool". */
export type Staking_Pool_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  staked_not_bonded_tokens?: InputMaybe<Order_By>;
  unbonding_tokens?: InputMaybe<Order_By>;
};

/** primary key columns input for table: staking_pool */
export type Staking_Pool_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "staking_pool" */
export enum Staking_Pool_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  StakedNotBondedTokens = 'staked_not_bonded_tokens',
  /** column name */
  UnbondingTokens = 'unbonding_tokens'
}

/** input type for updating data in table "staking_pool" */
export type Staking_Pool_Set_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  staked_not_bonded_tokens?: InputMaybe<Scalars['String']>;
  unbonding_tokens?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Staking_Pool_Stddev_Fields = {
  __typename?: 'staking_pool_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Pool_Stddev_Pop_Fields = {
  __typename?: 'staking_pool_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Pool_Stddev_Samp_Fields = {
  __typename?: 'staking_pool_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "staking_pool" */
export type Staking_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Pool_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  staked_not_bonded_tokens?: InputMaybe<Scalars['String']>;
  unbonding_tokens?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Staking_Pool_Sum_Fields = {
  __typename?: 'staking_pool_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "staking_pool" */
export enum Staking_Pool_Update_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  StakedNotBondedTokens = 'staked_not_bonded_tokens',
  /** column name */
  UnbondingTokens = 'unbonding_tokens'
}

export type Staking_Pool_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staking_Pool_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staking_Pool_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staking_Pool_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staking_Pool_Var_Pop_Fields = {
  __typename?: 'staking_pool_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Staking_Pool_Var_Samp_Fields = {
  __typename?: 'staking_pool_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Staking_Pool_Variance_Fields = {
  __typename?: 'staking_pool_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>;
  /** fetch data from the table: "account_summary" */
  account_summary: Array<Account_Summary>;
  /** fetch aggregated fields from the table: "account_summary" */
  account_summary_aggregate: Account_Summary_Aggregate;
  /** fetch data from the table in a streaming manner: "account_summary" */
  account_summary_stream: Array<Account_Summary>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate;
  /** fetch data from the table: "average_block_time_from_genesis" using primary key columns */
  average_block_time_from_genesis_by_pk?: Maybe<Average_Block_Time_From_Genesis>;
  /** fetch data from the table in a streaming manner: "average_block_time_from_genesis" */
  average_block_time_from_genesis_stream: Array<Average_Block_Time_From_Genesis>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" using primary key columns */
  average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_day" */
  average_block_time_per_day_stream: Array<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" using primary key columns */
  average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_hour" */
  average_block_time_per_hour_stream: Array<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" using primary key columns */
  average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_minute" */
  average_block_time_per_minute_stream: Array<Average_Block_Time_Per_Minute>;
  /** fetch data from the table: "balance" */
  balance: Array<Balance>;
  /** fetch aggregated fields from the table: "balance" */
  balance_aggregate: Balance_Aggregate;
  /** fetch data from the table: "balance" using primary key columns */
  balance_by_pk?: Maybe<Balance>;
  /** fetch data from the table in a streaming manner: "balance" */
  balance_stream: Array<Balance>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table in a streaming manner: "block" */
  block_stream: Array<Block>;
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>;
  /** fetch aggregated fields from the table: "community_pool" */
  community_pool_aggregate: Community_Pool_Aggregate;
  /** fetch data from the table: "community_pool" using primary key columns */
  community_pool_by_pk?: Maybe<Community_Pool>;
  /** fetch data from the table in a streaming manner: "community_pool" */
  community_pool_stream: Array<Community_Pool>;
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>;
  /** fetch aggregated fields from the table: "distribution_params" */
  distribution_params_aggregate: Distribution_Params_Aggregate;
  /** fetch data from the table: "distribution_params" using primary key columns */
  distribution_params_by_pk?: Maybe<Distribution_Params>;
  /** fetch data from the table in a streaming manner: "distribution_params" */
  distribution_params_stream: Array<Distribution_Params>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch aggregated fields from the table: "double_sign_evidence" */
  double_sign_evidence_aggregate: Double_Sign_Evidence_Aggregate;
  /** fetch data from the table in a streaming manner: "double_sign_evidence" */
  double_sign_evidence_stream: Array<Double_Sign_Evidence>;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch aggregated fields from the table: "double_sign_vote" */
  double_sign_vote_aggregate: Double_Sign_Vote_Aggregate;
  /** fetch data from the table: "double_sign_vote" using primary key columns */
  double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** fetch data from the table in a streaming manner: "double_sign_vote" */
  double_sign_vote_stream: Array<Double_Sign_Vote>;
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>;
  /** fetch aggregated fields from the table: "fee_grant_allowance" */
  fee_grant_allowance_aggregate: Fee_Grant_Allowance_Aggregate;
  /** fetch data from the table: "fee_grant_allowance" using primary key columns */
  fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>;
  /** fetch data from the table in a streaming manner: "fee_grant_allowance" */
  fee_grant_allowance_stream: Array<Fee_Grant_Allowance>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate;
  /** fetch data from the table: "genesis" using primary key columns */
  genesis_by_pk?: Maybe<Genesis>;
  /** fetch data from the table in a streaming manner: "genesis" */
  genesis_stream: Array<Genesis>;
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>;
  /** fetch aggregated fields from the table: "gov_params" */
  gov_params_aggregate: Gov_Params_Aggregate;
  /** fetch data from the table: "gov_params" using primary key columns */
  gov_params_by_pk?: Maybe<Gov_Params>;
  /** fetch data from the table in a streaming manner: "gov_params" */
  gov_params_stream: Array<Gov_Params>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate;
  /** fetch data from the table: "inflation" using primary key columns */
  inflation_by_pk?: Maybe<Inflation>;
  /** fetch data from the table in a streaming manner: "inflation" */
  inflation_stream: Array<Inflation>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch data from the table: "message_105" */
  message_105: Array<Message_105>;
  /** fetch aggregated fields from the table: "message_105" */
  message_105_aggregate: Message_105_Aggregate;
  /** fetch data from the table in a streaming manner: "message_105" */
  message_105_stream: Array<Message_105>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table in a streaming manner: "message" */
  message_stream: Array<Message>;
  /** fetch data from the table: "message_type" */
  message_type: Array<Message_Type>;
  /** fetch aggregated fields from the table: "message_type" */
  message_type_aggregate: Message_Type_Aggregate;
  /** fetch data from the table in a streaming manner: "message_type" */
  message_type_stream: Array<Message_Type>;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_address" and query aggregates on result of table type "message" */
  messages_by_address_aggregate: Message_Aggregate;
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>;
  /** fetch aggregated fields from the table: "mint_params" */
  mint_params_aggregate: Mint_Params_Aggregate;
  /** fetch data from the table: "mint_params" using primary key columns */
  mint_params_by_pk?: Maybe<Mint_Params>;
  /** fetch data from the table in a streaming manner: "mint_params" */
  mint_params_stream: Array<Mint_Params>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch aggregated fields from the table: "modules" */
  modules_aggregate: Modules_Aggregate;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table in a streaming manner: "modules" */
  modules_stream: Array<Modules>;
  /** fetch data from the table: "ms_event" */
  ms_event: Array<Ms_Event>;
  /** fetch aggregated fields from the table: "ms_event" */
  ms_event_aggregate: Ms_Event_Aggregate;
  /** fetch data from the table in a streaming manner: "ms_event" */
  ms_event_stream: Array<Ms_Event>;
  /** fetch data from the table: "ms_locks" */
  ms_locks: Array<Ms_Locks>;
  /** fetch aggregated fields from the table: "ms_locks" */
  ms_locks_aggregate: Ms_Locks_Aggregate;
  /** fetch data from the table: "ms_locks" using primary key columns */
  ms_locks_by_pk?: Maybe<Ms_Locks>;
  /** fetch data from the table in a streaming manner: "ms_locks" */
  ms_locks_stream: Array<Ms_Locks>;
  /** fetch data from the table: "ms_unlocks" */
  ms_unlocks: Array<Ms_Unlocks>;
  /** fetch aggregated fields from the table: "ms_unlocks" */
  ms_unlocks_aggregate: Ms_Unlocks_Aggregate;
  /** fetch data from the table: "ms_unlocks" using primary key columns */
  ms_unlocks_by_pk?: Maybe<Ms_Unlocks>;
  /** fetch data from the table in a streaming manner: "ms_unlocks" */
  ms_unlocks_stream: Array<Ms_Unlocks>;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table in a streaming manner: "pre_commit" */
  pre_commit_stream: Array<Pre_Commit>;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch aggregated fields from the table: "proposal_deposit" */
  proposal_deposit_aggregate: Proposal_Deposit_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_deposit" */
  proposal_deposit_stream: Array<Proposal_Deposit>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_stream: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal" */
  proposal_stream: Array<Proposal>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch aggregated fields from the table: "proposal_tally_result" */
  proposal_tally_result_aggregate: Proposal_Tally_Result_Aggregate;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** fetch data from the table in a streaming manner: "proposal_tally_result" */
  proposal_tally_result_stream: Array<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshot" using primary key columns */
  proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_stream: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch aggregated fields from the table: "proposal_vote" */
  proposal_vote_aggregate: Proposal_Vote_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_vote" */
  proposal_vote_stream: Array<Proposal_Vote>;
  /** fetch data from the table: "pruning" */
  pruning: Array<Pruning>;
  /** fetch aggregated fields from the table: "pruning" */
  pruning_aggregate: Pruning_Aggregate;
  /** fetch data from the table in a streaming manner: "pruning" */
  pruning_stream: Array<Pruning>;
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>;
  /** fetch aggregated fields from the table: "slashing_params" */
  slashing_params_aggregate: Slashing_Params_Aggregate;
  /** fetch data from the table: "slashing_params" using primary key columns */
  slashing_params_by_pk?: Maybe<Slashing_Params>;
  /** fetch data from the table in a streaming manner: "slashing_params" */
  slashing_params_stream: Array<Slashing_Params>;
  /** fetch data from the table: "software_upgrade_plan" */
  software_upgrade_plan: Array<Software_Upgrade_Plan>;
  /** fetch aggregated fields from the table: "software_upgrade_plan" */
  software_upgrade_plan_aggregate: Software_Upgrade_Plan_Aggregate;
  /** fetch data from the table in a streaming manner: "software_upgrade_plan" */
  software_upgrade_plan_stream: Array<Software_Upgrade_Plan>;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate;
  /** fetch data from the table: "staking_params" using primary key columns */
  staking_params_by_pk?: Maybe<Staking_Params>;
  /** fetch data from the table in a streaming manner: "staking_params" */
  staking_params_stream: Array<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table: "staking_pool" using primary key columns */
  staking_pool_by_pk?: Maybe<Staking_Pool>;
  /** fetch data from the table in a streaming manner: "staking_pool" */
  staking_pool_stream: Array<Staking_Pool>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "supply" using primary key columns */
  supply_by_pk?: Maybe<Supply>;
  /** fetch data from the table in a streaming manner: "supply" */
  supply_stream: Array<Supply>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_bonded" */
  token_bonded: Array<Token_Bonded>;
  /** fetch aggregated fields from the table: "token_bonded" */
  token_bonded_aggregate: Token_Bonded_Aggregate;
  /** fetch data from the table: "token_bonded" using primary key columns */
  token_bonded_by_pk?: Maybe<Token_Bonded>;
  /** fetch data from the table in a streaming manner: "token_bonded" */
  token_bonded_stream: Array<Token_Bonded>;
  /** fetch data from the table: "token_holder" */
  token_holder: Array<Token_Holder>;
  /** fetch aggregated fields from the table: "token_holder" */
  token_holder_aggregate: Token_Holder_Aggregate;
  /** fetch data from the table: "token_holder" using primary key columns */
  token_holder_by_pk?: Maybe<Token_Holder>;
  /** fetch data from the table in a streaming manner: "token_holder" */
  token_holder_stream: Array<Token_Holder>;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch aggregated fields from the table: "token_price_history" */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  /** fetch data from the table: "token_price_history" using primary key columns */
  token_price_history_by_pk?: Maybe<Token_Price_History>;
  /** fetch data from the table in a streaming manner: "token_price_history" */
  token_price_history_stream: Array<Token_Price_History>;
  /** fetch data from the table in a streaming manner: "token_price" */
  token_price_stream: Array<Token_Price>;
  /** fetch data from the table in a streaming manner: "token" */
  token_stream: Array<Token>;
  /** fetch data from the table: "token_unbonding" */
  token_unbonding: Array<Token_Unbonding>;
  /** fetch aggregated fields from the table: "token_unbonding" */
  token_unbonding_aggregate: Token_Unbonding_Aggregate;
  /** fetch data from the table: "token_unbonding" using primary key columns */
  token_unbonding_by_pk?: Maybe<Token_Unbonding>;
  /** fetch data from the table in a streaming manner: "token_unbonding" */
  token_unbonding_stream: Array<Token_Unbonding>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table in a streaming manner: "token_unit" */
  token_unit_stream: Array<Token_Unit>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch data from the table: "transaction_105" */
  transaction_105: Array<Transaction_105>;
  /** fetch aggregated fields from the table: "transaction_105" */
  transaction_105_aggregate: Transaction_105_Aggregate;
  /** fetch data from the table in a streaming manner: "transaction_105" */
  transaction_105_stream: Array<Transaction_105>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table in a streaming manner: "validator_commission" */
  validator_commission_stream: Array<Validator_Commission>;
  /** fetch data from the table: "validator_denom" */
  validator_denom: Array<Validator_Denom>;
  /** fetch aggregated fields from the table: "validator_denom" */
  validator_denom_aggregate: Validator_Denom_Aggregate;
  /** fetch data from the table: "validator_denom" using primary key columns */
  validator_denom_by_pk?: Maybe<Validator_Denom>;
  /** fetch data from the table in a streaming manner: "validator_denom" */
  validator_denom_stream: Array<Validator_Denom>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table in a streaming manner: "validator_description" */
  validator_description_stream: Array<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch aggregated fields from the table: "validator_info" */
  validator_info_aggregate: Validator_Info_Aggregate;
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>;
  /** fetch data from the table in a streaming manner: "validator_info" */
  validator_info_stream: Array<Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>;
  /** fetch aggregated fields from the table: "validator_signing_info" */
  validator_signing_info_aggregate: Validator_Signing_Info_Aggregate;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** fetch data from the table in a streaming manner: "validator_signing_info" */
  validator_signing_info_stream: Array<Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator_status" */
  validator_status_stream: Array<Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator" */
  validator_stream: Array<Validator>;
  /** fetch data from the table: "validator_summary" */
  validator_summary: Array<Validator_Summary>;
  /** fetch aggregated fields from the table: "validator_summary" */
  validator_summary_aggregate: Validator_Summary_Aggregate;
  /** fetch data from the table in a streaming manner: "validator_summary" */
  validator_summary_stream: Array<Validator_Summary>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** fetch data from the table in a streaming manner: "validator_voting_power" */
  validator_voting_power_stream: Array<Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>;
  /** fetch aggregated fields from the table: "vesting_account" */
  vesting_account_aggregate: Vesting_Account_Aggregate;
  /** fetch data from the table: "vesting_account" using primary key columns */
  vesting_account_by_pk?: Maybe<Vesting_Account>;
  /** fetch data from the table in a streaming manner: "vesting_account" */
  vesting_account_stream: Array<Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>;
  /** fetch aggregated fields from the table: "vesting_period" */
  vesting_period_aggregate: Vesting_Period_Aggregate;
  /** fetch data from the table in a streaming manner: "vesting_period" */
  vesting_period_stream: Array<Vesting_Period>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_SummaryArgs = {
  distinct_on?: InputMaybe<Array<Account_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Summary_Order_By>>;
  where?: InputMaybe<Account_Summary_Bool_Exp>;
};


export type Subscription_RootAccount_Summary_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Summary_Order_By>>;
  where?: InputMaybe<Account_Summary_Bool_Exp>;
};


export type Subscription_RootAccount_Summary_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Account_Summary_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Summary_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_Genesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootAverage_Block_Time_From_Genesis_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Average_Block_Time_From_Genesis_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootAverage_Block_Time_Per_Day_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Day_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootAverage_Block_Time_Per_Hour_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Hour_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootAverage_Block_Time_Per_Minute_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Minute_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootBalanceArgs = {
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Subscription_RootBalance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Balance_Order_By>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Subscription_RootBalance_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootBalance_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Balance_Stream_Cursor_Input>>;
  where?: InputMaybe<Balance_Bool_Exp>;
};


export type Subscription_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Subscription_RootBlock_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Block_Stream_Cursor_Input>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootCommunity_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootCommunity_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootCommunity_Pool_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Community_Pool_Stream_Cursor_Input>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDistribution_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDistribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootDistribution_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Distribution_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Evidence_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Double_Sign_Evidence_Stream_Cursor_Input>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootDouble_Sign_Vote_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Double_Sign_Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootFee_Grant_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootFee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFee_Grant_Allowance_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Fee_Grant_Allowance_Stream_Cursor_Input>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGenesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGenesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootGenesis_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Genesis_Stream_Cursor_Input>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootGov_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Gov_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Subscription_RootInflation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Subscription_RootInflation_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootInflation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Inflation_Stream_Cursor_Input>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_105Args = {
  distinct_on?: InputMaybe<Array<Message_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_105_Order_By>>;
  where?: InputMaybe<Message_105_Bool_Exp>;
};


export type Subscription_RootMessage_105_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_105_Order_By>>;
  where?: InputMaybe<Message_105_Bool_Exp>;
};


export type Subscription_RootMessage_105_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Message_105_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_105_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_TypeArgs = {
  distinct_on?: InputMaybe<Array<Message_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Type_Order_By>>;
  where?: InputMaybe<Message_Type_Bool_Exp>;
};


export type Subscription_RootMessage_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Type_Order_By>>;
  where?: InputMaybe<Message_Type_Bool_Exp>;
};


export type Subscription_RootMessage_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Message_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_Type_Bool_Exp>;
};


export type Subscription_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_Address_AggregateArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootMint_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootMint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootMint_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Mint_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootModules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootModules_By_PkArgs = {
  module_name: Scalars['String'];
};


export type Subscription_RootModules_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Modules_Stream_Cursor_Input>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootMs_EventArgs = {
  distinct_on?: InputMaybe<Array<Ms_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Event_Order_By>>;
  where?: InputMaybe<Ms_Event_Bool_Exp>;
};


export type Subscription_RootMs_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ms_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Event_Order_By>>;
  where?: InputMaybe<Ms_Event_Bool_Exp>;
};


export type Subscription_RootMs_Event_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Ms_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Ms_Event_Bool_Exp>;
};


export type Subscription_RootMs_LocksArgs = {
  distinct_on?: InputMaybe<Array<Ms_Locks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Locks_Order_By>>;
  where?: InputMaybe<Ms_Locks_Bool_Exp>;
};


export type Subscription_RootMs_Locks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ms_Locks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Locks_Order_By>>;
  where?: InputMaybe<Ms_Locks_Bool_Exp>;
};


export type Subscription_RootMs_Locks_By_PkArgs = {
  staker_addr: Scalars['String'];
  val_addr: Scalars['String'];
};


export type Subscription_RootMs_Locks_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Ms_Locks_Stream_Cursor_Input>>;
  where?: InputMaybe<Ms_Locks_Bool_Exp>;
};


export type Subscription_RootMs_UnlocksArgs = {
  distinct_on?: InputMaybe<Array<Ms_Unlocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Unlocks_Order_By>>;
  where?: InputMaybe<Ms_Unlocks_Bool_Exp>;
};


export type Subscription_RootMs_Unlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ms_Unlocks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ms_Unlocks_Order_By>>;
  where?: InputMaybe<Ms_Unlocks_Bool_Exp>;
};


export type Subscription_RootMs_Unlocks_By_PkArgs = {
  staker_addr: Scalars['String'];
  val_addr: Scalars['String'];
};


export type Subscription_RootMs_Unlocks_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Ms_Unlocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Ms_Unlocks_Bool_Exp>;
};


export type Subscription_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootPre_Commit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pre_Commit_Stream_Cursor_Input>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Deposit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Deposit_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Subscription_RootProposal_Tally_Result_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Tally_Result_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProposal_Validator_Status_Snapshot_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Validator_Status_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootPruningArgs = {
  distinct_on?: InputMaybe<Array<Pruning_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pruning_Order_By>>;
  where?: InputMaybe<Pruning_Bool_Exp>;
};


export type Subscription_RootPruning_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pruning_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pruning_Order_By>>;
  where?: InputMaybe<Pruning_Bool_Exp>;
};


export type Subscription_RootPruning_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pruning_Stream_Cursor_Input>>;
  where?: InputMaybe<Pruning_Bool_Exp>;
};


export type Subscription_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSlashing_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSlashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootSlashing_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Slashing_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSoftware_Upgrade_PlanArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Subscription_RootSoftware_Upgrade_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Subscription_RootSoftware_Upgrade_Plan_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Software_Upgrade_Plan_Stream_Cursor_Input>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Subscription_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootStaking_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Staking_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootStaking_Pool_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Staking_Pool_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootSupply_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Supply_Stream_Cursor_Input>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_BondedArgs = {
  distinct_on?: InputMaybe<Array<Token_Bonded_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Bonded_Order_By>>;
  where?: InputMaybe<Token_Bonded_Bool_Exp>;
};


export type Subscription_RootToken_Bonded_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Bonded_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Bonded_Order_By>>;
  where?: InputMaybe<Token_Bonded_Bool_Exp>;
};


export type Subscription_RootToken_Bonded_By_PkArgs = {
  denom: Scalars['String'];
};


export type Subscription_RootToken_Bonded_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Bonded_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Bonded_Bool_Exp>;
};


export type Subscription_RootToken_HolderArgs = {
  distinct_on?: InputMaybe<Array<Token_Holder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Holder_Order_By>>;
  where?: InputMaybe<Token_Holder_Bool_Exp>;
};


export type Subscription_RootToken_Holder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Holder_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Holder_Order_By>>;
  where?: InputMaybe<Token_Holder_Bool_Exp>;
};


export type Subscription_RootToken_Holder_By_PkArgs = {
  denom: Scalars['String'];
};


export type Subscription_RootToken_Holder_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Holder_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Holder_Bool_Exp>;
};


export type Subscription_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_History_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootToken_Price_History_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Price_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Price_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_UnbondingArgs = {
  distinct_on?: InputMaybe<Array<Token_Unbonding_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unbonding_Order_By>>;
  where?: InputMaybe<Token_Unbonding_Bool_Exp>;
};


export type Subscription_RootToken_Unbonding_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unbonding_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unbonding_Order_By>>;
  where?: InputMaybe<Token_Unbonding_Bool_Exp>;
};


export type Subscription_RootToken_Unbonding_By_PkArgs = {
  denom: Scalars['String'];
};


export type Subscription_RootToken_Unbonding_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Unbonding_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Unbonding_Bool_Exp>;
};


export type Subscription_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootToken_Unit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootToken_Unit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Unit_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_105Args = {
  distinct_on?: InputMaybe<Array<Transaction_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_105_Order_By>>;
  where?: InputMaybe<Transaction_105_Bool_Exp>;
};


export type Subscription_RootTransaction_105_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_105_Order_By>>;
  where?: InputMaybe<Transaction_105_Bool_Exp>;
};


export type Subscription_RootTransaction_105_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transaction_105_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_105_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Subscription_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Commission_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Commission_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_DenomArgs = {
  distinct_on?: InputMaybe<Array<Validator_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Denom_Order_By>>;
  where?: InputMaybe<Validator_Denom_Bool_Exp>;
};


export type Subscription_RootValidator_Denom_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Denom_Order_By>>;
  where?: InputMaybe<Validator_Denom_Bool_Exp>;
};


export type Subscription_RootValidator_Denom_By_PkArgs = {
  val_addr: Scalars['String'];
};


export type Subscription_RootValidator_Denom_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Denom_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Denom_Bool_Exp>;
};


export type Subscription_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Description_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Description_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Subscription_RootValidator_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Signing_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Signing_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Status_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_SummaryArgs = {
  distinct_on?: InputMaybe<Array<Validator_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Summary_Order_By>>;
  where?: InputMaybe<Validator_Summary_Bool_Exp>;
};


export type Subscription_RootValidator_Summary_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Summary_Order_By>>;
  where?: InputMaybe<Validator_Summary_Bool_Exp>;
};


export type Subscription_RootValidator_Summary_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Summary_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Summary_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Voting_Power_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Voting_Power_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_Account_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVesting_Account_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vesting_Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};


export type Subscription_RootVesting_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};


export type Subscription_RootVesting_Period_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vesting_Period_Stream_Cursor_Input>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply';
  coins: Array<Scalars['coin']>;
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "supply" */
export type Supply_Aggregate = {
  __typename?: 'supply_aggregate';
  aggregate?: Maybe<Supply_Aggregate_Fields>;
  nodes: Array<Supply>;
};

/** aggregate fields of "supply" */
export type Supply_Aggregate_Fields = {
  __typename?: 'supply_aggregate_fields';
  avg?: Maybe<Supply_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Supply_Max_Fields>;
  min?: Maybe<Supply_Min_Fields>;
  stddev?: Maybe<Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Supply_Sum_Fields>;
  var_pop?: Maybe<Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Supply_Var_Samp_Fields>;
  variance?: Maybe<Supply_Variance_Fields>;
};


/** aggregate fields of "supply" */
export type Supply_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Supply_Avg_Fields = {
  __typename?: 'supply_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: InputMaybe<Array<Supply_Bool_Exp>>;
  _not?: InputMaybe<Supply_Bool_Exp>;
  _or?: InputMaybe<Array<Supply_Bool_Exp>>;
  coins?: InputMaybe<Coin_Array_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "supply" */
export enum Supply_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  SupplyPkey = 'supply_pkey'
}

/** input type for incrementing numeric columns in table "supply" */
export type Supply_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "supply" */
export type Supply_Insert_Input = {
  coins?: InputMaybe<Array<Scalars['coin']>>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Supply_Max_Fields = {
  __typename?: 'supply_max_fields';
  coins?: Maybe<Array<Scalars['coin']>>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Supply_Min_Fields = {
  __typename?: 'supply_min_fields';
  coins?: Maybe<Array<Scalars['coin']>>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "supply" */
export type Supply_Mutation_Response = {
  __typename?: 'supply_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Supply>;
};

/** on_conflict condition type for table "supply" */
export type Supply_On_Conflict = {
  constraint: Supply_Constraint;
  update_columns?: Array<Supply_Update_Column>;
  where?: InputMaybe<Supply_Bool_Exp>;
};

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: supply */
export type Supply_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "supply" */
export type Supply_Set_Input = {
  coins?: InputMaybe<Array<Scalars['coin']>>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Supply_Stddev_Fields = {
  __typename?: 'supply_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Supply_Stddev_Pop_Fields = {
  __typename?: 'supply_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Supply_Stddev_Samp_Fields = {
  __typename?: 'supply_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "supply" */
export type Supply_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supply_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supply_Stream_Cursor_Value_Input = {
  coins?: InputMaybe<Array<Scalars['coin']>>;
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Supply_Sum_Fields = {
  __typename?: 'supply_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "supply" */
export enum Supply_Update_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Supply_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Supply_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Supply_Set_Input>;
  /** filter the rows which have to be updated */
  where: Supply_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Supply_Var_Pop_Fields = {
  __typename?: 'supply_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Supply_Var_Samp_Fields = {
  __typename?: 'supply_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Supply_Variance_Fields = {
  __typename?: 'supply_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  name: Scalars['String'];
  /** An array relationship */
  token_units: Array<Token_Unit>;
  /** An aggregate relationship */
  token_units_aggregate: Token_Unit_Aggregate;
};


/** columns and relationships of "token" */
export type TokenToken_UnitsArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_Units_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** columns and relationships of "token_bonded" */
export type Token_Bonded = {
  __typename?: 'token_bonded';
  amount: Scalars['String'];
  denom: Scalars['String'];
  height: Scalars['bigint'];
};

/** aggregated selection of "token_bonded" */
export type Token_Bonded_Aggregate = {
  __typename?: 'token_bonded_aggregate';
  aggregate?: Maybe<Token_Bonded_Aggregate_Fields>;
  nodes: Array<Token_Bonded>;
};

/** aggregate fields of "token_bonded" */
export type Token_Bonded_Aggregate_Fields = {
  __typename?: 'token_bonded_aggregate_fields';
  avg?: Maybe<Token_Bonded_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Bonded_Max_Fields>;
  min?: Maybe<Token_Bonded_Min_Fields>;
  stddev?: Maybe<Token_Bonded_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Bonded_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Bonded_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Bonded_Sum_Fields>;
  var_pop?: Maybe<Token_Bonded_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Bonded_Var_Samp_Fields>;
  variance?: Maybe<Token_Bonded_Variance_Fields>;
};


/** aggregate fields of "token_bonded" */
export type Token_Bonded_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Bonded_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Bonded_Avg_Fields = {
  __typename?: 'token_bonded_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_bonded". All fields are combined with a logical 'AND'. */
export type Token_Bonded_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bonded_Bool_Exp>>;
  _not?: InputMaybe<Token_Bonded_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Bonded_Bool_Exp>>;
  amount?: InputMaybe<String_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "token_bonded" */
export enum Token_Bonded_Constraint {
  /** unique or primary key constraint on columns "denom" */
  TokenBondedPkey = 'token_bonded_pkey'
}

/** input type for incrementing numeric columns in table "token_bonded" */
export type Token_Bonded_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "token_bonded" */
export type Token_Bonded_Insert_Input = {
  amount?: InputMaybe<Scalars['String']>;
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Token_Bonded_Max_Fields = {
  __typename?: 'token_bonded_max_fields';
  amount?: Maybe<Scalars['String']>;
  denom?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Token_Bonded_Min_Fields = {
  __typename?: 'token_bonded_min_fields';
  amount?: Maybe<Scalars['String']>;
  denom?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "token_bonded" */
export type Token_Bonded_Mutation_Response = {
  __typename?: 'token_bonded_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Bonded>;
};

/** on_conflict condition type for table "token_bonded" */
export type Token_Bonded_On_Conflict = {
  constraint: Token_Bonded_Constraint;
  update_columns?: Array<Token_Bonded_Update_Column>;
  where?: InputMaybe<Token_Bonded_Bool_Exp>;
};

/** Ordering options when selecting data from "token_bonded". */
export type Token_Bonded_Order_By = {
  amount?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** primary key columns input for table: token_bonded */
export type Token_Bonded_Pk_Columns_Input = {
  denom: Scalars['String'];
};

/** select columns of table "token_bonded" */
export enum Token_Bonded_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Denom = 'denom',
  /** column name */
  Height = 'height'
}

/** input type for updating data in table "token_bonded" */
export type Token_Bonded_Set_Input = {
  amount?: InputMaybe<Scalars['String']>;
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Token_Bonded_Stddev_Fields = {
  __typename?: 'token_bonded_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Bonded_Stddev_Pop_Fields = {
  __typename?: 'token_bonded_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Bonded_Stddev_Samp_Fields = {
  __typename?: 'token_bonded_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "token_bonded" */
export type Token_Bonded_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Bonded_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Bonded_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['String']>;
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Token_Bonded_Sum_Fields = {
  __typename?: 'token_bonded_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "token_bonded" */
export enum Token_Bonded_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Denom = 'denom',
  /** column name */
  Height = 'height'
}

export type Token_Bonded_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Token_Bonded_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Token_Bonded_Set_Input>;
  /** filter the rows which have to be updated */
  where: Token_Bonded_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Bonded_Var_Pop_Fields = {
  __typename?: 'token_bonded_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Bonded_Var_Samp_Fields = {
  __typename?: 'token_bonded_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Bonded_Variance_Fields = {
  __typename?: 'token_bonded_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bool_Exp>>;
  _not?: InputMaybe<Token_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  token_units?: InputMaybe<Token_Unit_Bool_Exp>;
  token_units_aggregate?: InputMaybe<Token_Unit_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "token" */
export enum Token_Constraint {
  /** unique or primary key constraint on columns "name" */
  TokenNameKey = 'token_name_key'
}

/** columns and relationships of "token_holder" */
export type Token_Holder = {
  __typename?: 'token_holder';
  denom: Scalars['String'];
  height: Scalars['bigint'];
  num_holder: Scalars['bigint'];
};

/** aggregated selection of "token_holder" */
export type Token_Holder_Aggregate = {
  __typename?: 'token_holder_aggregate';
  aggregate?: Maybe<Token_Holder_Aggregate_Fields>;
  nodes: Array<Token_Holder>;
};

/** aggregate fields of "token_holder" */
export type Token_Holder_Aggregate_Fields = {
  __typename?: 'token_holder_aggregate_fields';
  avg?: Maybe<Token_Holder_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Holder_Max_Fields>;
  min?: Maybe<Token_Holder_Min_Fields>;
  stddev?: Maybe<Token_Holder_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Holder_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Holder_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Holder_Sum_Fields>;
  var_pop?: Maybe<Token_Holder_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Holder_Var_Samp_Fields>;
  variance?: Maybe<Token_Holder_Variance_Fields>;
};


/** aggregate fields of "token_holder" */
export type Token_Holder_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Holder_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Holder_Avg_Fields = {
  __typename?: 'token_holder_avg_fields';
  height?: Maybe<Scalars['Float']>;
  num_holder?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_holder". All fields are combined with a logical 'AND'. */
export type Token_Holder_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Holder_Bool_Exp>>;
  _not?: InputMaybe<Token_Holder_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Holder_Bool_Exp>>;
  denom?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  num_holder?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "token_holder" */
export enum Token_Holder_Constraint {
  /** unique or primary key constraint on columns "denom" */
  TokenHolderPkey = 'token_holder_pkey'
}

/** input type for incrementing numeric columns in table "token_holder" */
export type Token_Holder_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  num_holder?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "token_holder" */
export type Token_Holder_Insert_Input = {
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  num_holder?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Token_Holder_Max_Fields = {
  __typename?: 'token_holder_max_fields';
  denom?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_holder?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Token_Holder_Min_Fields = {
  __typename?: 'token_holder_min_fields';
  denom?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_holder?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "token_holder" */
export type Token_Holder_Mutation_Response = {
  __typename?: 'token_holder_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Holder>;
};

/** on_conflict condition type for table "token_holder" */
export type Token_Holder_On_Conflict = {
  constraint: Token_Holder_Constraint;
  update_columns?: Array<Token_Holder_Update_Column>;
  where?: InputMaybe<Token_Holder_Bool_Exp>;
};

/** Ordering options when selecting data from "token_holder". */
export type Token_Holder_Order_By = {
  denom?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_holder?: InputMaybe<Order_By>;
};

/** primary key columns input for table: token_holder */
export type Token_Holder_Pk_Columns_Input = {
  denom: Scalars['String'];
};

/** select columns of table "token_holder" */
export enum Token_Holder_Select_Column {
  /** column name */
  Denom = 'denom',
  /** column name */
  Height = 'height',
  /** column name */
  NumHolder = 'num_holder'
}

/** input type for updating data in table "token_holder" */
export type Token_Holder_Set_Input = {
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  num_holder?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Token_Holder_Stddev_Fields = {
  __typename?: 'token_holder_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  num_holder?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Holder_Stddev_Pop_Fields = {
  __typename?: 'token_holder_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_holder?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Holder_Stddev_Samp_Fields = {
  __typename?: 'token_holder_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_holder?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "token_holder" */
export type Token_Holder_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Holder_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Holder_Stream_Cursor_Value_Input = {
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  num_holder?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Token_Holder_Sum_Fields = {
  __typename?: 'token_holder_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  num_holder?: Maybe<Scalars['bigint']>;
};

/** update columns of table "token_holder" */
export enum Token_Holder_Update_Column {
  /** column name */
  Denom = 'denom',
  /** column name */
  Height = 'height',
  /** column name */
  NumHolder = 'num_holder'
}

export type Token_Holder_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Token_Holder_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Token_Holder_Set_Input>;
  /** filter the rows which have to be updated */
  where: Token_Holder_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Holder_Var_Pop_Fields = {
  __typename?: 'token_holder_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_holder?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Holder_Var_Samp_Fields = {
  __typename?: 'token_holder_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_holder?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Holder_Variance_Fields = {
  __typename?: 'token_holder_variance_fields';
  height?: Maybe<Scalars['Float']>;
  num_holder?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "token" */
export type Token_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  token_units?: InputMaybe<Token_Unit_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "token" */
export type Token_Mutation_Response = {
  __typename?: 'token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token>;
};

/** input type for inserting object relation for remote table "token" */
export type Token_Obj_Rel_Insert_Input = {
  data: Token_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Token_On_Conflict>;
};

/** on_conflict condition type for table "token" */
export type Token_On_Conflict = {
  constraint: Token_Constraint;
  update_columns?: Array<Token_Update_Column>;
  where?: InputMaybe<Token_Bool_Exp>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  name?: InputMaybe<Order_By>;
  token_units_aggregate?: InputMaybe<Token_Unit_Aggregate_Order_By>;
};

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price';
  id: Scalars['Int'];
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** aggregated selection of "token_price" */
export type Token_Price_Aggregate = {
  __typename?: 'token_price_aggregate';
  aggregate?: Maybe<Token_Price_Aggregate_Fields>;
  nodes: Array<Token_Price>;
};

export type Token_Price_Aggregate_Bool_Exp = {
  count?: InputMaybe<Token_Price_Aggregate_Bool_Exp_Count>;
};

export type Token_Price_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Token_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Token_Price_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_Fields = {
  __typename?: 'token_price_aggregate_fields';
  avg?: Maybe<Token_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Price_Max_Fields>;
  min?: Maybe<Token_Price_Min_Fields>;
  stddev?: Maybe<Token_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Price_Sum_Fields>;
  var_pop?: Maybe<Token_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Price_Var_Samp_Fields>;
  variance?: Maybe<Token_Price_Variance_Fields>;
};


/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_price" */
export type Token_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Price_Max_Order_By>;
  min?: InputMaybe<Token_Price_Min_Order_By>;
  stddev?: InputMaybe<Token_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Price_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "token_price" */
export type Token_Price_Arr_Rel_Insert_Input = {
  data: Array<Token_Price_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Token_Price_On_Conflict>;
};

/** aggregate avg on columns */
export type Token_Price_Avg_Fields = {
  __typename?: 'token_price_avg_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_price" */
export type Token_Price_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_Bool_Exp>>;
  _not?: InputMaybe<Token_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Price_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  market_cap?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>;
  unit_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "token_price" */
export enum Token_Price_Constraint {
  /** unique or primary key constraint on columns "id" */
  TokenPricePkey = 'token_price_pkey',
  /** unique or primary key constraint on columns "unit_name" */
  TokenPriceUnitNameKey = 'token_price_unit_name_key'
}

/** columns and relationships of "token_price_history" */
export type Token_Price_History = {
  __typename?: 'token_price_history';
  id: Scalars['Int'];
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** aggregated selection of "token_price_history" */
export type Token_Price_History_Aggregate = {
  __typename?: 'token_price_history_aggregate';
  aggregate?: Maybe<Token_Price_History_Aggregate_Fields>;
  nodes: Array<Token_Price_History>;
};

export type Token_Price_History_Aggregate_Bool_Exp = {
  count?: InputMaybe<Token_Price_History_Aggregate_Bool_Exp_Count>;
};

export type Token_Price_History_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Token_Price_History_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "token_price_history" */
export type Token_Price_History_Aggregate_Fields = {
  __typename?: 'token_price_history_aggregate_fields';
  avg?: Maybe<Token_Price_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Price_History_Max_Fields>;
  min?: Maybe<Token_Price_History_Min_Fields>;
  stddev?: Maybe<Token_Price_History_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Price_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Price_History_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Price_History_Sum_Fields>;
  var_pop?: Maybe<Token_Price_History_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Price_History_Var_Samp_Fields>;
  variance?: Maybe<Token_Price_History_Variance_Fields>;
};


/** aggregate fields of "token_price_history" */
export type Token_Price_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_price_history" */
export type Token_Price_History_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Price_History_Max_Order_By>;
  min?: InputMaybe<Token_Price_History_Min_Order_By>;
  stddev?: InputMaybe<Token_Price_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Price_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Price_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Price_History_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Price_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Price_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Price_History_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "token_price_history" */
export type Token_Price_History_Arr_Rel_Insert_Input = {
  data: Array<Token_Price_History_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Token_Price_History_On_Conflict>;
};

/** aggregate avg on columns */
export type Token_Price_History_Avg_Fields = {
  __typename?: 'token_price_history_avg_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_price_history" */
export type Token_Price_History_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price_history". All fields are combined with a logical 'AND'. */
export type Token_Price_History_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_History_Bool_Exp>>;
  _not?: InputMaybe<Token_Price_History_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Price_History_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  market_cap?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>;
  unit_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "token_price_history" */
export enum Token_Price_History_Constraint {
  /** unique or primary key constraint on columns "id" */
  TokenPriceHistoryPkey = 'token_price_history_pkey',
  /** unique or primary key constraint on columns "timestamp", "unit_name" */
  UniquePriceForTimestamp = 'unique_price_for_timestamp'
}

/** input type for incrementing numeric columns in table "token_price_history" */
export type Token_Price_History_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  market_cap?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "token_price_history" */
export type Token_Price_History_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  market_cap?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  token_unit?: InputMaybe<Token_Unit_Obj_Rel_Insert_Input>;
  unit_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Token_Price_History_Max_Fields = {
  __typename?: 'token_price_history_max_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_price_history" */
export type Token_Price_History_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Price_History_Min_Fields = {
  __typename?: 'token_price_history_min_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_price_history" */
export type Token_Price_History_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "token_price_history" */
export type Token_Price_History_Mutation_Response = {
  __typename?: 'token_price_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Price_History>;
};

/** on_conflict condition type for table "token_price_history" */
export type Token_Price_History_On_Conflict = {
  constraint: Token_Price_History_Constraint;
  update_columns?: Array<Token_Price_History_Update_Column>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};

/** Ordering options when selecting data from "token_price_history". */
export type Token_Price_History_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_unit?: InputMaybe<Token_Unit_Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: token_price_history */
export type Token_Price_History_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "token_price_history" */
export enum Token_Price_History_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** input type for updating data in table "token_price_history" */
export type Token_Price_History_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  market_cap?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  unit_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Token_Price_History_Stddev_Fields = {
  __typename?: 'token_price_history_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_History_Stddev_Pop_Fields = {
  __typename?: 'token_price_history_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_History_Stddev_Samp_Fields = {
  __typename?: 'token_price_history_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_price_history" */
export type Token_Price_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Price_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Price_History_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  market_cap?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  unit_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Token_Price_History_Sum_Fields = {
  __typename?: 'token_price_history_sum_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "token_price_history" */
export type Token_Price_History_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** update columns of table "token_price_history" */
export enum Token_Price_History_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

export type Token_Price_History_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Token_Price_History_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Token_Price_History_Set_Input>;
  /** filter the rows which have to be updated */
  where: Token_Price_History_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Price_History_Var_Pop_Fields = {
  __typename?: 'token_price_history_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_price_history" */
export type Token_Price_History_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Price_History_Var_Samp_Fields = {
  __typename?: 'token_price_history_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_price_history" */
export type Token_Price_History_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Price_History_Variance_Fields = {
  __typename?: 'token_price_history_variance_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_price_history" */
export type Token_Price_History_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "token_price" */
export type Token_Price_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  market_cap?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "token_price" */
export type Token_Price_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  market_cap?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  token_unit?: InputMaybe<Token_Unit_Obj_Rel_Insert_Input>;
  unit_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Token_Price_Max_Fields = {
  __typename?: 'token_price_max_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_price" */
export type Token_Price_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Price_Min_Fields = {
  __typename?: 'token_price_min_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_price" */
export type Token_Price_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "token_price" */
export type Token_Price_Mutation_Response = {
  __typename?: 'token_price_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Price>;
};

/** input type for inserting object relation for remote table "token_price" */
export type Token_Price_Obj_Rel_Insert_Input = {
  data: Token_Price_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Token_Price_On_Conflict>;
};

/** on_conflict condition type for table "token_price" */
export type Token_Price_On_Conflict = {
  constraint: Token_Price_Constraint;
  update_columns?: Array<Token_Price_Update_Column>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_unit?: InputMaybe<Token_Unit_Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: token_price */
export type Token_Price_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "token_price" */
export enum Token_Price_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** input type for updating data in table "token_price" */
export type Token_Price_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  market_cap?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  unit_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Token_Price_Stddev_Fields = {
  __typename?: 'token_price_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_price" */
export type Token_Price_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_Stddev_Pop_Fields = {
  __typename?: 'token_price_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_price" */
export type Token_Price_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_Stddev_Samp_Fields = {
  __typename?: 'token_price_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_price" */
export type Token_Price_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_price" */
export type Token_Price_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Price_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Price_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  market_cap?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  unit_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Token_Price_Sum_Fields = {
  __typename?: 'token_price_sum_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "token_price" */
export type Token_Price_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** update columns of table "token_price" */
export enum Token_Price_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

export type Token_Price_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Token_Price_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Token_Price_Set_Input>;
  /** filter the rows which have to be updated */
  where: Token_Price_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Price_Var_Pop_Fields = {
  __typename?: 'token_price_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_price" */
export type Token_Price_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Price_Var_Samp_Fields = {
  __typename?: 'token_price_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_price" */
export type Token_Price_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Price_Variance_Fields = {
  __typename?: 'token_price_variance_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_price" */
export type Token_Price_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "token" */
export type Token_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "token" */
export type Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "token_unbonding" */
export type Token_Unbonding = {
  __typename?: 'token_unbonding';
  amount: Scalars['String'];
  denom: Scalars['String'];
  height: Scalars['bigint'];
};

/** aggregated selection of "token_unbonding" */
export type Token_Unbonding_Aggregate = {
  __typename?: 'token_unbonding_aggregate';
  aggregate?: Maybe<Token_Unbonding_Aggregate_Fields>;
  nodes: Array<Token_Unbonding>;
};

/** aggregate fields of "token_unbonding" */
export type Token_Unbonding_Aggregate_Fields = {
  __typename?: 'token_unbonding_aggregate_fields';
  avg?: Maybe<Token_Unbonding_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Unbonding_Max_Fields>;
  min?: Maybe<Token_Unbonding_Min_Fields>;
  stddev?: Maybe<Token_Unbonding_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Unbonding_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Unbonding_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Unbonding_Sum_Fields>;
  var_pop?: Maybe<Token_Unbonding_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Unbonding_Var_Samp_Fields>;
  variance?: Maybe<Token_Unbonding_Variance_Fields>;
};


/** aggregate fields of "token_unbonding" */
export type Token_Unbonding_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Unbonding_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Unbonding_Avg_Fields = {
  __typename?: 'token_unbonding_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_unbonding". All fields are combined with a logical 'AND'. */
export type Token_Unbonding_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Unbonding_Bool_Exp>>;
  _not?: InputMaybe<Token_Unbonding_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Unbonding_Bool_Exp>>;
  amount?: InputMaybe<String_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "token_unbonding" */
export enum Token_Unbonding_Constraint {
  /** unique or primary key constraint on columns "denom" */
  TokenUnbondingPkey = 'token_unbonding_pkey'
}

/** input type for incrementing numeric columns in table "token_unbonding" */
export type Token_Unbonding_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "token_unbonding" */
export type Token_Unbonding_Insert_Input = {
  amount?: InputMaybe<Scalars['String']>;
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Token_Unbonding_Max_Fields = {
  __typename?: 'token_unbonding_max_fields';
  amount?: Maybe<Scalars['String']>;
  denom?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Token_Unbonding_Min_Fields = {
  __typename?: 'token_unbonding_min_fields';
  amount?: Maybe<Scalars['String']>;
  denom?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "token_unbonding" */
export type Token_Unbonding_Mutation_Response = {
  __typename?: 'token_unbonding_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Unbonding>;
};

/** on_conflict condition type for table "token_unbonding" */
export type Token_Unbonding_On_Conflict = {
  constraint: Token_Unbonding_Constraint;
  update_columns?: Array<Token_Unbonding_Update_Column>;
  where?: InputMaybe<Token_Unbonding_Bool_Exp>;
};

/** Ordering options when selecting data from "token_unbonding". */
export type Token_Unbonding_Order_By = {
  amount?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** primary key columns input for table: token_unbonding */
export type Token_Unbonding_Pk_Columns_Input = {
  denom: Scalars['String'];
};

/** select columns of table "token_unbonding" */
export enum Token_Unbonding_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Denom = 'denom',
  /** column name */
  Height = 'height'
}

/** input type for updating data in table "token_unbonding" */
export type Token_Unbonding_Set_Input = {
  amount?: InputMaybe<Scalars['String']>;
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Token_Unbonding_Stddev_Fields = {
  __typename?: 'token_unbonding_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Unbonding_Stddev_Pop_Fields = {
  __typename?: 'token_unbonding_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Unbonding_Stddev_Samp_Fields = {
  __typename?: 'token_unbonding_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "token_unbonding" */
export type Token_Unbonding_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Unbonding_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Unbonding_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['String']>;
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Token_Unbonding_Sum_Fields = {
  __typename?: 'token_unbonding_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "token_unbonding" */
export enum Token_Unbonding_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Denom = 'denom',
  /** column name */
  Height = 'height'
}

export type Token_Unbonding_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Token_Unbonding_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Token_Unbonding_Set_Input>;
  /** filter the rows which have to be updated */
  where: Token_Unbonding_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Unbonding_Var_Pop_Fields = {
  __typename?: 'token_unbonding_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Unbonding_Var_Samp_Fields = {
  __typename?: 'token_unbonding_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Unbonding_Variance_Fields = {
  __typename?: 'token_unbonding_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "token_unit" */
export type Token_Unit = {
  __typename?: 'token_unit';
  aliases?: Maybe<Array<Scalars['String']>>;
  denom: Scalars['String'];
  exponent: Scalars['Int'];
  price_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  token: Token;
  token_name: Scalars['String'];
  /** An object relationship */
  token_price?: Maybe<Token_Price>;
  /** An array relationship */
  token_price_histories: Array<Token_Price_History>;
  /** An aggregate relationship */
  token_price_histories_aggregate: Token_Price_History_Aggregate;
  /** An array relationship */
  token_prices: Array<Token_Price>;
  /** An aggregate relationship */
  token_prices_aggregate: Token_Price_Aggregate;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_PricesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};

/** aggregated selection of "token_unit" */
export type Token_Unit_Aggregate = {
  __typename?: 'token_unit_aggregate';
  aggregate?: Maybe<Token_Unit_Aggregate_Fields>;
  nodes: Array<Token_Unit>;
};

export type Token_Unit_Aggregate_Bool_Exp = {
  count?: InputMaybe<Token_Unit_Aggregate_Bool_Exp_Count>;
};

export type Token_Unit_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Token_Unit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Token_Unit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_Fields = {
  __typename?: 'token_unit_aggregate_fields';
  avg?: Maybe<Token_Unit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Unit_Max_Fields>;
  min?: Maybe<Token_Unit_Min_Fields>;
  stddev?: Maybe<Token_Unit_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Unit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Unit_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Unit_Sum_Fields>;
  var_pop?: Maybe<Token_Unit_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Unit_Var_Samp_Fields>;
  variance?: Maybe<Token_Unit_Variance_Fields>;
};


/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Unit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_unit" */
export type Token_Unit_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Unit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Unit_Max_Order_By>;
  min?: InputMaybe<Token_Unit_Min_Order_By>;
  stddev?: InputMaybe<Token_Unit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Unit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Unit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Unit_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Unit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Unit_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Unit_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "token_unit" */
export type Token_Unit_Arr_Rel_Insert_Input = {
  data: Array<Token_Unit_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Token_Unit_On_Conflict>;
};

/** aggregate avg on columns */
export type Token_Unit_Avg_Fields = {
  __typename?: 'token_unit_avg_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_unit" */
export type Token_Unit_Avg_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Unit_Bool_Exp>>;
  _not?: InputMaybe<Token_Unit_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Unit_Bool_Exp>>;
  aliases?: InputMaybe<String_Array_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
  exponent?: InputMaybe<Int_Comparison_Exp>;
  price_id?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_name?: InputMaybe<String_Comparison_Exp>;
  token_price?: InputMaybe<Token_Price_Bool_Exp>;
  token_price_histories?: InputMaybe<Token_Price_History_Bool_Exp>;
  token_price_histories_aggregate?: InputMaybe<Token_Price_History_Aggregate_Bool_Exp>;
  token_prices?: InputMaybe<Token_Price_Bool_Exp>;
  token_prices_aggregate?: InputMaybe<Token_Price_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "token_unit" */
export enum Token_Unit_Constraint {
  /** unique or primary key constraint on columns "denom" */
  TokenUnitDenomKey = 'token_unit_denom_key'
}

/** input type for incrementing numeric columns in table "token_unit" */
export type Token_Unit_Inc_Input = {
  exponent?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "token_unit" */
export type Token_Unit_Insert_Input = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  denom?: InputMaybe<Scalars['String']>;
  exponent?: InputMaybe<Scalars['Int']>;
  price_id?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Token_Obj_Rel_Insert_Input>;
  token_name?: InputMaybe<Scalars['String']>;
  token_price?: InputMaybe<Token_Price_Obj_Rel_Insert_Input>;
  token_price_histories?: InputMaybe<Token_Price_History_Arr_Rel_Insert_Input>;
  token_prices?: InputMaybe<Token_Price_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Token_Unit_Max_Fields = {
  __typename?: 'token_unit_max_fields';
  aliases?: Maybe<Array<Scalars['String']>>;
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_unit" */
export type Token_Unit_Max_Order_By = {
  aliases?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Unit_Min_Fields = {
  __typename?: 'token_unit_min_fields';
  aliases?: Maybe<Array<Scalars['String']>>;
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_unit" */
export type Token_Unit_Min_Order_By = {
  aliases?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "token_unit" */
export type Token_Unit_Mutation_Response = {
  __typename?: 'token_unit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Unit>;
};

/** input type for inserting object relation for remote table "token_unit" */
export type Token_Unit_Obj_Rel_Insert_Input = {
  data: Token_Unit_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Token_Unit_On_Conflict>;
};

/** on_conflict condition type for table "token_unit" */
export type Token_Unit_On_Conflict = {
  constraint: Token_Unit_Constraint;
  update_columns?: Array<Token_Unit_Update_Column>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  aliases?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_name?: InputMaybe<Order_By>;
  token_price?: InputMaybe<Token_Price_Order_By>;
  token_price_histories_aggregate?: InputMaybe<Token_Price_History_Aggregate_Order_By>;
  token_prices_aggregate?: InputMaybe<Token_Price_Aggregate_Order_By>;
};

/** select columns of table "token_unit" */
export enum Token_Unit_Select_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Denom = 'denom',
  /** column name */
  Exponent = 'exponent',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TokenName = 'token_name'
}

/** input type for updating data in table "token_unit" */
export type Token_Unit_Set_Input = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  denom?: InputMaybe<Scalars['String']>;
  exponent?: InputMaybe<Scalars['Int']>;
  price_id?: InputMaybe<Scalars['String']>;
  token_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Token_Unit_Stddev_Fields = {
  __typename?: 'token_unit_stddev_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_unit" */
export type Token_Unit_Stddev_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Unit_Stddev_Pop_Fields = {
  __typename?: 'token_unit_stddev_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_unit" */
export type Token_Unit_Stddev_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Unit_Stddev_Samp_Fields = {
  __typename?: 'token_unit_stddev_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_unit" */
export type Token_Unit_Stddev_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_unit" */
export type Token_Unit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Unit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Unit_Stream_Cursor_Value_Input = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  denom?: InputMaybe<Scalars['String']>;
  exponent?: InputMaybe<Scalars['Int']>;
  price_id?: InputMaybe<Scalars['String']>;
  token_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Token_Unit_Sum_Fields = {
  __typename?: 'token_unit_sum_fields';
  exponent?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "token_unit" */
export type Token_Unit_Sum_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** update columns of table "token_unit" */
export enum Token_Unit_Update_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Denom = 'denom',
  /** column name */
  Exponent = 'exponent',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TokenName = 'token_name'
}

export type Token_Unit_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Token_Unit_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Token_Unit_Set_Input>;
  /** filter the rows which have to be updated */
  where: Token_Unit_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Unit_Var_Pop_Fields = {
  __typename?: 'token_unit_var_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_unit" */
export type Token_Unit_Var_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Unit_Var_Samp_Fields = {
  __typename?: 'token_unit_var_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_unit" */
export type Token_Unit_Var_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Unit_Variance_Fields = {
  __typename?: 'token_unit_variance_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_unit" */
export type Token_Unit_Variance_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** update columns of table "token" */
export enum Token_Update_Column {
  /** column name */
  Name = 'name'
}

export type Token_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Token_Set_Input>;
  /** filter the rows which have to be updated */
  where: Token_Bool_Exp;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  block: Block;
  fee: Scalars['jsonb'];
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash: Scalars['String'];
  height: Scalars['bigint'];
  logs?: Maybe<Scalars['jsonb']>;
  memo?: Maybe<Scalars['String']>;
  /** An array relationship */
  message_105s: Array<Message_105>;
  /** An aggregate relationship */
  message_105s_aggregate: Message_105_Aggregate;
  messages: Scalars['json'];
  /** An array relationship */
  messagesByTransactionHashPartitionId: Array<Message>;
  /** An aggregate relationship */
  messagesByTransactionHashPartitionId_aggregate: Message_Aggregate;
  partition_id: Scalars['bigint'];
  raw_log?: Maybe<Scalars['String']>;
  signatures: Array<Scalars['String']>;
  signer_infos: Scalars['jsonb'];
  success: Scalars['Boolean'];
};


/** columns and relationships of "transaction" */
export type TransactionFeeArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionLogsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionMessage_105sArgs = {
  distinct_on?: InputMaybe<Array<Message_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_105_Order_By>>;
  where?: InputMaybe<Message_105_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMessage_105s_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_105_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_105_Order_By>>;
  where?: InputMaybe<Message_105_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesByTransactionHashPartitionIdArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesByTransactionHashPartitionId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionSigner_InfosArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "transaction_105" */
export type Transaction_105 = {
  __typename?: 'transaction_105';
  /** An object relationship */
  block: Block;
  fee: Scalars['jsonb'];
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash: Scalars['String'];
  height: Scalars['bigint'];
  logs?: Maybe<Scalars['jsonb']>;
  memo?: Maybe<Scalars['String']>;
  messages: Scalars['json'];
  /** An array relationship */
  messagesByTransactionHashPartitionId: Array<Message>;
  /** An aggregate relationship */
  messagesByTransactionHashPartitionId_aggregate: Message_Aggregate;
  partition_id: Scalars['bigint'];
  raw_log?: Maybe<Scalars['String']>;
  signatures: Array<Scalars['String']>;
  signer_infos: Scalars['jsonb'];
  success: Scalars['Boolean'];
};


/** columns and relationships of "transaction_105" */
export type Transaction_105FeeArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction_105" */
export type Transaction_105LogsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction_105" */
export type Transaction_105MessagesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction_105" */
export type Transaction_105MessagesByTransactionHashPartitionIdArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "transaction_105" */
export type Transaction_105MessagesByTransactionHashPartitionId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "transaction_105" */
export type Transaction_105Signer_InfosArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "transaction_105" */
export type Transaction_105_Aggregate = {
  __typename?: 'transaction_105_aggregate';
  aggregate?: Maybe<Transaction_105_Aggregate_Fields>;
  nodes: Array<Transaction_105>;
};

export type Transaction_105_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Transaction_105_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Transaction_105_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Transaction_105_Aggregate_Bool_Exp_Count>;
};

export type Transaction_105_Aggregate_Bool_Exp_Bool_And = {
  arguments: Transaction_105_Select_Column_Transaction_105_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Transaction_105_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_105_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Transaction_105_Select_Column_Transaction_105_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Transaction_105_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_105_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_105_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Transaction_105_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transaction_105" */
export type Transaction_105_Aggregate_Fields = {
  __typename?: 'transaction_105_aggregate_fields';
  avg?: Maybe<Transaction_105_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_105_Max_Fields>;
  min?: Maybe<Transaction_105_Min_Fields>;
  stddev?: Maybe<Transaction_105_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_105_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_105_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_105_Sum_Fields>;
  var_pop?: Maybe<Transaction_105_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_105_Var_Samp_Fields>;
  variance?: Maybe<Transaction_105_Variance_Fields>;
};


/** aggregate fields of "transaction_105" */
export type Transaction_105_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_105_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction_105" */
export type Transaction_105_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_105_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_105_Max_Order_By>;
  min?: InputMaybe<Transaction_105_Min_Order_By>;
  stddev?: InputMaybe<Transaction_105_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_105_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_105_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_105_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_105_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_105_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_105_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Transaction_105_Append_Input = {
  fee?: InputMaybe<Scalars['jsonb']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "transaction_105" */
export type Transaction_105_Arr_Rel_Insert_Input = {
  data: Array<Transaction_105_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_105_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_105_Avg_Fields = {
  __typename?: 'transaction_105_avg_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction_105" */
export type Transaction_105_Avg_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction_105". All fields are combined with a logical 'AND'. */
export type Transaction_105_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_105_Bool_Exp>>;
  _not?: InputMaybe<Transaction_105_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_105_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  fee?: InputMaybe<Jsonb_Comparison_Exp>;
  gas_used?: InputMaybe<Bigint_Comparison_Exp>;
  gas_wanted?: InputMaybe<Bigint_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  logs?: InputMaybe<Jsonb_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  messages?: InputMaybe<Json_Comparison_Exp>;
  messagesByTransactionHashPartitionId?: InputMaybe<Message_Bool_Exp>;
  messagesByTransactionHashPartitionId_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  partition_id?: InputMaybe<Bigint_Comparison_Exp>;
  raw_log?: InputMaybe<String_Comparison_Exp>;
  signatures?: InputMaybe<String_Array_Comparison_Exp>;
  signer_infos?: InputMaybe<Jsonb_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction_105" */
export enum Transaction_105_Constraint {
  /** unique or primary key constraint on columns "partition_id", "hash" */
  Transaction_105HashPartitionIdKey = 'transaction_105_hash_partition_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Transaction_105_Delete_At_Path_Input = {
  fee?: InputMaybe<Array<Scalars['String']>>;
  logs?: InputMaybe<Array<Scalars['String']>>;
  signer_infos?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Transaction_105_Delete_Elem_Input = {
  fee?: InputMaybe<Scalars['Int']>;
  logs?: InputMaybe<Scalars['Int']>;
  signer_infos?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Transaction_105_Delete_Key_Input = {
  fee?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  signer_infos?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "transaction_105" */
export type Transaction_105_Inc_Input = {
  gas_used?: InputMaybe<Scalars['bigint']>;
  gas_wanted?: InputMaybe<Scalars['bigint']>;
  height?: InputMaybe<Scalars['bigint']>;
  partition_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "transaction_105" */
export type Transaction_105_Insert_Input = {
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  fee?: InputMaybe<Scalars['jsonb']>;
  gas_used?: InputMaybe<Scalars['bigint']>;
  gas_wanted?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  memo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['json']>;
  messagesByTransactionHashPartitionId?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  raw_log?: InputMaybe<Scalars['String']>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
  success?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Transaction_105_Max_Fields = {
  __typename?: 'transaction_105_max_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  memo?: Maybe<Scalars['String']>;
  partition_id?: Maybe<Scalars['bigint']>;
  raw_log?: Maybe<Scalars['String']>;
  signatures?: Maybe<Array<Scalars['String']>>;
};

/** order by max() on columns of table "transaction_105" */
export type Transaction_105_Max_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_105_Min_Fields = {
  __typename?: 'transaction_105_min_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  memo?: Maybe<Scalars['String']>;
  partition_id?: Maybe<Scalars['bigint']>;
  raw_log?: Maybe<Scalars['String']>;
  signatures?: Maybe<Array<Scalars['String']>>;
};

/** order by min() on columns of table "transaction_105" */
export type Transaction_105_Min_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction_105" */
export type Transaction_105_Mutation_Response = {
  __typename?: 'transaction_105_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction_105>;
};

/** input type for inserting object relation for remote table "transaction_105" */
export type Transaction_105_Obj_Rel_Insert_Input = {
  data: Transaction_105_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_105_On_Conflict>;
};

/** on_conflict condition type for table "transaction_105" */
export type Transaction_105_On_Conflict = {
  constraint: Transaction_105_Constraint;
  update_columns?: Array<Transaction_105_Update_Column>;
  where?: InputMaybe<Transaction_105_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction_105". */
export type Transaction_105_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  fee?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  messagesByTransactionHashPartitionId_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  partition_id?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
  signer_infos?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Transaction_105_Prepend_Input = {
  fee?: InputMaybe<Scalars['jsonb']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "transaction_105" */
export enum Transaction_105_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

/** select "transaction_105_aggregate_bool_exp_bool_and_arguments_columns" columns of table "transaction_105" */
export enum Transaction_105_Select_Column_Transaction_105_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** select "transaction_105_aggregate_bool_exp_bool_or_arguments_columns" columns of table "transaction_105" */
export enum Transaction_105_Select_Column_Transaction_105_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** input type for updating data in table "transaction_105" */
export type Transaction_105_Set_Input = {
  fee?: InputMaybe<Scalars['jsonb']>;
  gas_used?: InputMaybe<Scalars['bigint']>;
  gas_wanted?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  memo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['json']>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  raw_log?: InputMaybe<Scalars['String']>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
  success?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Transaction_105_Stddev_Fields = {
  __typename?: 'transaction_105_stddev_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction_105" */
export type Transaction_105_Stddev_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_105_Stddev_Pop_Fields = {
  __typename?: 'transaction_105_stddev_pop_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction_105" */
export type Transaction_105_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_105_Stddev_Samp_Fields = {
  __typename?: 'transaction_105_stddev_samp_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction_105" */
export type Transaction_105_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction_105" */
export type Transaction_105_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_105_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_105_Stream_Cursor_Value_Input = {
  fee?: InputMaybe<Scalars['jsonb']>;
  gas_used?: InputMaybe<Scalars['bigint']>;
  gas_wanted?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  memo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['json']>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  raw_log?: InputMaybe<Scalars['String']>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
  success?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Transaction_105_Sum_Fields = {
  __typename?: 'transaction_105_sum_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction_105" */
export type Transaction_105_Sum_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** update columns of table "transaction_105" */
export enum Transaction_105_Update_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

export type Transaction_105_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Transaction_105_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Transaction_105_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Transaction_105_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Transaction_105_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_105_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Transaction_105_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_105_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transaction_105_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_105_Var_Pop_Fields = {
  __typename?: 'transaction_105_var_pop_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction_105" */
export type Transaction_105_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_105_Var_Samp_Fields = {
  __typename?: 'transaction_105_var_samp_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction_105" */
export type Transaction_105_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_105_Variance_Fields = {
  __typename?: 'transaction_105_variance_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction_105" */
export type Transaction_105_Variance_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

export type Transaction_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Transaction_Aggregate_Bool_Exp_Count>;
};

export type Transaction_Aggregate_Bool_Exp_Bool_And = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Transaction_Append_Input = {
  fee?: InputMaybe<Scalars['jsonb']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "transaction" */
export type Transaction_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  fee?: InputMaybe<Jsonb_Comparison_Exp>;
  gas_used?: InputMaybe<Bigint_Comparison_Exp>;
  gas_wanted?: InputMaybe<Bigint_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  logs?: InputMaybe<Jsonb_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  message_105s?: InputMaybe<Message_105_Bool_Exp>;
  message_105s_aggregate?: InputMaybe<Message_105_Aggregate_Bool_Exp>;
  messages?: InputMaybe<Json_Comparison_Exp>;
  messagesByTransactionHashPartitionId?: InputMaybe<Message_Bool_Exp>;
  messagesByTransactionHashPartitionId_aggregate?: InputMaybe<Message_Aggregate_Bool_Exp>;
  partition_id?: InputMaybe<Bigint_Comparison_Exp>;
  raw_log?: InputMaybe<String_Comparison_Exp>;
  signatures?: InputMaybe<String_Array_Comparison_Exp>;
  signer_infos?: InputMaybe<Jsonb_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint on columns "partition_id", "hash" */
  UniqueTx = 'unique_tx'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Transaction_Delete_At_Path_Input = {
  fee?: InputMaybe<Array<Scalars['String']>>;
  logs?: InputMaybe<Array<Scalars['String']>>;
  signer_infos?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Transaction_Delete_Elem_Input = {
  fee?: InputMaybe<Scalars['Int']>;
  logs?: InputMaybe<Scalars['Int']>;
  signer_infos?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Transaction_Delete_Key_Input = {
  fee?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  signer_infos?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  gas_used?: InputMaybe<Scalars['bigint']>;
  gas_wanted?: InputMaybe<Scalars['bigint']>;
  height?: InputMaybe<Scalars['bigint']>;
  partition_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  fee?: InputMaybe<Scalars['jsonb']>;
  gas_used?: InputMaybe<Scalars['bigint']>;
  gas_wanted?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  memo?: InputMaybe<Scalars['String']>;
  message_105s?: InputMaybe<Message_105_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<Scalars['json']>;
  messagesByTransactionHashPartitionId?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  raw_log?: InputMaybe<Scalars['String']>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
  success?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  memo?: Maybe<Scalars['String']>;
  partition_id?: Maybe<Scalars['bigint']>;
  raw_log?: Maybe<Scalars['String']>;
  signatures?: Maybe<Array<Scalars['String']>>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  memo?: Maybe<Scalars['String']>;
  partition_id?: Maybe<Scalars['bigint']>;
  raw_log?: Maybe<Scalars['String']>;
  signatures?: Maybe<Array<Scalars['String']>>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** input type for inserting object relation for remote table "transaction" */
export type Transaction_Obj_Rel_Insert_Input = {
  data: Transaction_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** on_conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  fee?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  message_105s_aggregate?: InputMaybe<Message_105_Aggregate_Order_By>;
  messages?: InputMaybe<Order_By>;
  messagesByTransactionHashPartitionId_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  partition_id?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
  signer_infos?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Transaction_Prepend_Input = {
  fee?: InputMaybe<Scalars['jsonb']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

/** select "transaction_aggregate_bool_exp_bool_and_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** select "transaction_aggregate_bool_exp_bool_or_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  fee?: InputMaybe<Scalars['jsonb']>;
  gas_used?: InputMaybe<Scalars['bigint']>;
  gas_wanted?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  memo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['json']>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  raw_log?: InputMaybe<Scalars['String']>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
  success?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  fee?: InputMaybe<Scalars['jsonb']>;
  gas_used?: InputMaybe<Scalars['bigint']>;
  gas_wanted?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  memo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['json']>;
  partition_id?: InputMaybe<Scalars['bigint']>;
  raw_log?: InputMaybe<Scalars['String']>;
  signatures?: InputMaybe<Array<Scalars['String']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
  success?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** update columns of table "transaction" */
export enum Transaction_Update_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

export type Transaction_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Transaction_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Transaction_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Transaction_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Transaction_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Transaction_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  partition_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator" */
export type Validator = {
  __typename?: 'validator';
  /** An array relationship */
  blocks: Array<Block>;
  /** An aggregate relationship */
  blocks_aggregate: Block_Aggregate;
  consensus_address: Scalars['String'];
  consensus_pubkey: Scalars['String'];
  /** An array relationship */
  double_sign_votes: Array<Double_Sign_Vote>;
  /** An aggregate relationship */
  double_sign_votes_aggregate: Double_Sign_Vote_Aggregate;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  /** An object relationship */
  proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  /** An aggregate relationship */
  proposal_validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** An array relationship */
  validator_commissions: Array<Validator_Commission>;
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commission_Aggregate;
  /** An array relationship */
  validator_descriptions: Array<Validator_Description>;
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Description_Aggregate;
  /** An object relationship */
  validator_info?: Maybe<Validator_Info>;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Info_Aggregate;
  /** An array relationship */
  validator_signing_infos: Array<Validator_Signing_Info>;
  /** An aggregate relationship */
  validator_signing_infos_aggregate: Validator_Signing_Info_Aggregate;
  /** An array relationship */
  validator_statuses: Array<Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "validator" */
export type ValidatorBlocksArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_VotesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorProposal_Validator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Commissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Descriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** aggregated selection of "validator" */
export type Validator_Aggregate = {
  __typename?: 'validator_aggregate';
  aggregate?: Maybe<Validator_Aggregate_Fields>;
  nodes: Array<Validator>;
};

/** aggregate fields of "validator" */
export type Validator_Aggregate_Fields = {
  __typename?: 'validator_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Validator_Max_Fields>;
  min?: Maybe<Validator_Min_Fields>;
};


/** aggregate fields of "validator" */
export type Validator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Validator_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Bool_Exp>>;
  _not?: InputMaybe<Validator_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Bool_Exp>>;
  blocks?: InputMaybe<Block_Bool_Exp>;
  blocks_aggregate?: InputMaybe<Block_Aggregate_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  consensus_pubkey?: InputMaybe<String_Comparison_Exp>;
  double_sign_votes?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  double_sign_votes_aggregate?: InputMaybe<Double_Sign_Vote_Aggregate_Bool_Exp>;
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp>;
  proposal_validator_status_snapshot?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp>;
  validator_commissions?: InputMaybe<Validator_Commission_Bool_Exp>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Bool_Exp>;
  validator_descriptions?: InputMaybe<Validator_Description_Bool_Exp>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Bool_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Bool_Exp>;
  validator_signing_infos?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  validator_signing_infos_aggregate?: InputMaybe<Validator_Signing_Info_Aggregate_Bool_Exp>;
  validator_statuses?: InputMaybe<Validator_Status_Bool_Exp>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** columns and relationships of "validator_commission" */
export type Validator_Commission = {
  __typename?: 'validator_commission';
  commission: Scalars['numeric'];
  height: Scalars['bigint'];
  min_self_delegation: Scalars['bigint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_commission" */
export type Validator_Commission_Aggregate = {
  __typename?: 'validator_commission_aggregate';
  aggregate?: Maybe<Validator_Commission_Aggregate_Fields>;
  nodes: Array<Validator_Commission>;
};

export type Validator_Commission_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Commission_Aggregate_Bool_Exp_Count>;
};

export type Validator_Commission_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Commission_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_Fields = {
  __typename?: 'validator_commission_aggregate_fields';
  avg?: Maybe<Validator_Commission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Commission_Max_Fields>;
  min?: Maybe<Validator_Commission_Min_Fields>;
  stddev?: Maybe<Validator_Commission_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Commission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Commission_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Commission_Sum_Fields>;
  var_pop?: Maybe<Validator_Commission_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Commission_Var_Samp_Fields>;
  variance?: Maybe<Validator_Commission_Variance_Fields>;
};


/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_commission" */
export type Validator_Commission_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Commission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Commission_Max_Order_By>;
  min?: InputMaybe<Validator_Commission_Min_Order_By>;
  stddev?: InputMaybe<Validator_Commission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Commission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Commission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Commission_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Commission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Commission_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Commission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_commission" */
export type Validator_Commission_Arr_Rel_Insert_Input = {
  data: Array<Validator_Commission_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Commission_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Commission_Avg_Fields = {
  __typename?: 'validator_commission_avg_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_commission" */
export type Validator_Commission_Avg_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_commission". All fields are combined with a logical 'AND'. */
export type Validator_Commission_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Commission_Bool_Exp>>;
  _not?: InputMaybe<Validator_Commission_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Commission_Bool_Exp>>;
  commission?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  min_self_delegation?: InputMaybe<Bigint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "validator_commission" */
export enum Validator_Commission_Constraint {
  /** unique or primary key constraint on columns "validator_address" */
  ValidatorCommissionPkey = 'validator_commission_pkey'
}

/** input type for incrementing numeric columns in table "validator_commission" */
export type Validator_Commission_Inc_Input = {
  commission?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_commission" */
export type Validator_Commission_Insert_Input = {
  commission?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Validator_Commission_Max_Fields = {
  __typename?: 'validator_commission_max_fields';
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_commission" */
export type Validator_Commission_Max_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Commission_Min_Fields = {
  __typename?: 'validator_commission_min_fields';
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_commission" */
export type Validator_Commission_Min_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_commission" */
export type Validator_Commission_Mutation_Response = {
  __typename?: 'validator_commission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Commission>;
};

/** on_conflict condition type for table "validator_commission" */
export type Validator_Commission_On_Conflict = {
  constraint: Validator_Commission_Constraint;
  update_columns?: Array<Validator_Commission_Update_Column>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_commission". */
export type Validator_Commission_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** primary key columns input for table: validator_commission */
export type Validator_Commission_Pk_Columns_Input = {
  validator_address: Scalars['String'];
};

/** select columns of table "validator_commission" */
export enum Validator_Commission_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** input type for updating data in table "validator_commission" */
export type Validator_Commission_Set_Input = {
  commission?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Commission_Stddev_Fields = {
  __typename?: 'validator_commission_stddev_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Commission_Stddev_Pop_Fields = {
  __typename?: 'validator_commission_stddev_pop_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Commission_Stddev_Samp_Fields = {
  __typename?: 'validator_commission_stddev_samp_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_commission" */
export type Validator_Commission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Commission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Commission_Stream_Cursor_Value_Input = {
  commission?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Commission_Sum_Fields = {
  __typename?: 'validator_commission_sum_fields';
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_commission" */
export type Validator_Commission_Sum_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** update columns of table "validator_commission" */
export enum Validator_Commission_Update_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

export type Validator_Commission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Commission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Commission_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Commission_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Commission_Var_Pop_Fields = {
  __typename?: 'validator_commission_var_pop_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_commission" */
export type Validator_Commission_Var_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Commission_Var_Samp_Fields = {
  __typename?: 'validator_commission_var_samp_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_commission" */
export type Validator_Commission_Var_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Commission_Variance_Fields = {
  __typename?: 'validator_commission_variance_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_commission" */
export type Validator_Commission_Variance_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "validator" */
export enum Validator_Constraint {
  /** unique or primary key constraint on columns "consensus_pubkey" */
  ValidatorConsensusPubkeyKey = 'validator_consensus_pubkey_key',
  /** unique or primary key constraint on columns "consensus_address" */
  ValidatorPkey = 'validator_pkey'
}

/** columns and relationships of "validator_denom" */
export type Validator_Denom = {
  __typename?: 'validator_denom';
  denom: Scalars['String'];
  height: Scalars['bigint'];
  val_addr: Scalars['String'];
  /** An object relationship */
  validator: Validator;
};

/** aggregated selection of "validator_denom" */
export type Validator_Denom_Aggregate = {
  __typename?: 'validator_denom_aggregate';
  aggregate?: Maybe<Validator_Denom_Aggregate_Fields>;
  nodes: Array<Validator_Denom>;
};

/** aggregate fields of "validator_denom" */
export type Validator_Denom_Aggregate_Fields = {
  __typename?: 'validator_denom_aggregate_fields';
  avg?: Maybe<Validator_Denom_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Denom_Max_Fields>;
  min?: Maybe<Validator_Denom_Min_Fields>;
  stddev?: Maybe<Validator_Denom_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Denom_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Denom_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Denom_Sum_Fields>;
  var_pop?: Maybe<Validator_Denom_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Denom_Var_Samp_Fields>;
  variance?: Maybe<Validator_Denom_Variance_Fields>;
};


/** aggregate fields of "validator_denom" */
export type Validator_Denom_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Denom_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Validator_Denom_Avg_Fields = {
  __typename?: 'validator_denom_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "validator_denom". All fields are combined with a logical 'AND'. */
export type Validator_Denom_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Denom_Bool_Exp>>;
  _not?: InputMaybe<Validator_Denom_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Denom_Bool_Exp>>;
  denom?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  val_addr?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
};

/** unique or primary key constraints on table "validator_denom" */
export enum Validator_Denom_Constraint {
  /** unique or primary key constraint on columns "val_addr" */
  ValidatorDenomPkey = 'validator_denom_pkey'
}

/** input type for incrementing numeric columns in table "validator_denom" */
export type Validator_Denom_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_denom" */
export type Validator_Denom_Insert_Input = {
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  val_addr?: InputMaybe<Scalars['String']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Denom_Max_Fields = {
  __typename?: 'validator_denom_max_fields';
  denom?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  val_addr?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Validator_Denom_Min_Fields = {
  __typename?: 'validator_denom_min_fields';
  denom?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  val_addr?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "validator_denom" */
export type Validator_Denom_Mutation_Response = {
  __typename?: 'validator_denom_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Denom>;
};

/** on_conflict condition type for table "validator_denom" */
export type Validator_Denom_On_Conflict = {
  constraint: Validator_Denom_Constraint;
  update_columns?: Array<Validator_Denom_Update_Column>;
  where?: InputMaybe<Validator_Denom_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_denom". */
export type Validator_Denom_Order_By = {
  denom?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  val_addr?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
};

/** primary key columns input for table: validator_denom */
export type Validator_Denom_Pk_Columns_Input = {
  val_addr: Scalars['String'];
};

/** select columns of table "validator_denom" */
export enum Validator_Denom_Select_Column {
  /** column name */
  Denom = 'denom',
  /** column name */
  Height = 'height',
  /** column name */
  ValAddr = 'val_addr'
}

/** input type for updating data in table "validator_denom" */
export type Validator_Denom_Set_Input = {
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Denom_Stddev_Fields = {
  __typename?: 'validator_denom_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Validator_Denom_Stddev_Pop_Fields = {
  __typename?: 'validator_denom_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Validator_Denom_Stddev_Samp_Fields = {
  __typename?: 'validator_denom_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "validator_denom" */
export type Validator_Denom_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Denom_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Denom_Stream_Cursor_Value_Input = {
  denom?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  val_addr?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Denom_Sum_Fields = {
  __typename?: 'validator_denom_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "validator_denom" */
export enum Validator_Denom_Update_Column {
  /** column name */
  Denom = 'denom',
  /** column name */
  Height = 'height',
  /** column name */
  ValAddr = 'val_addr'
}

export type Validator_Denom_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Denom_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Denom_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Denom_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Denom_Var_Pop_Fields = {
  __typename?: 'validator_denom_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Validator_Denom_Var_Samp_Fields = {
  __typename?: 'validator_denom_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Validator_Denom_Variance_Fields = {
  __typename?: 'validator_denom_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "validator_description" */
export type Validator_Description = {
  __typename?: 'validator_description';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "validator_description" */
export type Validator_Description_Aggregate = {
  __typename?: 'validator_description_aggregate';
  aggregate?: Maybe<Validator_Description_Aggregate_Fields>;
  nodes: Array<Validator_Description>;
};

export type Validator_Description_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Description_Aggregate_Bool_Exp_Count>;
};

export type Validator_Description_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Description_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Description_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_Fields = {
  __typename?: 'validator_description_aggregate_fields';
  avg?: Maybe<Validator_Description_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Description_Max_Fields>;
  min?: Maybe<Validator_Description_Min_Fields>;
  stddev?: Maybe<Validator_Description_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Description_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Description_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Description_Sum_Fields>;
  var_pop?: Maybe<Validator_Description_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Description_Var_Samp_Fields>;
  variance?: Maybe<Validator_Description_Variance_Fields>;
};


/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Description_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_description" */
export type Validator_Description_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Description_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Description_Max_Order_By>;
  min?: InputMaybe<Validator_Description_Min_Order_By>;
  stddev?: InputMaybe<Validator_Description_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Description_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Description_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Description_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Description_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Description_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Description_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_description" */
export type Validator_Description_Arr_Rel_Insert_Input = {
  data: Array<Validator_Description_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Description_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Description_Avg_Fields = {
  __typename?: 'validator_description_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_description" */
export type Validator_Description_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_description". All fields are combined with a logical 'AND'. */
export type Validator_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Description_Bool_Exp>>;
  _not?: InputMaybe<Validator_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Description_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  identity?: InputMaybe<String_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  security_contact?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "validator_description" */
export enum Validator_Description_Constraint {
  /** unique or primary key constraint on columns "validator_address" */
  ValidatorDescriptionPkey = 'validator_description_pkey'
}

/** input type for incrementing numeric columns in table "validator_description" */
export type Validator_Description_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_description" */
export type Validator_Description_Insert_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  identity?: InputMaybe<Scalars['String']>;
  moniker?: InputMaybe<Scalars['String']>;
  security_contact?: InputMaybe<Scalars['String']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Validator_Description_Max_Fields = {
  __typename?: 'validator_description_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_description" */
export type Validator_Description_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Description_Min_Fields = {
  __typename?: 'validator_description_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_description" */
export type Validator_Description_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_description" */
export type Validator_Description_Mutation_Response = {
  __typename?: 'validator_description_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Description>;
};

/** on_conflict condition type for table "validator_description" */
export type Validator_Description_On_Conflict = {
  constraint: Validator_Description_Constraint;
  update_columns?: Array<Validator_Description_Update_Column>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_description". */
export type Validator_Description_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: validator_description */
export type Validator_Description_Pk_Columns_Input = {
  validator_address: Scalars['String'];
};

/** select columns of table "validator_description" */
export enum Validator_Description_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "validator_description" */
export type Validator_Description_Set_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  identity?: InputMaybe<Scalars['String']>;
  moniker?: InputMaybe<Scalars['String']>;
  security_contact?: InputMaybe<Scalars['String']>;
  validator_address?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Description_Stddev_Fields = {
  __typename?: 'validator_description_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_description" */
export type Validator_Description_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Description_Stddev_Pop_Fields = {
  __typename?: 'validator_description_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_description" */
export type Validator_Description_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Description_Stddev_Samp_Fields = {
  __typename?: 'validator_description_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_description" */
export type Validator_Description_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_description" */
export type Validator_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Description_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Description_Stream_Cursor_Value_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  identity?: InputMaybe<Scalars['String']>;
  moniker?: InputMaybe<Scalars['String']>;
  security_contact?: InputMaybe<Scalars['String']>;
  validator_address?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Description_Sum_Fields = {
  __typename?: 'validator_description_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_description" */
export type Validator_Description_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** update columns of table "validator_description" */
export enum Validator_Description_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

export type Validator_Description_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Description_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Description_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Description_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Description_Var_Pop_Fields = {
  __typename?: 'validator_description_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_description" */
export type Validator_Description_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Description_Var_Samp_Fields = {
  __typename?: 'validator_description_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_description" */
export type Validator_Description_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Description_Variance_Fields = {
  __typename?: 'validator_description_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_description" */
export type Validator_Description_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_info" */
export type Validator_Info = {
  __typename?: 'validator_info';
  /** An object relationship */
  account?: Maybe<Account>;
  consensus_address: Scalars['String'];
  height: Scalars['bigint'];
  max_change_rate: Scalars['String'];
  max_rate: Scalars['String'];
  operator_address: Scalars['String'];
  self_delegate_address?: Maybe<Scalars['String']>;
  /** An object relationship */
  validator: Validator;
};

/** aggregated selection of "validator_info" */
export type Validator_Info_Aggregate = {
  __typename?: 'validator_info_aggregate';
  aggregate?: Maybe<Validator_Info_Aggregate_Fields>;
  nodes: Array<Validator_Info>;
};

export type Validator_Info_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Info_Aggregate_Bool_Exp_Count>;
};

export type Validator_Info_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Info_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_info" */
export type Validator_Info_Aggregate_Fields = {
  __typename?: 'validator_info_aggregate_fields';
  avg?: Maybe<Validator_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Info_Max_Fields>;
  min?: Maybe<Validator_Info_Min_Fields>;
  stddev?: Maybe<Validator_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Info_Sum_Fields>;
  var_pop?: Maybe<Validator_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Info_Var_Samp_Fields>;
  variance?: Maybe<Validator_Info_Variance_Fields>;
};


/** aggregate fields of "validator_info" */
export type Validator_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_info" */
export type Validator_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Info_Max_Order_By>;
  min?: InputMaybe<Validator_Info_Min_Order_By>;
  stddev?: InputMaybe<Validator_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_info" */
export type Validator_Info_Arr_Rel_Insert_Input = {
  data: Array<Validator_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Info_Avg_Fields = {
  __typename?: 'validator_info_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_info" */
export type Validator_Info_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_info". All fields are combined with a logical 'AND'. */
export type Validator_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Info_Bool_Exp>>;
  _not?: InputMaybe<Validator_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Info_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  max_change_rate?: InputMaybe<String_Comparison_Exp>;
  max_rate?: InputMaybe<String_Comparison_Exp>;
  operator_address?: InputMaybe<String_Comparison_Exp>;
  self_delegate_address?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
};

/** unique or primary key constraints on table "validator_info" */
export enum Validator_Info_Constraint {
  /** unique or primary key constraint on columns "operator_address" */
  ValidatorInfoOperatorAddressKey = 'validator_info_operator_address_key',
  /** unique or primary key constraint on columns "consensus_address" */
  ValidatorInfoPkey = 'validator_info_pkey'
}

/** input type for incrementing numeric columns in table "validator_info" */
export type Validator_Info_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_info" */
export type Validator_Info_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  consensus_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  max_change_rate?: InputMaybe<Scalars['String']>;
  max_rate?: InputMaybe<Scalars['String']>;
  operator_address?: InputMaybe<Scalars['String']>;
  self_delegate_address?: InputMaybe<Scalars['String']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Info_Max_Fields = {
  __typename?: 'validator_info_max_fields';
  consensus_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_info" */
export type Validator_Info_Max_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Info_Min_Fields = {
  __typename?: 'validator_info_min_fields';
  consensus_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_info" */
export type Validator_Info_Min_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_info" */
export type Validator_Info_Mutation_Response = {
  __typename?: 'validator_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Info>;
};

/** input type for inserting object relation for remote table "validator_info" */
export type Validator_Info_Obj_Rel_Insert_Input = {
  data: Validator_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Info_On_Conflict>;
};

/** on_conflict condition type for table "validator_info" */
export type Validator_Info_On_Conflict = {
  constraint: Validator_Info_Constraint;
  update_columns?: Array<Validator_Info_Update_Column>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_info". */
export type Validator_Info_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
};

/** primary key columns input for table: validator_info */
export type Validator_Info_Pk_Columns_Input = {
  consensus_address: Scalars['String'];
};

/** select columns of table "validator_info" */
export enum Validator_Info_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  Height = 'height',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

/** input type for updating data in table "validator_info" */
export type Validator_Info_Set_Input = {
  consensus_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  max_change_rate?: InputMaybe<Scalars['String']>;
  max_rate?: InputMaybe<Scalars['String']>;
  operator_address?: InputMaybe<Scalars['String']>;
  self_delegate_address?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Info_Stddev_Fields = {
  __typename?: 'validator_info_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_info" */
export type Validator_Info_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Info_Stddev_Pop_Fields = {
  __typename?: 'validator_info_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_info" */
export type Validator_Info_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Info_Stddev_Samp_Fields = {
  __typename?: 'validator_info_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_info" */
export type Validator_Info_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_info" */
export type Validator_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Info_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  max_change_rate?: InputMaybe<Scalars['String']>;
  max_rate?: InputMaybe<Scalars['String']>;
  operator_address?: InputMaybe<Scalars['String']>;
  self_delegate_address?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Info_Sum_Fields = {
  __typename?: 'validator_info_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_info" */
export type Validator_Info_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** update columns of table "validator_info" */
export enum Validator_Info_Update_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  Height = 'height',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

export type Validator_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Info_Var_Pop_Fields = {
  __typename?: 'validator_info_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_info" */
export type Validator_Info_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Info_Var_Samp_Fields = {
  __typename?: 'validator_info_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_info" */
export type Validator_Info_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Info_Variance_Fields = {
  __typename?: 'validator_info_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_info" */
export type Validator_Info_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** input type for inserting data into table "validator" */
export type Validator_Insert_Input = {
  blocks?: InputMaybe<Block_Arr_Rel_Insert_Input>;
  consensus_address?: InputMaybe<Scalars['String']>;
  consensus_pubkey?: InputMaybe<Scalars['String']>;
  double_sign_votes?: InputMaybe<Double_Sign_Vote_Arr_Rel_Insert_Input>;
  pre_commits?: InputMaybe<Pre_Commit_Arr_Rel_Insert_Input>;
  proposal_validator_status_snapshot?: InputMaybe<Proposal_Validator_Status_Snapshot_Obj_Rel_Insert_Input>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Arr_Rel_Insert_Input>;
  validator_commissions?: InputMaybe<Validator_Commission_Arr_Rel_Insert_Input>;
  validator_descriptions?: InputMaybe<Validator_Description_Arr_Rel_Insert_Input>;
  validator_info?: InputMaybe<Validator_Info_Obj_Rel_Insert_Input>;
  validator_infos?: InputMaybe<Validator_Info_Arr_Rel_Insert_Input>;
  validator_signing_infos?: InputMaybe<Validator_Signing_Info_Arr_Rel_Insert_Input>;
  validator_statuses?: InputMaybe<Validator_Status_Arr_Rel_Insert_Input>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Max_Fields = {
  __typename?: 'validator_max_fields';
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Validator_Min_Fields = {
  __typename?: 'validator_min_fields';
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "validator" */
export type Validator_Mutation_Response = {
  __typename?: 'validator_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator>;
};

/** input type for inserting object relation for remote table "validator" */
export type Validator_Obj_Rel_Insert_Input = {
  data: Validator_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_On_Conflict>;
};

/** on_conflict condition type for table "validator" */
export type Validator_On_Conflict = {
  constraint: Validator_Constraint;
  update_columns?: Array<Validator_Update_Column>;
  where?: InputMaybe<Validator_Bool_Exp>;
};

/** Ordering options when selecting data from "validator". */
export type Validator_Order_By = {
  blocks_aggregate?: InputMaybe<Block_Aggregate_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  consensus_pubkey?: InputMaybe<Order_By>;
  double_sign_votes_aggregate?: InputMaybe<Double_Sign_Vote_Aggregate_Order_By>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>;
  proposal_validator_status_snapshot?: InputMaybe<Proposal_Validator_Status_Snapshot_Order_By>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Order_By>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>;
  validator_signing_infos_aggregate?: InputMaybe<Validator_Signing_Info_Aggregate_Order_By>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** primary key columns input for table: validator */
export type Validator_Pk_Columns_Input = {
  consensus_address: Scalars['String'];
};

/** select columns of table "validator" */
export enum Validator_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

/** input type for updating data in table "validator" */
export type Validator_Set_Input = {
  consensus_address?: InputMaybe<Scalars['String']>;
  consensus_pubkey?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "validator_signing_info" */
export type Validator_Signing_Info = {
  __typename?: 'validator_signing_info';
  height: Scalars['bigint'];
  index_offset: Scalars['bigint'];
  jailed_until: Scalars['timestamp'];
  missed_blocks_counter: Scalars['bigint'];
  start_height: Scalars['bigint'];
  tombstoned: Scalars['Boolean'];
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate = {
  __typename?: 'validator_signing_info_aggregate';
  aggregate?: Maybe<Validator_Signing_Info_Aggregate_Fields>;
  nodes: Array<Validator_Signing_Info>;
};

export type Validator_Signing_Info_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Validator_Signing_Info_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Validator_Signing_Info_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Validator_Signing_Info_Aggregate_Bool_Exp_Count>;
};

export type Validator_Signing_Info_Aggregate_Bool_Exp_Bool_And = {
  arguments: Validator_Signing_Info_Select_Column_Validator_Signing_Info_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Signing_Info_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Validator_Signing_Info_Select_Column_Validator_Signing_Info_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Signing_Info_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Fields = {
  __typename?: 'validator_signing_info_aggregate_fields';
  avg?: Maybe<Validator_Signing_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Signing_Info_Max_Fields>;
  min?: Maybe<Validator_Signing_Info_Min_Fields>;
  stddev?: Maybe<Validator_Signing_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Signing_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Signing_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Signing_Info_Sum_Fields>;
  var_pop?: Maybe<Validator_Signing_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Signing_Info_Var_Samp_Fields>;
  variance?: Maybe<Validator_Signing_Info_Variance_Fields>;
};


/** aggregate fields of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Signing_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Signing_Info_Max_Order_By>;
  min?: InputMaybe<Validator_Signing_Info_Min_Order_By>;
  stddev?: InputMaybe<Validator_Signing_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Signing_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Signing_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Signing_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Signing_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Signing_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Signing_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_signing_info" */
export type Validator_Signing_Info_Arr_Rel_Insert_Input = {
  data: Array<Validator_Signing_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Signing_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Signing_Info_Avg_Fields = {
  __typename?: 'validator_signing_info_avg_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_signing_info". All fields are combined with a logical 'AND'. */
export type Validator_Signing_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>;
  _not?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  index_offset?: InputMaybe<Bigint_Comparison_Exp>;
  jailed_until?: InputMaybe<Timestamp_Comparison_Exp>;
  missed_blocks_counter?: InputMaybe<Bigint_Comparison_Exp>;
  start_height?: InputMaybe<Bigint_Comparison_Exp>;
  tombstoned?: InputMaybe<Boolean_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "validator_signing_info" */
export enum Validator_Signing_Info_Constraint {
  /** unique or primary key constraint on columns "validator_address" */
  ValidatorSigningInfoPkey = 'validator_signing_info_pkey'
}

/** input type for incrementing numeric columns in table "validator_signing_info" */
export type Validator_Signing_Info_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index_offset?: InputMaybe<Scalars['bigint']>;
  missed_blocks_counter?: InputMaybe<Scalars['bigint']>;
  start_height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_signing_info" */
export type Validator_Signing_Info_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index_offset?: InputMaybe<Scalars['bigint']>;
  jailed_until?: InputMaybe<Scalars['timestamp']>;
  missed_blocks_counter?: InputMaybe<Scalars['bigint']>;
  start_height?: InputMaybe<Scalars['bigint']>;
  tombstoned?: InputMaybe<Scalars['Boolean']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Validator_Signing_Info_Max_Fields = {
  __typename?: 'validator_signing_info_max_fields';
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  jailed_until?: Maybe<Scalars['timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Signing_Info_Min_Fields = {
  __typename?: 'validator_signing_info_min_fields';
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  jailed_until?: Maybe<Scalars['timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_signing_info" */
export type Validator_Signing_Info_Mutation_Response = {
  __typename?: 'validator_signing_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Signing_Info>;
};

/** on_conflict condition type for table "validator_signing_info" */
export type Validator_Signing_Info_On_Conflict = {
  constraint: Validator_Signing_Info_Constraint;
  update_columns?: Array<Validator_Signing_Info_Update_Column>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_signing_info". */
export type Validator_Signing_Info_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  tombstoned?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** primary key columns input for table: validator_signing_info */
export type Validator_Signing_Info_Pk_Columns_Input = {
  validator_address: Scalars['String'];
};

/** select columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IndexOffset = 'index_offset',
  /** column name */
  JailedUntil = 'jailed_until',
  /** column name */
  MissedBlocksCounter = 'missed_blocks_counter',
  /** column name */
  StartHeight = 'start_height',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** select "validator_signing_info_aggregate_bool_exp_bool_and_arguments_columns" columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column_Validator_Signing_Info_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Tombstoned = 'tombstoned'
}

/** select "validator_signing_info_aggregate_bool_exp_bool_or_arguments_columns" columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column_Validator_Signing_Info_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Tombstoned = 'tombstoned'
}

/** input type for updating data in table "validator_signing_info" */
export type Validator_Signing_Info_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index_offset?: InputMaybe<Scalars['bigint']>;
  jailed_until?: InputMaybe<Scalars['timestamp']>;
  missed_blocks_counter?: InputMaybe<Scalars['bigint']>;
  start_height?: InputMaybe<Scalars['bigint']>;
  tombstoned?: InputMaybe<Scalars['Boolean']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Signing_Info_Stddev_Fields = {
  __typename?: 'validator_signing_info_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Signing_Info_Stddev_Pop_Fields = {
  __typename?: 'validator_signing_info_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Signing_Info_Stddev_Samp_Fields = {
  __typename?: 'validator_signing_info_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_signing_info" */
export type Validator_Signing_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Signing_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Signing_Info_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index_offset?: InputMaybe<Scalars['bigint']>;
  jailed_until?: InputMaybe<Scalars['timestamp']>;
  missed_blocks_counter?: InputMaybe<Scalars['bigint']>;
  start_height?: InputMaybe<Scalars['bigint']>;
  tombstoned?: InputMaybe<Scalars['Boolean']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Signing_Info_Sum_Fields = {
  __typename?: 'validator_signing_info_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** update columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IndexOffset = 'index_offset',
  /** column name */
  JailedUntil = 'jailed_until',
  /** column name */
  MissedBlocksCounter = 'missed_blocks_counter',
  /** column name */
  StartHeight = 'start_height',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

export type Validator_Signing_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Signing_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Signing_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Signing_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Signing_Info_Var_Pop_Fields = {
  __typename?: 'validator_signing_info_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Signing_Info_Var_Samp_Fields = {
  __typename?: 'validator_signing_info_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Signing_Info_Variance_Fields = {
  __typename?: 'validator_signing_info_variance_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status';
  height: Scalars['bigint'];
  jailed: Scalars['Boolean'];
  status: Scalars['Int'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate';
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>;
  nodes: Array<Validator_Status>;
};

export type Validator_Status_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Count>;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields';
  avg?: Maybe<Validator_Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Status_Max_Fields>;
  min?: Maybe<Validator_Status_Min_Fields>;
  stddev?: Maybe<Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Validator_Status_Variance_Fields>;
};


/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_status" */
export type Validator_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Status_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Status_Max_Order_By>;
  min?: InputMaybe<Validator_Status_Min_Order_By>;
  stddev?: InputMaybe<Validator_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Status_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_status" */
export type Validator_Status_Arr_Rel_Insert_Input = {
  data: Array<Validator_Status_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Status_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_status" */
export type Validator_Status_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  _not?: InputMaybe<Validator_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "validator_status" */
export enum Validator_Status_Constraint {
  /** unique or primary key constraint on columns "validator_address" */
  ValidatorStatusPkey = 'validator_status_pkey'
}

/** input type for incrementing numeric columns in table "validator_status" */
export type Validator_Status_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "validator_status" */
export type Validator_Status_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_status" */
export type Validator_Status_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_status" */
export type Validator_Status_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_status" */
export type Validator_Status_Mutation_Response = {
  __typename?: 'validator_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Status>;
};

/** on_conflict condition type for table "validator_status" */
export type Validator_Status_On_Conflict = {
  constraint: Validator_Status_Constraint;
  update_columns?: Array<Validator_Status_Update_Column>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  height?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** primary key columns input for table: validator_status */
export type Validator_Status_Pk_Columns_Input = {
  validator_address: Scalars['String'];
};

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** select "validator_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** select "validator_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** input type for updating data in table "validator_status" */
export type Validator_Status_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_status" */
export type Validator_Status_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_status" */
export type Validator_Status_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_status" */
export type Validator_Status_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_status" */
export type Validator_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Status_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "validator_status" */
export type Validator_Status_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** update columns of table "validator_status" */
export enum Validator_Status_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address'
}

export type Validator_Status_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Status_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Status_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_status" */
export type Validator_Status_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_status" */
export type Validator_Status_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_status" */
export type Validator_Status_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator" */
export type Validator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']>;
  consensus_pubkey?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "validator_summary" */
export type Validator_Summary = {
  __typename?: 'validator_summary';
  address?: Maybe<Scalars['String']>;
  commission?: Maybe<Scalars['numeric']>;
  jailed?: Maybe<Scalars['Boolean']>;
  moniker?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "validator_summary" */
export type Validator_Summary_Aggregate = {
  __typename?: 'validator_summary_aggregate';
  aggregate?: Maybe<Validator_Summary_Aggregate_Fields>;
  nodes: Array<Validator_Summary>;
};

/** aggregate fields of "validator_summary" */
export type Validator_Summary_Aggregate_Fields = {
  __typename?: 'validator_summary_aggregate_fields';
  avg?: Maybe<Validator_Summary_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Summary_Max_Fields>;
  min?: Maybe<Validator_Summary_Min_Fields>;
  stddev?: Maybe<Validator_Summary_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Summary_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Summary_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Summary_Sum_Fields>;
  var_pop?: Maybe<Validator_Summary_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Summary_Var_Samp_Fields>;
  variance?: Maybe<Validator_Summary_Variance_Fields>;
};


/** aggregate fields of "validator_summary" */
export type Validator_Summary_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Summary_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Validator_Summary_Avg_Fields = {
  __typename?: 'validator_summary_avg_fields';
  commission?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "validator_summary". All fields are combined with a logical 'AND'. */
export type Validator_Summary_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Summary_Bool_Exp>>;
  _not?: InputMaybe<Validator_Summary_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Summary_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  commission?: InputMaybe<Numeric_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Summary_Max_Fields = {
  __typename?: 'validator_summary_max_fields';
  address?: Maybe<Scalars['String']>;
  commission?: Maybe<Scalars['numeric']>;
  moniker?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Validator_Summary_Min_Fields = {
  __typename?: 'validator_summary_min_fields';
  address?: Maybe<Scalars['String']>;
  commission?: Maybe<Scalars['numeric']>;
  moniker?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "validator_summary". */
export type Validator_Summary_Order_By = {
  address?: InputMaybe<Order_By>;
  commission?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "validator_summary" */
export enum Validator_Summary_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Commission = 'commission',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  Status = 'status',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Validator_Summary_Stddev_Fields = {
  __typename?: 'validator_summary_stddev_fields';
  commission?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Validator_Summary_Stddev_Pop_Fields = {
  __typename?: 'validator_summary_stddev_pop_fields';
  commission?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Validator_Summary_Stddev_Samp_Fields = {
  __typename?: 'validator_summary_stddev_samp_fields';
  commission?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "validator_summary" */
export type Validator_Summary_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Summary_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Summary_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  commission?: InputMaybe<Scalars['numeric']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  moniker?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Validator_Summary_Sum_Fields = {
  __typename?: 'validator_summary_sum_fields';
  commission?: Maybe<Scalars['numeric']>;
  status?: Maybe<Scalars['Int']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Validator_Summary_Var_Pop_Fields = {
  __typename?: 'validator_summary_var_pop_fields';
  commission?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Validator_Summary_Var_Samp_Fields = {
  __typename?: 'validator_summary_var_samp_fields';
  commission?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Validator_Summary_Variance_Fields = {
  __typename?: 'validator_summary_variance_fields';
  commission?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** update columns of table "validator" */
export enum Validator_Update_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

export type Validator_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Bool_Exp;
};

/** columns and relationships of "validator_voting_power" */
export type Validator_Voting_Power = {
  __typename?: 'validator_voting_power';
  /** An object relationship */
  block: Block;
  height: Scalars['bigint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate = {
  __typename?: 'validator_voting_power_aggregate';
  aggregate?: Maybe<Validator_Voting_Power_Aggregate_Fields>;
  nodes: Array<Validator_Voting_Power>;
};

export type Validator_Voting_Power_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp_Count>;
};

export type Validator_Voting_Power_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'validator_voting_power_aggregate_fields';
  avg?: Maybe<Validator_Voting_Power_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Voting_Power_Max_Fields>;
  min?: Maybe<Validator_Voting_Power_Min_Fields>;
  stddev?: Maybe<Validator_Voting_Power_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Voting_Power_Sum_Fields>;
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Fields>;
  variance?: Maybe<Validator_Voting_Power_Variance_Fields>;
};


/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Voting_Power_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Voting_Power_Max_Order_By>;
  min?: InputMaybe<Validator_Voting_Power_Min_Order_By>;
  stddev?: InputMaybe<Validator_Voting_Power_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Voting_Power_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Voting_Power_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Voting_Power_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Voting_Power_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Voting_Power_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Voting_Power_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_voting_power" */
export type Validator_Voting_Power_Arr_Rel_Insert_Input = {
  data: Array<Validator_Voting_Power_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Voting_Power_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Voting_Power_Avg_Fields = {
  __typename?: 'validator_voting_power_avg_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_voting_power". All fields are combined with a logical 'AND'. */
export type Validator_Voting_Power_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>;
  _not?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "validator_voting_power" */
export enum Validator_Voting_Power_Constraint {
  /** unique or primary key constraint on columns "validator_address" */
  ValidatorVotingPowerPkey = 'validator_voting_power_pkey'
}

/** input type for incrementing numeric columns in table "validator_voting_power" */
export type Validator_Voting_Power_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_voting_power" */
export type Validator_Voting_Power_Insert_Input = {
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Validator_Voting_Power_Max_Fields = {
  __typename?: 'validator_voting_power_max_fields';
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Voting_Power_Min_Fields = {
  __typename?: 'validator_voting_power_min_fields';
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_voting_power" */
export type Validator_Voting_Power_Mutation_Response = {
  __typename?: 'validator_voting_power_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Voting_Power>;
};

/** on_conflict condition type for table "validator_voting_power" */
export type Validator_Voting_Power_On_Conflict = {
  constraint: Validator_Voting_Power_Constraint;
  update_columns?: Array<Validator_Voting_Power_Update_Column>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_voting_power". */
export type Validator_Voting_Power_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  height?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** primary key columns input for table: validator_voting_power */
export type Validator_Voting_Power_Pk_Columns_Input = {
  validator_address: Scalars['String'];
};

/** select columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** input type for updating data in table "validator_voting_power" */
export type Validator_Voting_Power_Set_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'validator_voting_power_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'validator_voting_power_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'validator_voting_power_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_voting_power" */
export type Validator_Voting_Power_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Voting_Power_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Voting_Power_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Validator_Voting_Power_Sum_Fields = {
  __typename?: 'validator_voting_power_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** update columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

export type Validator_Voting_Power_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Voting_Power_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Voting_Power_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Voting_Power_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'validator_voting_power_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'validator_voting_power_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Voting_Power_Variance_Fields = {
  __typename?: 'validator_voting_power_variance_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "vesting_account" */
export type Vesting_Account = {
  __typename?: 'vesting_account';
  /** An object relationship */
  account: Account;
  address: Scalars['String'];
  end_time: Scalars['timestamp'];
  id: Scalars['Int'];
  original_vesting: Array<Scalars['coin']>;
  start_time?: Maybe<Scalars['timestamp']>;
  type: Scalars['String'];
  /** An array relationship */
  vesting_periods: Array<Vesting_Period>;
  /** An aggregate relationship */
  vesting_periods_aggregate: Vesting_Period_Aggregate;
};


/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};


/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_Periods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** aggregated selection of "vesting_account" */
export type Vesting_Account_Aggregate = {
  __typename?: 'vesting_account_aggregate';
  aggregate?: Maybe<Vesting_Account_Aggregate_Fields>;
  nodes: Array<Vesting_Account>;
};

export type Vesting_Account_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vesting_Account_Aggregate_Bool_Exp_Count>;
};

export type Vesting_Account_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vesting_Account_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vesting_account" */
export type Vesting_Account_Aggregate_Fields = {
  __typename?: 'vesting_account_aggregate_fields';
  avg?: Maybe<Vesting_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vesting_Account_Max_Fields>;
  min?: Maybe<Vesting_Account_Min_Fields>;
  stddev?: Maybe<Vesting_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Vesting_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vesting_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Vesting_Account_Sum_Fields>;
  var_pop?: Maybe<Vesting_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Vesting_Account_Var_Samp_Fields>;
  variance?: Maybe<Vesting_Account_Variance_Fields>;
};


/** aggregate fields of "vesting_account" */
export type Vesting_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vesting_account" */
export type Vesting_Account_Aggregate_Order_By = {
  avg?: InputMaybe<Vesting_Account_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vesting_Account_Max_Order_By>;
  min?: InputMaybe<Vesting_Account_Min_Order_By>;
  stddev?: InputMaybe<Vesting_Account_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vesting_Account_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vesting_Account_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vesting_Account_Sum_Order_By>;
  var_pop?: InputMaybe<Vesting_Account_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vesting_Account_Var_Samp_Order_By>;
  variance?: InputMaybe<Vesting_Account_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vesting_account" */
export type Vesting_Account_Arr_Rel_Insert_Input = {
  data: Array<Vesting_Account_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vesting_Account_On_Conflict>;
};

/** aggregate avg on columns */
export type Vesting_Account_Avg_Fields = {
  __typename?: 'vesting_account_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vesting_account" */
export type Vesting_Account_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_account". All fields are combined with a logical 'AND'. */
export type Vesting_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Account_Bool_Exp>>;
  _not?: InputMaybe<Vesting_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Vesting_Account_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  original_vesting?: InputMaybe<Coin_Array_Comparison_Exp>;
  start_time?: InputMaybe<Timestamp_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  vesting_periods?: InputMaybe<Vesting_Period_Bool_Exp>;
  vesting_periods_aggregate?: InputMaybe<Vesting_Period_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "vesting_account" */
export enum Vesting_Account_Constraint {
  /** unique or primary key constraint on columns "address" */
  VestingAccountAddressIdx = 'vesting_account_address_idx',
  /** unique or primary key constraint on columns "id" */
  VestingAccountPkey = 'vesting_account_pkey'
}

/** input type for incrementing numeric columns in table "vesting_account" */
export type Vesting_Account_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vesting_account" */
export type Vesting_Account_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  address?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  original_vesting?: InputMaybe<Array<Scalars['coin']>>;
  start_time?: InputMaybe<Scalars['timestamp']>;
  type?: InputMaybe<Scalars['String']>;
  vesting_periods?: InputMaybe<Vesting_Period_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Vesting_Account_Max_Fields = {
  __typename?: 'vesting_account_max_fields';
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  original_vesting?: Maybe<Array<Scalars['coin']>>;
  start_time?: Maybe<Scalars['timestamp']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vesting_account" */
export type Vesting_Account_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_vesting?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vesting_Account_Min_Fields = {
  __typename?: 'vesting_account_min_fields';
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  original_vesting?: Maybe<Array<Scalars['coin']>>;
  start_time?: Maybe<Scalars['timestamp']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vesting_account" */
export type Vesting_Account_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_vesting?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vesting_account" */
export type Vesting_Account_Mutation_Response = {
  __typename?: 'vesting_account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vesting_Account>;
};

/** input type for inserting object relation for remote table "vesting_account" */
export type Vesting_Account_Obj_Rel_Insert_Input = {
  data: Vesting_Account_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vesting_Account_On_Conflict>;
};

/** on_conflict condition type for table "vesting_account" */
export type Vesting_Account_On_Conflict = {
  constraint: Vesting_Account_Constraint;
  update_columns?: Array<Vesting_Account_Update_Column>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "vesting_account". */
export type Vesting_Account_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_vesting?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vesting_periods_aggregate?: InputMaybe<Vesting_Period_Aggregate_Order_By>;
};

/** primary key columns input for table: vesting_account */
export type Vesting_Account_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vesting_account" */
export enum Vesting_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalVesting = 'original_vesting',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "vesting_account" */
export type Vesting_Account_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  original_vesting?: InputMaybe<Array<Scalars['coin']>>;
  start_time?: InputMaybe<Scalars['timestamp']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Vesting_Account_Stddev_Fields = {
  __typename?: 'vesting_account_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vesting_account" */
export type Vesting_Account_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vesting_Account_Stddev_Pop_Fields = {
  __typename?: 'vesting_account_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vesting_account" */
export type Vesting_Account_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vesting_Account_Stddev_Samp_Fields = {
  __typename?: 'vesting_account_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vesting_account" */
export type Vesting_Account_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vesting_account" */
export type Vesting_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vesting_Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vesting_Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  original_vesting?: InputMaybe<Array<Scalars['coin']>>;
  start_time?: InputMaybe<Scalars['timestamp']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Vesting_Account_Sum_Fields = {
  __typename?: 'vesting_account_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vesting_account" */
export type Vesting_Account_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "vesting_account" */
export enum Vesting_Account_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalVesting = 'original_vesting',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Type = 'type'
}

export type Vesting_Account_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vesting_Account_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vesting_Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vesting_Account_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vesting_Account_Var_Pop_Fields = {
  __typename?: 'vesting_account_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vesting_account" */
export type Vesting_Account_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vesting_Account_Var_Samp_Fields = {
  __typename?: 'vesting_account_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vesting_account" */
export type Vesting_Account_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vesting_Account_Variance_Fields = {
  __typename?: 'vesting_account_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vesting_account" */
export type Vesting_Account_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "vesting_period" */
export type Vesting_Period = {
  __typename?: 'vesting_period';
  amount: Array<Scalars['coin']>;
  length: Scalars['bigint'];
  period_order: Scalars['bigint'];
  /** An object relationship */
  vesting_account: Vesting_Account;
  vesting_account_id: Scalars['bigint'];
};

/** aggregated selection of "vesting_period" */
export type Vesting_Period_Aggregate = {
  __typename?: 'vesting_period_aggregate';
  aggregate?: Maybe<Vesting_Period_Aggregate_Fields>;
  nodes: Array<Vesting_Period>;
};

export type Vesting_Period_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vesting_Period_Aggregate_Bool_Exp_Count>;
};

export type Vesting_Period_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Vesting_Period_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vesting_period" */
export type Vesting_Period_Aggregate_Fields = {
  __typename?: 'vesting_period_aggregate_fields';
  avg?: Maybe<Vesting_Period_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vesting_Period_Max_Fields>;
  min?: Maybe<Vesting_Period_Min_Fields>;
  stddev?: Maybe<Vesting_Period_Stddev_Fields>;
  stddev_pop?: Maybe<Vesting_Period_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vesting_Period_Stddev_Samp_Fields>;
  sum?: Maybe<Vesting_Period_Sum_Fields>;
  var_pop?: Maybe<Vesting_Period_Var_Pop_Fields>;
  var_samp?: Maybe<Vesting_Period_Var_Samp_Fields>;
  variance?: Maybe<Vesting_Period_Variance_Fields>;
};


/** aggregate fields of "vesting_period" */
export type Vesting_Period_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vesting_period" */
export type Vesting_Period_Aggregate_Order_By = {
  avg?: InputMaybe<Vesting_Period_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vesting_Period_Max_Order_By>;
  min?: InputMaybe<Vesting_Period_Min_Order_By>;
  stddev?: InputMaybe<Vesting_Period_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vesting_Period_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vesting_Period_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vesting_Period_Sum_Order_By>;
  var_pop?: InputMaybe<Vesting_Period_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vesting_Period_Var_Samp_Order_By>;
  variance?: InputMaybe<Vesting_Period_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vesting_period" */
export type Vesting_Period_Arr_Rel_Insert_Input = {
  data: Array<Vesting_Period_Insert_Input>;
};

/** aggregate avg on columns */
export type Vesting_Period_Avg_Fields = {
  __typename?: 'vesting_period_avg_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vesting_period" */
export type Vesting_Period_Avg_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_period". All fields are combined with a logical 'AND'. */
export type Vesting_Period_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Period_Bool_Exp>>;
  _not?: InputMaybe<Vesting_Period_Bool_Exp>;
  _or?: InputMaybe<Array<Vesting_Period_Bool_Exp>>;
  amount?: InputMaybe<Coin_Array_Comparison_Exp>;
  length?: InputMaybe<Bigint_Comparison_Exp>;
  period_order?: InputMaybe<Bigint_Comparison_Exp>;
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>;
  vesting_account_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "vesting_period" */
export type Vesting_Period_Inc_Input = {
  length?: InputMaybe<Scalars['bigint']>;
  period_order?: InputMaybe<Scalars['bigint']>;
  vesting_account_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "vesting_period" */
export type Vesting_Period_Insert_Input = {
  amount?: InputMaybe<Array<Scalars['coin']>>;
  length?: InputMaybe<Scalars['bigint']>;
  period_order?: InputMaybe<Scalars['bigint']>;
  vesting_account?: InputMaybe<Vesting_Account_Obj_Rel_Insert_Input>;
  vesting_account_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Vesting_Period_Max_Fields = {
  __typename?: 'vesting_period_max_fields';
  amount?: Maybe<Array<Scalars['coin']>>;
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "vesting_period" */
export type Vesting_Period_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vesting_Period_Min_Fields = {
  __typename?: 'vesting_period_min_fields';
  amount?: Maybe<Array<Scalars['coin']>>;
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "vesting_period" */
export type Vesting_Period_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vesting_period" */
export type Vesting_Period_Mutation_Response = {
  __typename?: 'vesting_period_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vesting_Period>;
};

/** Ordering options when selecting data from "vesting_period". */
export type Vesting_Period_Order_By = {
  amount?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account?: InputMaybe<Vesting_Account_Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** select columns of table "vesting_period" */
export enum Vesting_Period_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Length = 'length',
  /** column name */
  PeriodOrder = 'period_order',
  /** column name */
  VestingAccountId = 'vesting_account_id'
}

/** input type for updating data in table "vesting_period" */
export type Vesting_Period_Set_Input = {
  amount?: InputMaybe<Array<Scalars['coin']>>;
  length?: InputMaybe<Scalars['bigint']>;
  period_order?: InputMaybe<Scalars['bigint']>;
  vesting_account_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Vesting_Period_Stddev_Fields = {
  __typename?: 'vesting_period_stddev_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vesting_Period_Stddev_Pop_Fields = {
  __typename?: 'vesting_period_stddev_pop_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vesting_Period_Stddev_Samp_Fields = {
  __typename?: 'vesting_period_stddev_samp_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vesting_period" */
export type Vesting_Period_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vesting_Period_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vesting_Period_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Array<Scalars['coin']>>;
  length?: InputMaybe<Scalars['bigint']>;
  period_order?: InputMaybe<Scalars['bigint']>;
  vesting_account_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Vesting_Period_Sum_Fields = {
  __typename?: 'vesting_period_sum_fields';
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "vesting_period" */
export type Vesting_Period_Sum_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

export type Vesting_Period_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vesting_Period_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vesting_Period_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vesting_Period_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vesting_Period_Var_Pop_Fields = {
  __typename?: 'vesting_period_var_pop_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vesting_period" */
export type Vesting_Period_Var_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vesting_Period_Var_Samp_Fields = {
  __typename?: 'vesting_period_var_samp_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vesting_period" */
export type Vesting_Period_Var_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vesting_Period_Variance_Fields = {
  __typename?: 'vesting_period_variance_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vesting_period" */
export type Vesting_Period_Variance_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

export type AccountCommissionQueryVariables = Exact<{
  validatorAddress: Scalars['String'];
}>;


export type AccountCommissionQuery = { commission?: { __typename?: 'ActionValidatorCommissionAmount', coins?: Array<any | null> | null } | null };

export type AccountWithdrawalAddressQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountWithdrawalAddressQuery = { withdrawalAddress: { __typename?: 'ActionAddress', address: string } };

export type AccountBalancesQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountBalancesQuery = { accountBalances?: { __typename?: 'ActionBalance', coins?: Array<any | null> | null } | null };

export type AccountDelegationBalanceQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountDelegationBalanceQuery = { delegationBalance?: { __typename?: 'ActionBalance', coins?: Array<any | null> | null } | null };

export type AccountUnbondingBalanceQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountUnbondingBalanceQuery = { unbondingBalance?: { __typename?: 'ActionBalance', coins?: Array<any | null> | null } | null };

export type AccountDelegationRewardsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountDelegationRewardsQuery = { delegationRewards?: Array<{ __typename?: 'ActionDelegationReward', coins?: Array<any | null> | null, validatorAddress: string } | null> | null };

export type AccountDelegationsQueryVariables = Exact<{
  address: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type AccountDelegationsQuery = { delegations?: { __typename?: 'ActionDelegationResponse', delegations?: Array<any | null> | null, pagination?: any | null } | null };

export type AccountRedelegationsQueryVariables = Exact<{
  address: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type AccountRedelegationsQuery = { redelegations?: { __typename?: 'ActionRedelegationResponse', redelegations?: Array<any | null> | null, pagination?: any | null } | null };

export type AccountUndelegationsQueryVariables = Exact<{
  address: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type AccountUndelegationsQuery = { undelegations?: { __typename?: 'ActionUnbondingDelegationResponse', pagination?: any | null, undelegations?: Array<any | null> | null } | null };

export type ActiveValidatorCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveValidatorCountQuery = { activeTotal: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null }, inactiveTotal: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null }, total: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null } };

export type BlockDetailsQueryVariables = Exact<{
  height?: InputMaybe<Scalars['bigint']>;
  signatureHeight?: InputMaybe<Scalars['bigint']>;
}>;


export type BlockDetailsQuery = { transaction: Array<{ __typename?: 'transaction', height: any, hash: string, messages: any, success: boolean, logs?: any | null }>, block: Array<{ __typename?: 'block', height: any, hash: string, timestamp: any, txs?: number | null, validator?: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } | null }>, preCommitsAggregate: { __typename?: 'pre_commit_aggregate', aggregate?: { __typename?: 'pre_commit_aggregate_fields', sum?: { __typename?: 'pre_commit_sum_fields', votingPower?: any | null } | null } | null }, preCommits: Array<{ __typename?: 'pre_commit', validator: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } }> };

export type LatestBlockHeightListenerSubscriptionVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type LatestBlockHeightListenerSubscription = { height: Array<{ __typename?: 'block', height: any }> };

export type AverageBlockTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type AverageBlockTimeQuery = { averageBlockTime: Array<{ __typename?: 'average_block_time_per_hour', averageTime: any }> };

export type LatestBlockTimestampQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type LatestBlockTimestampQuery = { block: Array<{ __typename?: 'block', timestamp: any }> };

export type BlocksListenerSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type BlocksListenerSubscription = { blocks: Array<{ __typename?: 'block', height: any, hash: string, timestamp: any, txs?: number | null, validator?: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } | null }> };

export type BlocksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type BlocksQuery = { blocks: Array<{ __typename?: 'block', height: any, hash: string, timestamp: any, txs?: number | null, validator?: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', self_delegate_address?: string | null, operatorAddress: string } | null, validatorDescriptions: Array<{ __typename?: 'validator_description', moniker?: string | null, identity?: string | null }> } | null }> };

export type OldestBlocksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type OldestBlocksQuery = { blocks: Array<{ __typename?: 'block', height: any }> };

export type ChainIdQueryVariables = Exact<{ [key: string]: never; }>;


export type ChainIdQuery = { genesis: Array<{ __typename?: 'genesis', time: any, chainId: string }> };

export type MarketDataQueryVariables = Exact<{
  denom?: InputMaybe<Scalars['String']>;
}>;


export type MarketDataQuery = { communityPool: Array<{ __typename?: 'community_pool', coins: Array<any> }>, inflation: Array<{ __typename?: 'inflation', value: any }>, tokenPrice: Array<{ __typename?: 'token_price', price: any, marketCap: any }>, supply: Array<{ __typename?: 'supply', coins: Array<any> }>, bondedTokens: Array<{ __typename?: 'staking_pool', bonded_tokens: string }>, distributionParams: Array<{ __typename?: 'distribution_params', params: any }> };

export type GetMessagesByAddressQueryVariables = Exact<{
  address?: InputMaybe<Scalars['_text']>;
  limit?: InputMaybe<Scalars['bigint']>;
  offset?: InputMaybe<Scalars['bigint']>;
  types?: InputMaybe<Scalars['_text']>;
}>;


export type GetMessagesByAddressQuery = { messagesByAddress: Array<{ __typename?: 'message', transaction?: { __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', height: any, timestamp: any } } | null }> };

export type MultistakingQueryVariables = Exact<{ [key: string]: never; }>;


export type MultistakingQuery = { token_bonded: Array<{ __typename?: 'token_bonded', amount: string, denom: string }>, token_unbonding: Array<{ __typename?: 'token_unbonding', amount: string, denom: string }> };

export type OnlineVotingPowerQueryVariables = Exact<{ [key: string]: never; }>;


export type OnlineVotingPowerQuery = { activeTotal: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null }, validatorVotingPowerAggregate: { __typename?: 'validator_voting_power_aggregate', aggregate?: { __typename?: 'validator_voting_power_aggregate_fields', sum?: { __typename?: 'validator_voting_power_sum_fields', votingPower?: any | null } | null } | null }, stakingPool: Array<{ __typename?: 'staking_pool', bonded: string }>, stakingParams: Array<{ __typename?: 'staking_params', params: any }> };

export type ParamsQueryVariables = Exact<{ [key: string]: never; }>;


export type ParamsQuery = { stakingParams: Array<{ __typename?: 'staking_params', params: any }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }>, mintParams: Array<{ __typename?: 'mint_params', params: any }>, distributionParams: Array<{ __typename?: 'distribution_params', params: any }>, govParams: Array<{ __typename?: 'gov_params', params: any, height: any }> };

export type ProposalDetailsQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']>;
}>;


export type ProposalDetailsQuery = { proposal: Array<{ __typename?: 'proposal', title: string, description: string, status?: string | null, content: any, metadata: string, proposer: string, proposalId: number, submitTime: any, depositEndTime?: any | null, votingStartTime?: any | null, votingEndTime?: any | null }> };

export type ProposalDetailsTallyQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']>;
}>;


export type ProposalDetailsTallyQuery = { proposalTallyResult: Array<{ __typename?: 'proposal_tally_result', yes: string, no: string, abstain: string, noWithVeto: string }>, stakingPool: Array<{ __typename?: 'proposal_staking_pool_snapshot', bondedTokens: string }>, quorum: Array<{ __typename?: 'gov_params', tallyParams: any }> };

export type ProposalDetailsDepositsQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']>;
}>;


export type ProposalDetailsDepositsQuery = { proposalDeposit: Array<{ __typename?: 'proposal_deposit', amount?: Array<any> | null, depositorAddress?: string | null, block?: { __typename?: 'block', timestamp: any } | null }> };

export type ProposalDetailsVotesQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']>;
}>;


export type ProposalDetailsVotesQuery = { proposalVote: Array<{ __typename?: 'proposal_vote', option: string, voterAddress: string }>, validatorStatuses: Array<{ __typename?: 'proposal_validator_status_snapshot', validator: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', selfDelegateAddress?: string | null } | null } }> };

export type ProposalsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type ProposalsQuery = { proposals: Array<{ __typename?: 'proposal', title: string, status?: string | null, description: string, proposalId: number }>, total: { __typename?: 'proposal_aggregate', aggregate?: { __typename?: 'proposal_aggregate_fields', count: number } | null } };

export type TokenPriceListenerSubscriptionVariables = Exact<{
  denom?: InputMaybe<Scalars['String']>;
}>;


export type TokenPriceListenerSubscription = { tokenPrice: Array<{ __typename?: 'token_price', price: any, timestamp: any, marketCap: any, unitName: string }> };

export type TokenPriceHistoryQueryVariables = Exact<{
  denom?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type TokenPriceHistoryQuery = { tokenPrice: Array<{ __typename?: 'token_price_history', price: any, timestamp: any }> };

export type TokenomicsQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenomicsQuery = { stakingParams: Array<{ __typename?: 'staking_params', params: any }>, stakingPool: Array<{ __typename?: 'staking_pool', bonded: string, unbonded: string }>, supply: Array<{ __typename?: 'supply', coins: Array<any> }> };

export type TransactionDetailsQueryVariables = Exact<{
  hash?: InputMaybe<Scalars['String']>;
}>;


export type TransactionDetailsQuery = { transaction: Array<{ __typename?: 'transaction', logs?: any | null, hash: string, height: any, fee: any, gasUsed?: any | null, gasWanted?: any | null, success: boolean, memo?: string | null, messages: any, rawLog?: string | null, block: { __typename?: 'block', timestamp: any } }> };

export type TransactionsListenerSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type TransactionsListenerSubscription = { transactions: Array<{ __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', timestamp: any } }> };

export type TransactionsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type TransactionsQuery = { transactions: Array<{ __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', timestamp: any } }> };

export type LastHundredBlocksSubscriptionVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type LastHundredBlocksSubscription = { block: Array<{ __typename?: 'block', height: any, validator?: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } | null, transactions: Array<{ __typename?: 'transaction', hash: string }>, precommits: Array<{ __typename?: 'pre_commit', validatorAddress: string }> }> };

export type ValidatorLastSeenListenerSubscriptionVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type ValidatorLastSeenListenerSubscription = { preCommit: Array<{ __typename?: 'pre_commit', height: any, timestamp: any }> };

export type ValidatorDescriptionQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type ValidatorDescriptionQuery = { validator: Array<{ __typename?: 'validator', validatorDescriptions: Array<{ __typename?: 'validator_description', details?: string | null, website?: string | null }> }> };

export type ValidatorStatusesQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type ValidatorStatusesQuery = { validator: Array<{ __typename?: 'validator', validatorStatuses: Array<{ __typename?: 'validator_status', status: number, jailed: boolean, height: any }> }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }> };

export type ValidatorSigningInfosQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type ValidatorSigningInfosQuery = { validator: Array<{ __typename?: 'validator', validatorSigningInfos: Array<{ __typename?: 'validator_signing_info', tombstoned: boolean, missedBlocksCounter: any }> }> };

export type ValidatorInfoQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type ValidatorInfoQuery = { validator_denom: Array<{ __typename?: 'validator_denom', denom: string, validator: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null, maxRate: string } | null, validatorDescriptions: Array<{ __typename?: 'validator_description', details?: string | null, website?: string | null }>, validatorStatuses: Array<{ __typename?: 'validator_status', status: number, jailed: boolean, height: any }>, validatorSigningInfos: Array<{ __typename?: 'validator_signing_info', tombstoned: boolean, missedBlocksCounter: any }>, validatorCommissions: Array<{ __typename?: 'validator_commission', commission: any }> } }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }> };

export type ValidatorCommissionQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type ValidatorCommissionQuery = { validator: Array<{ __typename?: 'validator', validatorCommissions: Array<{ __typename?: 'validator_commission', commission: any }> }> };

export type ValidatorVotingPowersQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type ValidatorVotingPowersQuery = { validator: Array<{ __typename?: 'validator', validatorVotingPowers: Array<{ __typename?: 'validator_voting_power', height: any, votingPower: any }>, validatorStatuses: Array<{ __typename?: 'validator_status', status: number }> }>, stakingPool: Array<{ __typename?: 'staking_pool', height: any, bonded: string }> };

export type ValidatorAddressQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type ValidatorAddressQuery = { validator: Array<{ __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null } | null }> };

export type ValidatorDelegationsQueryVariables = Exact<{
  validatorAddress: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type ValidatorDelegationsQuery = { delegations?: { __typename?: 'ActionDelegationResponse', delegations?: Array<any | null> | null, pagination?: any | null } | null };

export type ValidatorRedelegationsQueryVariables = Exact<{
  validatorAddress: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type ValidatorRedelegationsQuery = { redelegations?: { __typename?: 'ActionRedelegationResponse', redelegations?: Array<any | null> | null, pagination?: any | null } | null };

export type ValidatorUndelegationsQueryVariables = Exact<{
  validatorAddress: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type ValidatorUndelegationsQuery = { undelegations?: { __typename?: 'ActionUnbondingDelegationResponse', pagination?: any | null, undelegations?: Array<any | null> | null } | null };

export type ValidatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorsQuery = { stakingPool: Array<{ __typename?: 'staking_pool', bondedTokens: string }>, validator_denom: Array<{ __typename?: 'validator_denom', denom: string, validator: { __typename?: 'validator', validatorStatuses: Array<{ __typename?: 'validator_status', status: number, jailed: boolean, height: any }>, validatorSigningInfos: Array<{ __typename?: 'validator_signing_info', tombstoned: boolean, missedBlocksCounter: any }>, validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null } | null, validatorVotingPowers: Array<{ __typename?: 'validator_voting_power', votingPower: any }>, validatorCommissions: Array<{ __typename?: 'validator_commission', commission: any }> } }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }> };

export type ValidatorAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorAddressesQuery = { validator: Array<{ __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null, consensusAddress: string } | null, validatorDescriptions: Array<{ __typename?: 'validator_description', moniker?: string | null, avatarUrl?: string | null }> }> };


export const AccountCommissionDocument = gql`
    query AccountCommission($validatorAddress: String!) {
  commission: action_validator_commission_amount(address: $validatorAddress) {
    coins
  }
}
    `;

/**
 * __useAccountCommissionQuery__
 *
 * To run a query within a React component, call `useAccountCommissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountCommissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountCommissionQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *   },
 * });
 */
export function useAccountCommissionQuery(baseOptions: Apollo.QueryHookOptions<AccountCommissionQuery, AccountCommissionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountCommissionQuery, AccountCommissionQueryVariables>(AccountCommissionDocument, options);
      }
export function useAccountCommissionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountCommissionQuery, AccountCommissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountCommissionQuery, AccountCommissionQueryVariables>(AccountCommissionDocument, options);
        }
export type AccountCommissionQueryHookResult = ReturnType<typeof useAccountCommissionQuery>;
export type AccountCommissionLazyQueryHookResult = ReturnType<typeof useAccountCommissionLazyQuery>;
export type AccountCommissionQueryResult = Apollo.QueryResult<AccountCommissionQuery, AccountCommissionQueryVariables>;
export const AccountWithdrawalAddressDocument = gql`
    query AccountWithdrawalAddress($address: String!) {
  withdrawalAddress: action_delegator_withdraw_address(address: $address) {
    address
  }
}
    `;

/**
 * __useAccountWithdrawalAddressQuery__
 *
 * To run a query within a React component, call `useAccountWithdrawalAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountWithdrawalAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountWithdrawalAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountWithdrawalAddressQuery(baseOptions: Apollo.QueryHookOptions<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>(AccountWithdrawalAddressDocument, options);
      }
export function useAccountWithdrawalAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>(AccountWithdrawalAddressDocument, options);
        }
export type AccountWithdrawalAddressQueryHookResult = ReturnType<typeof useAccountWithdrawalAddressQuery>;
export type AccountWithdrawalAddressLazyQueryHookResult = ReturnType<typeof useAccountWithdrawalAddressLazyQuery>;
export type AccountWithdrawalAddressQueryResult = Apollo.QueryResult<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>;
export const AccountBalancesDocument = gql`
    query AccountBalances($address: String!) {
  accountBalances: action_account_balance(address: $address) {
    coins
  }
}
    `;

/**
 * __useAccountBalancesQuery__
 *
 * To run a query within a React component, call `useAccountBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountBalancesQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountBalancesQuery(baseOptions: Apollo.QueryHookOptions<AccountBalancesQuery, AccountBalancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountBalancesQuery, AccountBalancesQueryVariables>(AccountBalancesDocument, options);
      }
export function useAccountBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountBalancesQuery, AccountBalancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountBalancesQuery, AccountBalancesQueryVariables>(AccountBalancesDocument, options);
        }
export type AccountBalancesQueryHookResult = ReturnType<typeof useAccountBalancesQuery>;
export type AccountBalancesLazyQueryHookResult = ReturnType<typeof useAccountBalancesLazyQuery>;
export type AccountBalancesQueryResult = Apollo.QueryResult<AccountBalancesQuery, AccountBalancesQueryVariables>;
export const AccountDelegationBalanceDocument = gql`
    query AccountDelegationBalance($address: String!) {
  delegationBalance: action_delegation_total(address: $address) {
    coins
  }
}
    `;

/**
 * __useAccountDelegationBalanceQuery__
 *
 * To run a query within a React component, call `useAccountDelegationBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDelegationBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDelegationBalanceQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountDelegationBalanceQuery(baseOptions: Apollo.QueryHookOptions<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>(AccountDelegationBalanceDocument, options);
      }
export function useAccountDelegationBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>(AccountDelegationBalanceDocument, options);
        }
export type AccountDelegationBalanceQueryHookResult = ReturnType<typeof useAccountDelegationBalanceQuery>;
export type AccountDelegationBalanceLazyQueryHookResult = ReturnType<typeof useAccountDelegationBalanceLazyQuery>;
export type AccountDelegationBalanceQueryResult = Apollo.QueryResult<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>;
export const AccountUnbondingBalanceDocument = gql`
    query AccountUnbondingBalance($address: String!) {
  unbondingBalance: action_unbonding_delegation_total(address: $address) {
    coins
  }
}
    `;

/**
 * __useAccountUnbondingBalanceQuery__
 *
 * To run a query within a React component, call `useAccountUnbondingBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountUnbondingBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountUnbondingBalanceQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountUnbondingBalanceQuery(baseOptions: Apollo.QueryHookOptions<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>(AccountUnbondingBalanceDocument, options);
      }
export function useAccountUnbondingBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>(AccountUnbondingBalanceDocument, options);
        }
export type AccountUnbondingBalanceQueryHookResult = ReturnType<typeof useAccountUnbondingBalanceQuery>;
export type AccountUnbondingBalanceLazyQueryHookResult = ReturnType<typeof useAccountUnbondingBalanceLazyQuery>;
export type AccountUnbondingBalanceQueryResult = Apollo.QueryResult<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>;
export const AccountDelegationRewardsDocument = gql`
    query AccountDelegationRewards($address: String!) {
  delegationRewards: action_delegation_reward(address: $address) {
    validatorAddress: validator_address
    coins
  }
}
    `;

/**
 * __useAccountDelegationRewardsQuery__
 *
 * To run a query within a React component, call `useAccountDelegationRewardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDelegationRewardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDelegationRewardsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountDelegationRewardsQuery(baseOptions: Apollo.QueryHookOptions<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>(AccountDelegationRewardsDocument, options);
      }
export function useAccountDelegationRewardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>(AccountDelegationRewardsDocument, options);
        }
export type AccountDelegationRewardsQueryHookResult = ReturnType<typeof useAccountDelegationRewardsQuery>;
export type AccountDelegationRewardsLazyQueryHookResult = ReturnType<typeof useAccountDelegationRewardsLazyQuery>;
export type AccountDelegationRewardsQueryResult = Apollo.QueryResult<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>;
export const AccountDelegationsDocument = gql`
    query AccountDelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  delegations: action_delegation(
    address: $address
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    delegations
    pagination
  }
}
    `;

/**
 * __useAccountDelegationsQuery__
 *
 * To run a query within a React component, call `useAccountDelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDelegationsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useAccountDelegationsQuery(baseOptions: Apollo.QueryHookOptions<AccountDelegationsQuery, AccountDelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDelegationsQuery, AccountDelegationsQueryVariables>(AccountDelegationsDocument, options);
      }
export function useAccountDelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDelegationsQuery, AccountDelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDelegationsQuery, AccountDelegationsQueryVariables>(AccountDelegationsDocument, options);
        }
export type AccountDelegationsQueryHookResult = ReturnType<typeof useAccountDelegationsQuery>;
export type AccountDelegationsLazyQueryHookResult = ReturnType<typeof useAccountDelegationsLazyQuery>;
export type AccountDelegationsQueryResult = Apollo.QueryResult<AccountDelegationsQuery, AccountDelegationsQueryVariables>;
export const AccountRedelegationsDocument = gql`
    query AccountRedelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  redelegations: action_redelegation(
    address: $address
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    redelegations
    pagination
  }
}
    `;

/**
 * __useAccountRedelegationsQuery__
 *
 * To run a query within a React component, call `useAccountRedelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountRedelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountRedelegationsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useAccountRedelegationsQuery(baseOptions: Apollo.QueryHookOptions<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>(AccountRedelegationsDocument, options);
      }
export function useAccountRedelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>(AccountRedelegationsDocument, options);
        }
export type AccountRedelegationsQueryHookResult = ReturnType<typeof useAccountRedelegationsQuery>;
export type AccountRedelegationsLazyQueryHookResult = ReturnType<typeof useAccountRedelegationsLazyQuery>;
export type AccountRedelegationsQueryResult = Apollo.QueryResult<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>;
export const AccountUndelegationsDocument = gql`
    query AccountUndelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  undelegations: action_unbonding_delegation(
    address: $address
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    undelegations: unbonding_delegations
    pagination
  }
}
    `;

/**
 * __useAccountUndelegationsQuery__
 *
 * To run a query within a React component, call `useAccountUndelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountUndelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountUndelegationsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useAccountUndelegationsQuery(baseOptions: Apollo.QueryHookOptions<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>(AccountUndelegationsDocument, options);
      }
export function useAccountUndelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>(AccountUndelegationsDocument, options);
        }
export type AccountUndelegationsQueryHookResult = ReturnType<typeof useAccountUndelegationsQuery>;
export type AccountUndelegationsLazyQueryHookResult = ReturnType<typeof useAccountUndelegationsLazyQuery>;
export type AccountUndelegationsQueryResult = Apollo.QueryResult<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>;
export const ActiveValidatorCountDocument = gql`
    query ActiveValidatorCount {
  activeTotal: validator_status_aggregate(where: {status: {_eq: 3}}) {
    aggregate {
      count
    }
  }
  inactiveTotal: validator_status_aggregate(where: {status: {_neq: 3}}) {
    aggregate {
      count
    }
  }
  total: validator_status_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useActiveValidatorCountQuery__
 *
 * To run a query within a React component, call `useActiveValidatorCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveValidatorCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveValidatorCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveValidatorCountQuery(baseOptions?: Apollo.QueryHookOptions<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(ActiveValidatorCountDocument, options);
      }
export function useActiveValidatorCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(ActiveValidatorCountDocument, options);
        }
export type ActiveValidatorCountQueryHookResult = ReturnType<typeof useActiveValidatorCountQuery>;
export type ActiveValidatorCountLazyQueryHookResult = ReturnType<typeof useActiveValidatorCountLazyQuery>;
export type ActiveValidatorCountQueryResult = Apollo.QueryResult<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>;
export const BlockDetailsDocument = gql`
    query BlockDetails($height: bigint, $signatureHeight: bigint) {
  transaction(where: {height: {_eq: $height}}) {
    height
    hash
    messages
    success
    logs
  }
  block(limit: 1, where: {height: {_eq: $height}}) {
    height
    hash
    timestamp
    txs: num_txs
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
      }
    }
  }
  preCommitsAggregate: pre_commit_aggregate(
    where: {height: {_eq: $signatureHeight}}
  ) {
    aggregate {
      sum {
        votingPower: voting_power
      }
    }
  }
  preCommits: pre_commit(where: {height: {_eq: $signatureHeight}}) {
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
      }
    }
  }
}
    `;

/**
 * __useBlockDetailsQuery__
 *
 * To run a query within a React component, call `useBlockDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockDetailsQuery({
 *   variables: {
 *      height: // value for 'height'
 *      signatureHeight: // value for 'signatureHeight'
 *   },
 * });
 */
export function useBlockDetailsQuery(baseOptions?: Apollo.QueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(BlockDetailsDocument, options);
      }
export function useBlockDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(BlockDetailsDocument, options);
        }
export type BlockDetailsQueryHookResult = ReturnType<typeof useBlockDetailsQuery>;
export type BlockDetailsLazyQueryHookResult = ReturnType<typeof useBlockDetailsLazyQuery>;
export type BlockDetailsQueryResult = Apollo.QueryResult<BlockDetailsQuery, BlockDetailsQueryVariables>;
export const LatestBlockHeightListenerDocument = gql`
    subscription LatestBlockHeightListener($offset: Int = 0) {
  height: block(order_by: {height: desc}, limit: 1, offset: $offset) {
    height
  }
}
    `;

/**
 * __useLatestBlockHeightListenerSubscription__
 *
 * To run a query within a React component, call `useLatestBlockHeightListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockHeightListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockHeightListenerSubscription({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockHeightListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>(LatestBlockHeightListenerDocument, options);
      }
export type LatestBlockHeightListenerSubscriptionHookResult = ReturnType<typeof useLatestBlockHeightListenerSubscription>;
export type LatestBlockHeightListenerSubscriptionResult = Apollo.SubscriptionResult<LatestBlockHeightListenerSubscription>;
export const AverageBlockTimeDocument = gql`
    query AverageBlockTime {
  averageBlockTime: average_block_time_per_hour(
    limit: 1
    order_by: {height: desc}
  ) {
    averageTime: average_time
  }
}
    `;

/**
 * __useAverageBlockTimeQuery__
 *
 * To run a query within a React component, call `useAverageBlockTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAverageBlockTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAverageBlockTimeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAverageBlockTimeQuery(baseOptions?: Apollo.QueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(AverageBlockTimeDocument, options);
      }
export function useAverageBlockTimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(AverageBlockTimeDocument, options);
        }
export type AverageBlockTimeQueryHookResult = ReturnType<typeof useAverageBlockTimeQuery>;
export type AverageBlockTimeLazyQueryHookResult = ReturnType<typeof useAverageBlockTimeLazyQuery>;
export type AverageBlockTimeQueryResult = Apollo.QueryResult<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>;
export const LatestBlockTimestampDocument = gql`
    query LatestBlockTimestamp($offset: Int = 0) {
  block: block(order_by: {height: desc}, limit: 1, offset: $offset) {
    timestamp
  }
}
    `;

/**
 * __useLatestBlockTimestampQuery__
 *
 * To run a query within a React component, call `useLatestBlockTimestampQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockTimestampQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockTimestampQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockTimestampQuery(baseOptions?: Apollo.QueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
      }
export function useLatestBlockTimestampLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
        }
export type LatestBlockTimestampQueryHookResult = ReturnType<typeof useLatestBlockTimestampQuery>;
export type LatestBlockTimestampLazyQueryHookResult = ReturnType<typeof useLatestBlockTimestampLazyQuery>;
export type LatestBlockTimestampQueryResult = Apollo.QueryResult<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>;
export const BlocksListenerDocument = gql`
    subscription BlocksListener($limit: Int = 7, $offset: Int = 0) {
  blocks: block(limit: $limit, offset: $offset, order_by: {height: desc}) {
    height
    txs: num_txs
    hash
    timestamp
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
      }
    }
  }
}
    `;

/**
 * __useBlocksListenerSubscription__
 *
 * To run a query within a React component, call `useBlocksListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBlocksListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlocksListenerSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBlocksListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<BlocksListenerSubscription, BlocksListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BlocksListenerSubscription, BlocksListenerSubscriptionVariables>(BlocksListenerDocument, options);
      }
export type BlocksListenerSubscriptionHookResult = ReturnType<typeof useBlocksListenerSubscription>;
export type BlocksListenerSubscriptionResult = Apollo.SubscriptionResult<BlocksListenerSubscription>;
export const BlocksDocument = gql`
    query Blocks($limit: Int = 7, $offset: Int = 0) {
  blocks: block(limit: $limit, offset: $offset, order_by: {height: desc}) {
    height
    txs: num_txs
    hash
    timestamp
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
        self_delegate_address
      }
      validatorDescriptions: validator_descriptions(
        limit: 1
        order_by: {height: desc}
      ) {
        moniker
        identity
      }
    }
  }
}
    `;

/**
 * __useBlocksQuery__
 *
 * To run a query within a React component, call `useBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlocksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBlocksQuery(baseOptions?: Apollo.QueryHookOptions<BlocksQuery, BlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
      }
export function useBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlocksQuery, BlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
        }
export type BlocksQueryHookResult = ReturnType<typeof useBlocksQuery>;
export type BlocksLazyQueryHookResult = ReturnType<typeof useBlocksLazyQuery>;
export type BlocksQueryResult = Apollo.QueryResult<BlocksQuery, BlocksQueryVariables>;
export const OldestBlocksDocument = gql`
    query OldestBlocks($limit: Int = 7) {
  blocks: block(limit: $limit, order_by: {height: asc}) {
    height
  }
}
    `;

/**
 * __useOldestBlocksQuery__
 *
 * To run a query within a React component, call `useOldestBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useOldestBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOldestBlocksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useOldestBlocksQuery(baseOptions?: Apollo.QueryHookOptions<OldestBlocksQuery, OldestBlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OldestBlocksQuery, OldestBlocksQueryVariables>(OldestBlocksDocument, options);
      }
export function useOldestBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OldestBlocksQuery, OldestBlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OldestBlocksQuery, OldestBlocksQueryVariables>(OldestBlocksDocument, options);
        }
export type OldestBlocksQueryHookResult = ReturnType<typeof useOldestBlocksQuery>;
export type OldestBlocksLazyQueryHookResult = ReturnType<typeof useOldestBlocksLazyQuery>;
export type OldestBlocksQueryResult = Apollo.QueryResult<OldestBlocksQuery, OldestBlocksQueryVariables>;
export const ChainIdDocument = gql`
    query ChainId {
  genesis(limit: 1, order_by: {time: desc}) {
    chainId: chain_id
    time
  }
}
    `;

/**
 * __useChainIdQuery__
 *
 * To run a query within a React component, call `useChainIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useChainIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChainIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useChainIdQuery(baseOptions?: Apollo.QueryHookOptions<ChainIdQuery, ChainIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChainIdQuery, ChainIdQueryVariables>(ChainIdDocument, options);
      }
export function useChainIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChainIdQuery, ChainIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChainIdQuery, ChainIdQueryVariables>(ChainIdDocument, options);
        }
export type ChainIdQueryHookResult = ReturnType<typeof useChainIdQuery>;
export type ChainIdLazyQueryHookResult = ReturnType<typeof useChainIdLazyQuery>;
export type ChainIdQueryResult = Apollo.QueryResult<ChainIdQuery, ChainIdQueryVariables>;
export const MarketDataDocument = gql`
    query MarketData($denom: String) {
  communityPool: community_pool(order_by: {height: desc}, limit: 1) {
    coins
  }
  inflation: inflation(order_by: {height: desc}, limit: 1) {
    value
  }
  tokenPrice: token_price(where: {unit_name: {_eq: $denom}}) {
    marketCap: market_cap
    price
  }
  supply {
    coins
  }
  bondedTokens: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded_tokens
  }
  distributionParams: distribution_params {
    params
  }
}
    `;

/**
 * __useMarketDataQuery__
 *
 * To run a query within a React component, call `useMarketDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketDataQuery({
 *   variables: {
 *      denom: // value for 'denom'
 *   },
 * });
 */
export function useMarketDataQuery(baseOptions?: Apollo.QueryHookOptions<MarketDataQuery, MarketDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketDataQuery, MarketDataQueryVariables>(MarketDataDocument, options);
      }
export function useMarketDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketDataQuery, MarketDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketDataQuery, MarketDataQueryVariables>(MarketDataDocument, options);
        }
export type MarketDataQueryHookResult = ReturnType<typeof useMarketDataQuery>;
export type MarketDataLazyQueryHookResult = ReturnType<typeof useMarketDataLazyQuery>;
export type MarketDataQueryResult = Apollo.QueryResult<MarketDataQuery, MarketDataQueryVariables>;
export const GetMessagesByAddressDocument = gql`
    query GetMessagesByAddress($address: _text, $limit: bigint = 50, $offset: bigint = 0, $types: _text = "{}") {
  messagesByAddress: messages_by_address(
    args: {addresses: $address, types: $types, limit: $limit, offset: $offset}
  ) {
    transaction {
      height
      hash
      success
      messages
      logs
      block {
        height
        timestamp
      }
    }
  }
}
    `;

/**
 * __useGetMessagesByAddressQuery__
 *
 * To run a query within a React component, call `useGetMessagesByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      types: // value for 'types'
 *   },
 * });
 */
export function useGetMessagesByAddressQuery(baseOptions?: Apollo.QueryHookOptions<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>(GetMessagesByAddressDocument, options);
      }
export function useGetMessagesByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>(GetMessagesByAddressDocument, options);
        }
export type GetMessagesByAddressQueryHookResult = ReturnType<typeof useGetMessagesByAddressQuery>;
export type GetMessagesByAddressLazyQueryHookResult = ReturnType<typeof useGetMessagesByAddressLazyQuery>;
export type GetMessagesByAddressQueryResult = Apollo.QueryResult<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>;
export const MultistakingDocument = gql`
    query Multistaking {
  token_bonded {
    amount
    denom
  }
  token_unbonding {
    amount
    denom
  }
}
    `;

/**
 * __useMultistakingQuery__
 *
 * To run a query within a React component, call `useMultistakingQuery` and pass it any options that fit your needs.
 * When your component renders, `useMultistakingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMultistakingQuery({
 *   variables: {
 *   },
 * });
 */
export function useMultistakingQuery(baseOptions?: Apollo.QueryHookOptions<MultistakingQuery, MultistakingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MultistakingQuery, MultistakingQueryVariables>(MultistakingDocument, options);
      }
export function useMultistakingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MultistakingQuery, MultistakingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MultistakingQuery, MultistakingQueryVariables>(MultistakingDocument, options);
        }
export type MultistakingQueryHookResult = ReturnType<typeof useMultistakingQuery>;
export type MultistakingLazyQueryHookResult = ReturnType<typeof useMultistakingLazyQuery>;
export type MultistakingQueryResult = Apollo.QueryResult<MultistakingQuery, MultistakingQueryVariables>;
export const OnlineVotingPowerDocument = gql`
    query OnlineVotingPower {
  activeTotal: validator_status_aggregate(where: {status: {_eq: 3}}) {
    aggregate {
      count
    }
  }
  validatorVotingPowerAggregate: validator_voting_power_aggregate(
    where: {validator: {validator_statuses: {status: {_eq: 3}}}}
  ) {
    aggregate {
      sum {
        votingPower: voting_power
      }
    }
  }
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded: bonded_tokens
  }
  stakingParams: staking_params(limit: 1) {
    params
  }
}
    `;

/**
 * __useOnlineVotingPowerQuery__
 *
 * To run a query within a React component, call `useOnlineVotingPowerQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnlineVotingPowerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnlineVotingPowerQuery({
 *   variables: {
 *   },
 * });
 */
export function useOnlineVotingPowerQuery(baseOptions?: Apollo.QueryHookOptions<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>(OnlineVotingPowerDocument, options);
      }
export function useOnlineVotingPowerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>(OnlineVotingPowerDocument, options);
        }
export type OnlineVotingPowerQueryHookResult = ReturnType<typeof useOnlineVotingPowerQuery>;
export type OnlineVotingPowerLazyQueryHookResult = ReturnType<typeof useOnlineVotingPowerLazyQuery>;
export type OnlineVotingPowerQueryResult = Apollo.QueryResult<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>;
export const ParamsDocument = gql`
    query Params {
  stakingParams: staking_params(limit: 1, order_by: {height: desc}) {
    params
  }
  slashingParams: slashing_params(limit: 1, order_by: {height: desc}) {
    params
  }
  mintParams: mint_params(limit: 1, order_by: {height: desc}) {
    params
  }
  distributionParams: distribution_params(limit: 1, order_by: {height: desc}) {
    params
  }
  govParams: gov_params(limit: 1, order_by: {height: desc}) {
    params
    height
  }
}
    `;

/**
 * __useParamsQuery__
 *
 * To run a query within a React component, call `useParamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useParamsQuery(baseOptions?: Apollo.QueryHookOptions<ParamsQuery, ParamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParamsQuery, ParamsQueryVariables>(ParamsDocument, options);
      }
export function useParamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParamsQuery, ParamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParamsQuery, ParamsQueryVariables>(ParamsDocument, options);
        }
export type ParamsQueryHookResult = ReturnType<typeof useParamsQuery>;
export type ParamsLazyQueryHookResult = ReturnType<typeof useParamsLazyQuery>;
export type ParamsQueryResult = Apollo.QueryResult<ParamsQuery, ParamsQueryVariables>;
export const ProposalDetailsDocument = gql`
    query ProposalDetails($proposalId: Int) {
  proposal(where: {id: {_eq: $proposalId}}) {
    proposer: proposer_address
    title
    description
    status
    content
    proposalId: id
    submitTime: submit_time
    metadata
    depositEndTime: deposit_end_time
    votingStartTime: voting_start_time
    votingEndTime: voting_end_time
  }
}
    `;

/**
 * __useProposalDetailsQuery__
 *
 * To run a query within a React component, call `useProposalDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsQuery, ProposalDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsQuery, ProposalDetailsQueryVariables>(ProposalDetailsDocument, options);
      }
export function useProposalDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsQuery, ProposalDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsQuery, ProposalDetailsQueryVariables>(ProposalDetailsDocument, options);
        }
export type ProposalDetailsQueryHookResult = ReturnType<typeof useProposalDetailsQuery>;
export type ProposalDetailsLazyQueryHookResult = ReturnType<typeof useProposalDetailsLazyQuery>;
export type ProposalDetailsQueryResult = Apollo.QueryResult<ProposalDetailsQuery, ProposalDetailsQueryVariables>;
export const ProposalDetailsTallyDocument = gql`
    query ProposalDetailsTally($proposalId: Int) {
  proposalTallyResult: proposal_tally_result(
    where: {proposal_id: {_eq: $proposalId}}
  ) {
    yes
    no
    noWithVeto: no_with_veto
    abstain
  }
  stakingPool: proposal_staking_pool_snapshot(
    where: {proposal_id: {_eq: $proposalId}}
  ) {
    bondedTokens: bonded_tokens
  }
  quorum: gov_params(limit: 1, order_by: {height: desc}) {
    tallyParams: params
  }
}
    `;

/**
 * __useProposalDetailsTallyQuery__
 *
 * To run a query within a React component, call `useProposalDetailsTallyQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsTallyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsTallyQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsTallyQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>(ProposalDetailsTallyDocument, options);
      }
export function useProposalDetailsTallyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>(ProposalDetailsTallyDocument, options);
        }
export type ProposalDetailsTallyQueryHookResult = ReturnType<typeof useProposalDetailsTallyQuery>;
export type ProposalDetailsTallyLazyQueryHookResult = ReturnType<typeof useProposalDetailsTallyLazyQuery>;
export type ProposalDetailsTallyQueryResult = Apollo.QueryResult<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>;
export const ProposalDetailsDepositsDocument = gql`
    query ProposalDetailsDeposits($proposalId: Int) {
  proposalDeposit: proposal_deposit(
    where: {proposal_id: {_eq: $proposalId}}
    order_by: {height: desc}
  ) {
    amount
    depositorAddress: depositor_address
    block {
      timestamp
    }
  }
}
    `;

/**
 * __useProposalDetailsDepositsQuery__
 *
 * To run a query within a React component, call `useProposalDetailsDepositsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsDepositsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsDepositsQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsDepositsQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>(ProposalDetailsDepositsDocument, options);
      }
export function useProposalDetailsDepositsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>(ProposalDetailsDepositsDocument, options);
        }
export type ProposalDetailsDepositsQueryHookResult = ReturnType<typeof useProposalDetailsDepositsQuery>;
export type ProposalDetailsDepositsLazyQueryHookResult = ReturnType<typeof useProposalDetailsDepositsLazyQuery>;
export type ProposalDetailsDepositsQueryResult = Apollo.QueryResult<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>;
export const ProposalDetailsVotesDocument = gql`
    query ProposalDetailsVotes($proposalId: Int) {
  proposalVote: proposal_vote(
    where: {proposal_id: {_eq: $proposalId}}
    order_by: {height: desc}
  ) {
    option
    voterAddress: voter_address
  }
  validatorStatuses: proposal_validator_status_snapshot(
    where: {proposal_id: {_eq: $proposalId}, status: {_eq: 3}}
  ) {
    validator {
      validatorInfo: validator_info {
        selfDelegateAddress: self_delegate_address
      }
    }
  }
}
    `;

/**
 * __useProposalDetailsVotesQuery__
 *
 * To run a query within a React component, call `useProposalDetailsVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsVotesQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsVotesQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>(ProposalDetailsVotesDocument, options);
      }
export function useProposalDetailsVotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>(ProposalDetailsVotesDocument, options);
        }
export type ProposalDetailsVotesQueryHookResult = ReturnType<typeof useProposalDetailsVotesQuery>;
export type ProposalDetailsVotesLazyQueryHookResult = ReturnType<typeof useProposalDetailsVotesLazyQuery>;
export type ProposalDetailsVotesQueryResult = Apollo.QueryResult<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>;
export const ProposalsDocument = gql`
    query Proposals($limit: Int = 7, $offset: Int = 0) {
  proposals: proposal(limit: $limit, offset: $offset, order_by: {id: desc}) {
    title
    proposalId: id
    status
    description
  }
  total: proposal_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useProposalsQuery__
 *
 * To run a query within a React component, call `useProposalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useProposalsQuery(baseOptions?: Apollo.QueryHookOptions<ProposalsQuery, ProposalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalsQuery, ProposalsQueryVariables>(ProposalsDocument, options);
      }
export function useProposalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalsQuery, ProposalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalsQuery, ProposalsQueryVariables>(ProposalsDocument, options);
        }
export type ProposalsQueryHookResult = ReturnType<typeof useProposalsQuery>;
export type ProposalsLazyQueryHookResult = ReturnType<typeof useProposalsLazyQuery>;
export type ProposalsQueryResult = Apollo.QueryResult<ProposalsQuery, ProposalsQueryVariables>;
export const TokenPriceListenerDocument = gql`
    subscription TokenPriceListener($denom: String) {
  tokenPrice: token_price(where: {unit_name: {_eq: $denom}}) {
    price
    timestamp
    marketCap: market_cap
    unitName: unit_name
  }
}
    `;

/**
 * __useTokenPriceListenerSubscription__
 *
 * To run a query within a React component, call `useTokenPriceListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceListenerSubscription({
 *   variables: {
 *      denom: // value for 'denom'
 *   },
 * });
 */
export function useTokenPriceListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TokenPriceListenerSubscription, TokenPriceListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TokenPriceListenerSubscription, TokenPriceListenerSubscriptionVariables>(TokenPriceListenerDocument, options);
      }
export type TokenPriceListenerSubscriptionHookResult = ReturnType<typeof useTokenPriceListenerSubscription>;
export type TokenPriceListenerSubscriptionResult = Apollo.SubscriptionResult<TokenPriceListenerSubscription>;
export const TokenPriceHistoryDocument = gql`
    query TokenPriceHistory($denom: String, $limit: Int = 10) {
  tokenPrice: token_price_history(
    where: {unit_name: {_eq: $denom}}
    limit: $limit
    order_by: {timestamp: desc}
  ) {
    price
    timestamp
  }
}
    `;

/**
 * __useTokenPriceHistoryQuery__
 *
 * To run a query within a React component, call `useTokenPriceHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceHistoryQuery({
 *   variables: {
 *      denom: // value for 'denom'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useTokenPriceHistoryQuery(baseOptions?: Apollo.QueryHookOptions<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>(TokenPriceHistoryDocument, options);
      }
export function useTokenPriceHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>(TokenPriceHistoryDocument, options);
        }
export type TokenPriceHistoryQueryHookResult = ReturnType<typeof useTokenPriceHistoryQuery>;
export type TokenPriceHistoryLazyQueryHookResult = ReturnType<typeof useTokenPriceHistoryLazyQuery>;
export type TokenPriceHistoryQueryResult = Apollo.QueryResult<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>;
export const TokenomicsDocument = gql`
    query Tokenomics {
  stakingParams: staking_params(limit: 1) {
    params
  }
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded: bonded_tokens
    unbonded: not_bonded_tokens
  }
  supply: supply(order_by: {height: desc}, limit: 1) {
    coins
  }
}
    `;

/**
 * __useTokenomicsQuery__
 *
 * To run a query within a React component, call `useTokenomicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenomicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenomicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTokenomicsQuery(baseOptions?: Apollo.QueryHookOptions<TokenomicsQuery, TokenomicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenomicsQuery, TokenomicsQueryVariables>(TokenomicsDocument, options);
      }
export function useTokenomicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenomicsQuery, TokenomicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenomicsQuery, TokenomicsQueryVariables>(TokenomicsDocument, options);
        }
export type TokenomicsQueryHookResult = ReturnType<typeof useTokenomicsQuery>;
export type TokenomicsLazyQueryHookResult = ReturnType<typeof useTokenomicsLazyQuery>;
export type TokenomicsQueryResult = Apollo.QueryResult<TokenomicsQuery, TokenomicsQueryVariables>;
export const TransactionDetailsDocument = gql`
    query TransactionDetails($hash: String) {
  transaction(where: {hash: {_eq: $hash}}, limit: 1) {
    hash: hash
    height: height
    block: block {
      timestamp: timestamp
    }
    fee: fee
    gasUsed: gas_used
    gasWanted: gas_wanted
    success: success
    memo: memo
    messages: messages
    logs
    rawLog: raw_log
  }
}
    `;

/**
 * __useTransactionDetailsQuery__
 *
 * To run a query within a React component, call `useTransactionDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionDetailsQuery({
 *   variables: {
 *      hash: // value for 'hash'
 *   },
 * });
 */
export function useTransactionDetailsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionDetailsQuery, TransactionDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionDetailsQuery, TransactionDetailsQueryVariables>(TransactionDetailsDocument, options);
      }
export function useTransactionDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionDetailsQuery, TransactionDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionDetailsQuery, TransactionDetailsQueryVariables>(TransactionDetailsDocument, options);
        }
export type TransactionDetailsQueryHookResult = ReturnType<typeof useTransactionDetailsQuery>;
export type TransactionDetailsLazyQueryHookResult = ReturnType<typeof useTransactionDetailsLazyQuery>;
export type TransactionDetailsQueryResult = Apollo.QueryResult<TransactionDetailsQuery, TransactionDetailsQueryVariables>;
export const TransactionsListenerDocument = gql`
    subscription TransactionsListener($limit: Int = 7, $offset: Int = 0) {
  transactions: transaction(
    limit: $limit
    offset: $offset
    order_by: {height: desc}
  ) {
    height
    hash
    success
    block {
      timestamp
    }
    messages
    logs
  }
}
    `;

/**
 * __useTransactionsListenerSubscription__
 *
 * To run a query within a React component, call `useTransactionsListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsListenerSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTransactionsListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TransactionsListenerSubscription, TransactionsListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TransactionsListenerSubscription, TransactionsListenerSubscriptionVariables>(TransactionsListenerDocument, options);
      }
export type TransactionsListenerSubscriptionHookResult = ReturnType<typeof useTransactionsListenerSubscription>;
export type TransactionsListenerSubscriptionResult = Apollo.SubscriptionResult<TransactionsListenerSubscription>;
export const TransactionsDocument = gql`
    query Transactions($limit: Int = 7, $offset: Int = 0) {
  transactions: transaction(
    limit: $limit
    offset: $offset
    order_by: {height: desc}
  ) {
    height
    hash
    success
    block {
      timestamp
    }
    messages
    logs
  }
}
    `;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
      }
export function useTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export const LastHundredBlocksDocument = gql`
    subscription LastHundredBlocks($address: String) {
  block(offset: 1, order_by: {height: desc}, limit: 100) {
    height
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
      }
    }
    transactions {
      hash
    }
    precommits: pre_commits(
      where: {validator: {validator_info: {operator_address: {_eq: $address}}}}
    ) {
      validatorAddress: validator_address
    }
  }
}
    `;

/**
 * __useLastHundredBlocksSubscription__
 *
 * To run a query within a React component, call `useLastHundredBlocksSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLastHundredBlocksSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastHundredBlocksSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useLastHundredBlocksSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LastHundredBlocksSubscription, LastHundredBlocksSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LastHundredBlocksSubscription, LastHundredBlocksSubscriptionVariables>(LastHundredBlocksDocument, options);
      }
export type LastHundredBlocksSubscriptionHookResult = ReturnType<typeof useLastHundredBlocksSubscription>;
export type LastHundredBlocksSubscriptionResult = Apollo.SubscriptionResult<LastHundredBlocksSubscription>;
export const ValidatorLastSeenListenerDocument = gql`
    subscription ValidatorLastSeenListener($address: String) {
  preCommit: pre_commit(
    limit: 1
    where: {validator: {validator_info: {operator_address: {_eq: $address}}}}
    order_by: {height: desc}
  ) {
    height
    timestamp
  }
}
    `;

/**
 * __useValidatorLastSeenListenerSubscription__
 *
 * To run a query within a React component, call `useValidatorLastSeenListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useValidatorLastSeenListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorLastSeenListenerSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorLastSeenListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ValidatorLastSeenListenerSubscription, ValidatorLastSeenListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ValidatorLastSeenListenerSubscription, ValidatorLastSeenListenerSubscriptionVariables>(ValidatorLastSeenListenerDocument, options);
      }
export type ValidatorLastSeenListenerSubscriptionHookResult = ReturnType<typeof useValidatorLastSeenListenerSubscription>;
export type ValidatorLastSeenListenerSubscriptionResult = Apollo.SubscriptionResult<ValidatorLastSeenListenerSubscription>;
export const ValidatorDescriptionDocument = gql`
    query ValidatorDescription($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorDescriptions: validator_descriptions(
      order_by: {height: desc}
      limit: 1
    ) {
      details
      website
    }
  }
}
    `;

/**
 * __useValidatorDescriptionQuery__
 *
 * To run a query within a React component, call `useValidatorDescriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorDescriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorDescriptionQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorDescriptionQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>(ValidatorDescriptionDocument, options);
      }
export function useValidatorDescriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>(ValidatorDescriptionDocument, options);
        }
export type ValidatorDescriptionQueryHookResult = ReturnType<typeof useValidatorDescriptionQuery>;
export type ValidatorDescriptionLazyQueryHookResult = ReturnType<typeof useValidatorDescriptionLazyQuery>;
export type ValidatorDescriptionQueryResult = Apollo.QueryResult<ValidatorDescriptionQuery, ValidatorDescriptionQueryVariables>;
export const ValidatorStatusesDocument = gql`
    query ValidatorStatuses($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorStatuses: validator_statuses(order_by: {height: desc}, limit: 1) {
      status
      jailed
      height
    }
  }
  slashingParams: slashing_params(order_by: {height: desc}, limit: 1) {
    params
  }
}
    `;

/**
 * __useValidatorStatusesQuery__
 *
 * To run a query within a React component, call `useValidatorStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorStatusesQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorStatusesQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>(ValidatorStatusesDocument, options);
      }
export function useValidatorStatusesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>(ValidatorStatusesDocument, options);
        }
export type ValidatorStatusesQueryHookResult = ReturnType<typeof useValidatorStatusesQuery>;
export type ValidatorStatusesLazyQueryHookResult = ReturnType<typeof useValidatorStatusesLazyQuery>;
export type ValidatorStatusesQueryResult = Apollo.QueryResult<ValidatorStatusesQuery, ValidatorStatusesQueryVariables>;
export const ValidatorSigningInfosDocument = gql`
    query ValidatorSigningInfos($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorSigningInfos: validator_signing_infos(
      order_by: {height: desc}
      limit: 1
    ) {
      missedBlocksCounter: missed_blocks_counter
      tombstoned
    }
  }
}
    `;

/**
 * __useValidatorSigningInfosQuery__
 *
 * To run a query within a React component, call `useValidatorSigningInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorSigningInfosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorSigningInfosQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorSigningInfosQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>(ValidatorSigningInfosDocument, options);
      }
export function useValidatorSigningInfosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>(ValidatorSigningInfosDocument, options);
        }
export type ValidatorSigningInfosQueryHookResult = ReturnType<typeof useValidatorSigningInfosQuery>;
export type ValidatorSigningInfosLazyQueryHookResult = ReturnType<typeof useValidatorSigningInfosLazyQuery>;
export type ValidatorSigningInfosQueryResult = Apollo.QueryResult<ValidatorSigningInfosQuery, ValidatorSigningInfosQueryVariables>;
export const ValidatorInfoDocument = gql`
    query ValidatorInfo($address: String) {
  validator_denom(
    where: {validator: {validator_info: {operator_address: {_eq: $address}}}}
  ) {
    denom
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
        selfDelegateAddress: self_delegate_address
        maxRate: max_rate
      }
      validatorDescriptions: validator_descriptions(
        order_by: {height: desc}
        limit: 1
      ) {
        details
        website
      }
      validatorStatuses: validator_statuses(order_by: {height: desc}, limit: 1) {
        status
        jailed
        height
      }
      validatorSigningInfos: validator_signing_infos(
        order_by: {height: desc}
        limit: 1
      ) {
        missedBlocksCounter: missed_blocks_counter
        tombstoned
      }
      validatorCommissions: validator_commissions(order_by: {height: desc}, limit: 1) {
        commission
      }
    }
  }
  slashingParams: slashing_params(order_by: {height: desc}, limit: 1) {
    params
  }
}
    `;

/**
 * __useValidatorInfoQuery__
 *
 * To run a query within a React component, call `useValidatorInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorInfoQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorInfoQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorInfoQuery, ValidatorInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorInfoQuery, ValidatorInfoQueryVariables>(ValidatorInfoDocument, options);
      }
export function useValidatorInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorInfoQuery, ValidatorInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorInfoQuery, ValidatorInfoQueryVariables>(ValidatorInfoDocument, options);
        }
export type ValidatorInfoQueryHookResult = ReturnType<typeof useValidatorInfoQuery>;
export type ValidatorInfoLazyQueryHookResult = ReturnType<typeof useValidatorInfoLazyQuery>;
export type ValidatorInfoQueryResult = Apollo.QueryResult<ValidatorInfoQuery, ValidatorInfoQueryVariables>;
export const ValidatorCommissionDocument = gql`
    query ValidatorCommission($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorCommissions: validator_commissions(order_by: {height: desc}, limit: 1) {
      commission
    }
  }
}
    `;

/**
 * __useValidatorCommissionQuery__
 *
 * To run a query within a React component, call `useValidatorCommissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorCommissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorCommissionQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorCommissionQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>(ValidatorCommissionDocument, options);
      }
export function useValidatorCommissionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>(ValidatorCommissionDocument, options);
        }
export type ValidatorCommissionQueryHookResult = ReturnType<typeof useValidatorCommissionQuery>;
export type ValidatorCommissionLazyQueryHookResult = ReturnType<typeof useValidatorCommissionLazyQuery>;
export type ValidatorCommissionQueryResult = Apollo.QueryResult<ValidatorCommissionQuery, ValidatorCommissionQueryVariables>;
export const ValidatorVotingPowersDocument = gql`
    query ValidatorVotingPowers($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorVotingPowers: validator_voting_powers(
      offset: 0
      limit: 1
      order_by: {height: desc}
    ) {
      height
      votingPower: voting_power
    }
    validatorStatuses: validator_statuses(order_by: {height: desc}, limit: 1) {
      status
    }
  }
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1, offset: 0) {
    height
    bonded: bonded_tokens
  }
}
    `;

/**
 * __useValidatorVotingPowersQuery__
 *
 * To run a query within a React component, call `useValidatorVotingPowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorVotingPowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorVotingPowersQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorVotingPowersQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>(ValidatorVotingPowersDocument, options);
      }
export function useValidatorVotingPowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>(ValidatorVotingPowersDocument, options);
        }
export type ValidatorVotingPowersQueryHookResult = ReturnType<typeof useValidatorVotingPowersQuery>;
export type ValidatorVotingPowersLazyQueryHookResult = ReturnType<typeof useValidatorVotingPowersLazyQuery>;
export type ValidatorVotingPowersQueryResult = Apollo.QueryResult<ValidatorVotingPowersQuery, ValidatorVotingPowersQueryVariables>;
export const ValidatorAddressDocument = gql`
    query ValidatorAddress($address: String) {
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorInfo: validator_info {
      operatorAddress: operator_address
      selfDelegateAddress: self_delegate_address
    }
  }
}
    `;

/**
 * __useValidatorAddressQuery__
 *
 * To run a query within a React component, call `useValidatorAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorAddressQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorAddressQuery, ValidatorAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorAddressQuery, ValidatorAddressQueryVariables>(ValidatorAddressDocument, options);
      }
export function useValidatorAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorAddressQuery, ValidatorAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorAddressQuery, ValidatorAddressQueryVariables>(ValidatorAddressDocument, options);
        }
export type ValidatorAddressQueryHookResult = ReturnType<typeof useValidatorAddressQuery>;
export type ValidatorAddressLazyQueryHookResult = ReturnType<typeof useValidatorAddressLazyQuery>;
export type ValidatorAddressQueryResult = Apollo.QueryResult<ValidatorAddressQuery, ValidatorAddressQueryVariables>;
export const ValidatorDelegationsDocument = gql`
    query ValidatorDelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  delegations: action_validator_delegations(
    address: $validatorAddress
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    delegations
    pagination
  }
}
    `;

/**
 * __useValidatorDelegationsQuery__
 *
 * To run a query within a React component, call `useValidatorDelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorDelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorDelegationsQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useValidatorDelegationsQuery(baseOptions: Apollo.QueryHookOptions<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>(ValidatorDelegationsDocument, options);
      }
export function useValidatorDelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>(ValidatorDelegationsDocument, options);
        }
export type ValidatorDelegationsQueryHookResult = ReturnType<typeof useValidatorDelegationsQuery>;
export type ValidatorDelegationsLazyQueryHookResult = ReturnType<typeof useValidatorDelegationsLazyQuery>;
export type ValidatorDelegationsQueryResult = Apollo.QueryResult<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>;
export const ValidatorRedelegationsDocument = gql`
    query ValidatorRedelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  redelegations: action_validator_redelegations_from(
    address: $validatorAddress
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    redelegations
    pagination
  }
}
    `;

/**
 * __useValidatorRedelegationsQuery__
 *
 * To run a query within a React component, call `useValidatorRedelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorRedelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorRedelegationsQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useValidatorRedelegationsQuery(baseOptions: Apollo.QueryHookOptions<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>(ValidatorRedelegationsDocument, options);
      }
export function useValidatorRedelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>(ValidatorRedelegationsDocument, options);
        }
export type ValidatorRedelegationsQueryHookResult = ReturnType<typeof useValidatorRedelegationsQuery>;
export type ValidatorRedelegationsLazyQueryHookResult = ReturnType<typeof useValidatorRedelegationsLazyQuery>;
export type ValidatorRedelegationsQueryResult = Apollo.QueryResult<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>;
export const ValidatorUndelegationsDocument = gql`
    query ValidatorUndelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  undelegations: action_validator_unbonding_delegations(
    address: $validatorAddress
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    undelegations: unbonding_delegations
    pagination
  }
}
    `;

/**
 * __useValidatorUndelegationsQuery__
 *
 * To run a query within a React component, call `useValidatorUndelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorUndelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorUndelegationsQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useValidatorUndelegationsQuery(baseOptions: Apollo.QueryHookOptions<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>(ValidatorUndelegationsDocument, options);
      }
export function useValidatorUndelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>(ValidatorUndelegationsDocument, options);
        }
export type ValidatorUndelegationsQueryHookResult = ReturnType<typeof useValidatorUndelegationsQuery>;
export type ValidatorUndelegationsLazyQueryHookResult = ReturnType<typeof useValidatorUndelegationsLazyQuery>;
export type ValidatorUndelegationsQueryResult = Apollo.QueryResult<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>;
export const ValidatorsDocument = gql`
    query Validators {
  stakingPool: staking_pool(limit: 1, order_by: {height: desc}) {
    bondedTokens: bonded_tokens
  }
  validator_denom {
    denom
    validator {
      validatorStatuses: validator_statuses(order_by: {height: desc}, limit: 1) {
        status
        jailed
        height
      }
      validatorSigningInfos: validator_signing_infos(
        order_by: {height: desc}
        limit: 1
      ) {
        missedBlocksCounter: missed_blocks_counter
        tombstoned
      }
      validatorInfo: validator_info {
        operatorAddress: operator_address
        selfDelegateAddress: self_delegate_address
      }
      validatorVotingPowers: validator_voting_powers(
        offset: 0
        limit: 1
        order_by: {height: desc}
      ) {
        votingPower: voting_power
      }
      validatorCommissions: validator_commissions(order_by: {height: desc}, limit: 1) {
        commission
      }
      validatorSigningInfos: validator_signing_infos(
        order_by: {height: desc}
        limit: 1
      ) {
        missedBlocksCounter: missed_blocks_counter
      }
    }
  }
  slashingParams: slashing_params(order_by: {height: desc}, limit: 1) {
    params
  }
}
    `;

/**
 * __useValidatorsQuery__
 *
 * To run a query within a React component, call `useValidatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorsQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorsQuery, ValidatorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, options);
      }
export function useValidatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorsQuery, ValidatorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, options);
        }
export type ValidatorsQueryHookResult = ReturnType<typeof useValidatorsQuery>;
export type ValidatorsLazyQueryHookResult = ReturnType<typeof useValidatorsLazyQuery>;
export type ValidatorsQueryResult = Apollo.QueryResult<ValidatorsQuery, ValidatorsQueryVariables>;
export const ValidatorAddressesDocument = gql`
    query ValidatorAddresses {
  validator(
    where: {validator_info: {operator_address: {_is_null: false}, consensus_address: {_is_null: false}, self_delegate_address: {_is_null: false}}}
  ) {
    validatorInfo: validator_info {
      operatorAddress: operator_address
      selfDelegateAddress: self_delegate_address
      consensusAddress: consensus_address
    }
    validatorDescriptions: validator_descriptions(
      limit: 1
      order_by: {height: desc}
    ) {
      moniker
      avatarUrl: avatar_url
    }
  }
}
    `;

/**
 * __useValidatorAddressesQuery__
 *
 * To run a query within a React component, call `useValidatorAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorAddressesQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>(ValidatorAddressesDocument, options);
      }
export function useValidatorAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>(ValidatorAddressesDocument, options);
        }
export type ValidatorAddressesQueryHookResult = ReturnType<typeof useValidatorAddressesQuery>;
export type ValidatorAddressesLazyQueryHookResult = ReturnType<typeof useValidatorAddressesLazyQuery>;
export type ValidatorAddressesQueryResult = Apollo.QueryResult<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>;