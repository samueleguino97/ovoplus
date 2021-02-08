import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "delivery.customer" */
export type Delivery_Customer = {
  __typename?: 'delivery_customer';
  NIT: Scalars['String'];
  address: Scalars['String'];
  full_name: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  orders: Array<Delivery_Order>;
  /** An aggregated array relationship */
  orders_aggregate: Delivery_Order_Aggregate;
  phone: Scalars['String'];
};


/** columns and relationships of "delivery.customer" */
export type Delivery_CustomerOrdersArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Order_By>>;
  where?: Maybe<Delivery_Order_Bool_Exp>;
};


/** columns and relationships of "delivery.customer" */
export type Delivery_CustomerOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Order_By>>;
  where?: Maybe<Delivery_Order_Bool_Exp>;
};

/** aggregated selection of "delivery.customer" */
export type Delivery_Customer_Aggregate = {
  __typename?: 'delivery_customer_aggregate';
  aggregate?: Maybe<Delivery_Customer_Aggregate_Fields>;
  nodes: Array<Delivery_Customer>;
};

/** aggregate fields of "delivery.customer" */
export type Delivery_Customer_Aggregate_Fields = {
  __typename?: 'delivery_customer_aggregate_fields';
  avg?: Maybe<Delivery_Customer_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Delivery_Customer_Max_Fields>;
  min?: Maybe<Delivery_Customer_Min_Fields>;
  stddev?: Maybe<Delivery_Customer_Stddev_Fields>;
  stddev_pop?: Maybe<Delivery_Customer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Delivery_Customer_Stddev_Samp_Fields>;
  sum?: Maybe<Delivery_Customer_Sum_Fields>;
  var_pop?: Maybe<Delivery_Customer_Var_Pop_Fields>;
  var_samp?: Maybe<Delivery_Customer_Var_Samp_Fields>;
  variance?: Maybe<Delivery_Customer_Variance_Fields>;
};


/** aggregate fields of "delivery.customer" */
export type Delivery_Customer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Delivery_Customer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "delivery.customer" */
export type Delivery_Customer_Aggregate_Order_By = {
  avg?: Maybe<Delivery_Customer_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Delivery_Customer_Max_Order_By>;
  min?: Maybe<Delivery_Customer_Min_Order_By>;
  stddev?: Maybe<Delivery_Customer_Stddev_Order_By>;
  stddev_pop?: Maybe<Delivery_Customer_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Delivery_Customer_Stddev_Samp_Order_By>;
  sum?: Maybe<Delivery_Customer_Sum_Order_By>;
  var_pop?: Maybe<Delivery_Customer_Var_Pop_Order_By>;
  var_samp?: Maybe<Delivery_Customer_Var_Samp_Order_By>;
  variance?: Maybe<Delivery_Customer_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "delivery.customer" */
export type Delivery_Customer_Arr_Rel_Insert_Input = {
  data: Array<Delivery_Customer_Insert_Input>;
  on_conflict?: Maybe<Delivery_Customer_On_Conflict>;
};

/** aggregate avg on columns */
export type Delivery_Customer_Avg_Fields = {
  __typename?: 'delivery_customer_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "delivery.customer" */
export type Delivery_Customer_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "delivery.customer". All fields are combined with a logical 'AND'. */
export type Delivery_Customer_Bool_Exp = {
  NIT?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Delivery_Customer_Bool_Exp>>>;
  _not?: Maybe<Delivery_Customer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Delivery_Customer_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  full_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  orders?: Maybe<Delivery_Order_Bool_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery.customer" */
export enum Delivery_Customer_Constraint {
  /** unique or primary key constraint */
  CustomerPkey = 'customer_pkey'
}

/** input type for incrementing integer column in table "delivery.customer" */
export type Delivery_Customer_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "delivery.customer" */
export type Delivery_Customer_Insert_Input = {
  NIT?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  orders?: Maybe<Delivery_Order_Arr_Rel_Insert_Input>;
  phone?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Delivery_Customer_Max_Fields = {
  __typename?: 'delivery_customer_max_fields';
  NIT?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "delivery.customer" */
export type Delivery_Customer_Max_Order_By = {
  NIT?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Delivery_Customer_Min_Fields = {
  __typename?: 'delivery_customer_min_fields';
  NIT?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "delivery.customer" */
export type Delivery_Customer_Min_Order_By = {
  NIT?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** response of any mutation on the table "delivery.customer" */
export type Delivery_Customer_Mutation_Response = {
  __typename?: 'delivery_customer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Delivery_Customer>;
};

/** input type for inserting object relation for remote table "delivery.customer" */
export type Delivery_Customer_Obj_Rel_Insert_Input = {
  data: Delivery_Customer_Insert_Input;
  on_conflict?: Maybe<Delivery_Customer_On_Conflict>;
};

/** on conflict condition type for table "delivery.customer" */
export type Delivery_Customer_On_Conflict = {
  constraint: Delivery_Customer_Constraint;
  update_columns: Array<Delivery_Customer_Update_Column>;
  where?: Maybe<Delivery_Customer_Bool_Exp>;
};

/** ordering options when selecting data from "delivery.customer" */
export type Delivery_Customer_Order_By = {
  NIT?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Delivery_Order_Aggregate_Order_By>;
  phone?: Maybe<Order_By>;
};

/** primary key columns input for table: "delivery.customer" */
export type Delivery_Customer_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "delivery.customer" */
export enum Delivery_Customer_Select_Column {
  /** column name */
  Nit = 'NIT',
  /** column name */
  Address = 'address',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  Phone = 'phone'
}

/** input type for updating data in table "delivery.customer" */
export type Delivery_Customer_Set_Input = {
  NIT?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Delivery_Customer_Stddev_Fields = {
  __typename?: 'delivery_customer_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "delivery.customer" */
export type Delivery_Customer_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Delivery_Customer_Stddev_Pop_Fields = {
  __typename?: 'delivery_customer_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "delivery.customer" */
export type Delivery_Customer_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Delivery_Customer_Stddev_Samp_Fields = {
  __typename?: 'delivery_customer_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "delivery.customer" */
export type Delivery_Customer_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Delivery_Customer_Sum_Fields = {
  __typename?: 'delivery_customer_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "delivery.customer" */
export type Delivery_Customer_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "delivery.customer" */
export enum Delivery_Customer_Update_Column {
  /** column name */
  Nit = 'NIT',
  /** column name */
  Address = 'address',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  Phone = 'phone'
}

/** aggregate var_pop on columns */
export type Delivery_Customer_Var_Pop_Fields = {
  __typename?: 'delivery_customer_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "delivery.customer" */
export type Delivery_Customer_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Delivery_Customer_Var_Samp_Fields = {
  __typename?: 'delivery_customer_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "delivery.customer" */
export type Delivery_Customer_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Delivery_Customer_Variance_Fields = {
  __typename?: 'delivery_customer_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "delivery.customer" */
export type Delivery_Customer_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "delivery.items" */
export type Delivery_Items = {
  __typename?: 'delivery_items';
  delivery_price: Scalars['numeric'];
  id: Scalars['Int'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  store_price: Scalars['numeric'];
};

/** aggregated selection of "delivery.items" */
export type Delivery_Items_Aggregate = {
  __typename?: 'delivery_items_aggregate';
  aggregate?: Maybe<Delivery_Items_Aggregate_Fields>;
  nodes: Array<Delivery_Items>;
};

/** aggregate fields of "delivery.items" */
export type Delivery_Items_Aggregate_Fields = {
  __typename?: 'delivery_items_aggregate_fields';
  avg?: Maybe<Delivery_Items_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Delivery_Items_Max_Fields>;
  min?: Maybe<Delivery_Items_Min_Fields>;
  stddev?: Maybe<Delivery_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Delivery_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Delivery_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Delivery_Items_Sum_Fields>;
  var_pop?: Maybe<Delivery_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Delivery_Items_Var_Samp_Fields>;
  variance?: Maybe<Delivery_Items_Variance_Fields>;
};


/** aggregate fields of "delivery.items" */
export type Delivery_Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Delivery_Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "delivery.items" */
export type Delivery_Items_Aggregate_Order_By = {
  avg?: Maybe<Delivery_Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Delivery_Items_Max_Order_By>;
  min?: Maybe<Delivery_Items_Min_Order_By>;
  stddev?: Maybe<Delivery_Items_Stddev_Order_By>;
  stddev_pop?: Maybe<Delivery_Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Delivery_Items_Stddev_Samp_Order_By>;
  sum?: Maybe<Delivery_Items_Sum_Order_By>;
  var_pop?: Maybe<Delivery_Items_Var_Pop_Order_By>;
  var_samp?: Maybe<Delivery_Items_Var_Samp_Order_By>;
  variance?: Maybe<Delivery_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "delivery.items" */
export type Delivery_Items_Arr_Rel_Insert_Input = {
  data: Array<Delivery_Items_Insert_Input>;
  on_conflict?: Maybe<Delivery_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Delivery_Items_Avg_Fields = {
  __typename?: 'delivery_items_avg_fields';
  delivery_price?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  store_price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "delivery.items" */
export type Delivery_Items_Avg_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "delivery.items". All fields are combined with a logical 'AND'. */
export type Delivery_Items_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Delivery_Items_Bool_Exp>>>;
  _not?: Maybe<Delivery_Items_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Delivery_Items_Bool_Exp>>>;
  delivery_price?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
  store_price?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery.items" */
export enum Delivery_Items_Constraint {
  /** unique or primary key constraint */
  ItemsNameKey = 'items_name_key',
  /** unique or primary key constraint */
  ItemsPkey = 'items_pkey'
}

/** input type for incrementing integer column in table "delivery.items" */
export type Delivery_Items_Inc_Input = {
  delivery_price?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  store_price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "delivery.items" */
export type Delivery_Items_Insert_Input = {
  delivery_price?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  store_price?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Delivery_Items_Max_Fields = {
  __typename?: 'delivery_items_max_fields';
  delivery_price?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  store_price?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "delivery.items" */
export type Delivery_Items_Max_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Delivery_Items_Min_Fields = {
  __typename?: 'delivery_items_min_fields';
  delivery_price?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  store_price?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "delivery.items" */
export type Delivery_Items_Min_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** response of any mutation on the table "delivery.items" */
export type Delivery_Items_Mutation_Response = {
  __typename?: 'delivery_items_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Delivery_Items>;
};

/** input type for inserting object relation for remote table "delivery.items" */
export type Delivery_Items_Obj_Rel_Insert_Input = {
  data: Delivery_Items_Insert_Input;
  on_conflict?: Maybe<Delivery_Items_On_Conflict>;
};

/** on conflict condition type for table "delivery.items" */
export type Delivery_Items_On_Conflict = {
  constraint: Delivery_Items_Constraint;
  update_columns: Array<Delivery_Items_Update_Column>;
  where?: Maybe<Delivery_Items_Bool_Exp>;
};

/** ordering options when selecting data from "delivery.items" */
export type Delivery_Items_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** primary key columns input for table: "delivery.items" */
export type Delivery_Items_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "delivery.items" */
export enum Delivery_Items_Select_Column {
  /** column name */
  DeliveryPrice = 'delivery_price',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StorePrice = 'store_price'
}

/** input type for updating data in table "delivery.items" */
export type Delivery_Items_Set_Input = {
  delivery_price?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  store_price?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Delivery_Items_Stddev_Fields = {
  __typename?: 'delivery_items_stddev_fields';
  delivery_price?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  store_price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "delivery.items" */
export type Delivery_Items_Stddev_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Delivery_Items_Stddev_Pop_Fields = {
  __typename?: 'delivery_items_stddev_pop_fields';
  delivery_price?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  store_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "delivery.items" */
export type Delivery_Items_Stddev_Pop_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Delivery_Items_Stddev_Samp_Fields = {
  __typename?: 'delivery_items_stddev_samp_fields';
  delivery_price?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  store_price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "delivery.items" */
export type Delivery_Items_Stddev_Samp_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Delivery_Items_Sum_Fields = {
  __typename?: 'delivery_items_sum_fields';
  delivery_price?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  store_price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "delivery.items" */
export type Delivery_Items_Sum_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** update columns of table "delivery.items" */
export enum Delivery_Items_Update_Column {
  /** column name */
  DeliveryPrice = 'delivery_price',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StorePrice = 'store_price'
}

/** aggregate var_pop on columns */
export type Delivery_Items_Var_Pop_Fields = {
  __typename?: 'delivery_items_var_pop_fields';
  delivery_price?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  store_price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "delivery.items" */
export type Delivery_Items_Var_Pop_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Delivery_Items_Var_Samp_Fields = {
  __typename?: 'delivery_items_var_samp_fields';
  delivery_price?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  store_price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "delivery.items" */
export type Delivery_Items_Var_Samp_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Delivery_Items_Variance_Fields = {
  __typename?: 'delivery_items_variance_fields';
  delivery_price?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  store_price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "delivery.items" */
export type Delivery_Items_Variance_Order_By = {
  delivery_price?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  store_price?: Maybe<Order_By>;
};

/** columns and relationships of "delivery.order" */
export type Delivery_Order = {
  __typename?: 'delivery_order';
  clarification: Scalars['String'];
  /** An object relationship */
  customer: Delivery_Customer;
  customer_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An array relationship */
  items: Array<Delivery_Order_Items>;
  /** An aggregated array relationship */
  items_aggregate: Delivery_Order_Items_Aggregate;
  order_date: Scalars['date'];
  order_time_of_day: Scalars['String'];
  payment_type: Scalars['String'];
  person_in_charge: Scalars['String'];
  programmed_date: Scalars['date'];
  /** An object relationship */
  route?: Maybe<Delivery_Routes>;
  route_id?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  total: Scalars['numeric'];
};


/** columns and relationships of "delivery.order" */
export type Delivery_OrderItemsArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Items_Order_By>>;
  where?: Maybe<Delivery_Order_Items_Bool_Exp>;
};


/** columns and relationships of "delivery.order" */
export type Delivery_OrderItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Items_Order_By>>;
  where?: Maybe<Delivery_Order_Items_Bool_Exp>;
};

/** aggregated selection of "delivery.order" */
export type Delivery_Order_Aggregate = {
  __typename?: 'delivery_order_aggregate';
  aggregate?: Maybe<Delivery_Order_Aggregate_Fields>;
  nodes: Array<Delivery_Order>;
};

/** aggregate fields of "delivery.order" */
export type Delivery_Order_Aggregate_Fields = {
  __typename?: 'delivery_order_aggregate_fields';
  avg?: Maybe<Delivery_Order_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Delivery_Order_Max_Fields>;
  min?: Maybe<Delivery_Order_Min_Fields>;
  stddev?: Maybe<Delivery_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Delivery_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Delivery_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Delivery_Order_Sum_Fields>;
  var_pop?: Maybe<Delivery_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Delivery_Order_Var_Samp_Fields>;
  variance?: Maybe<Delivery_Order_Variance_Fields>;
};


/** aggregate fields of "delivery.order" */
export type Delivery_Order_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Delivery_Order_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "delivery.order" */
export type Delivery_Order_Aggregate_Order_By = {
  avg?: Maybe<Delivery_Order_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Delivery_Order_Max_Order_By>;
  min?: Maybe<Delivery_Order_Min_Order_By>;
  stddev?: Maybe<Delivery_Order_Stddev_Order_By>;
  stddev_pop?: Maybe<Delivery_Order_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Delivery_Order_Stddev_Samp_Order_By>;
  sum?: Maybe<Delivery_Order_Sum_Order_By>;
  var_pop?: Maybe<Delivery_Order_Var_Pop_Order_By>;
  var_samp?: Maybe<Delivery_Order_Var_Samp_Order_By>;
  variance?: Maybe<Delivery_Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "delivery.order" */
export type Delivery_Order_Arr_Rel_Insert_Input = {
  data: Array<Delivery_Order_Insert_Input>;
  on_conflict?: Maybe<Delivery_Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Delivery_Order_Avg_Fields = {
  __typename?: 'delivery_order_avg_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "delivery.order" */
export type Delivery_Order_Avg_Order_By = {
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "delivery.order". All fields are combined with a logical 'AND'. */
export type Delivery_Order_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Delivery_Order_Bool_Exp>>>;
  _not?: Maybe<Delivery_Order_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Delivery_Order_Bool_Exp>>>;
  clarification?: Maybe<String_Comparison_Exp>;
  customer?: Maybe<Delivery_Customer_Bool_Exp>;
  customer_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  items?: Maybe<Delivery_Order_Items_Bool_Exp>;
  order_date?: Maybe<Date_Comparison_Exp>;
  order_time_of_day?: Maybe<String_Comparison_Exp>;
  payment_type?: Maybe<String_Comparison_Exp>;
  person_in_charge?: Maybe<String_Comparison_Exp>;
  programmed_date?: Maybe<Date_Comparison_Exp>;
  route?: Maybe<Delivery_Routes_Bool_Exp>;
  route_id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery.order" */
export enum Delivery_Order_Constraint {
  /** unique or primary key constraint */
  OrderPkey = 'order_pkey'
}

/** input type for incrementing integer column in table "delivery.order" */
export type Delivery_Order_Inc_Input = {
  customer_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  route_id?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "delivery.order" */
export type Delivery_Order_Insert_Input = {
  clarification?: Maybe<Scalars['String']>;
  customer?: Maybe<Delivery_Customer_Obj_Rel_Insert_Input>;
  customer_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  items?: Maybe<Delivery_Order_Items_Arr_Rel_Insert_Input>;
  order_date?: Maybe<Scalars['date']>;
  order_time_of_day?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  person_in_charge?: Maybe<Scalars['String']>;
  programmed_date?: Maybe<Scalars['date']>;
  route?: Maybe<Delivery_Routes_Obj_Rel_Insert_Input>;
  route_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** columns and relationships of "delivery.order_items" */
export type Delivery_Order_Items = {
  __typename?: 'delivery_order_items';
  id: Scalars['Int'];
  /** An object relationship */
  item: Delivery_Items;
  item_id: Scalars['Int'];
  /** An object relationship */
  order: Delivery_Order;
  order_id: Scalars['Int'];
  price: Scalars['numeric'];
  quantity: Scalars['Int'];
};

/** aggregated selection of "delivery.order_items" */
export type Delivery_Order_Items_Aggregate = {
  __typename?: 'delivery_order_items_aggregate';
  aggregate?: Maybe<Delivery_Order_Items_Aggregate_Fields>;
  nodes: Array<Delivery_Order_Items>;
};

/** aggregate fields of "delivery.order_items" */
export type Delivery_Order_Items_Aggregate_Fields = {
  __typename?: 'delivery_order_items_aggregate_fields';
  avg?: Maybe<Delivery_Order_Items_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Delivery_Order_Items_Max_Fields>;
  min?: Maybe<Delivery_Order_Items_Min_Fields>;
  stddev?: Maybe<Delivery_Order_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Delivery_Order_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Delivery_Order_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Delivery_Order_Items_Sum_Fields>;
  var_pop?: Maybe<Delivery_Order_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Delivery_Order_Items_Var_Samp_Fields>;
  variance?: Maybe<Delivery_Order_Items_Variance_Fields>;
};


/** aggregate fields of "delivery.order_items" */
export type Delivery_Order_Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Delivery_Order_Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "delivery.order_items" */
export type Delivery_Order_Items_Aggregate_Order_By = {
  avg?: Maybe<Delivery_Order_Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Delivery_Order_Items_Max_Order_By>;
  min?: Maybe<Delivery_Order_Items_Min_Order_By>;
  stddev?: Maybe<Delivery_Order_Items_Stddev_Order_By>;
  stddev_pop?: Maybe<Delivery_Order_Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Delivery_Order_Items_Stddev_Samp_Order_By>;
  sum?: Maybe<Delivery_Order_Items_Sum_Order_By>;
  var_pop?: Maybe<Delivery_Order_Items_Var_Pop_Order_By>;
  var_samp?: Maybe<Delivery_Order_Items_Var_Samp_Order_By>;
  variance?: Maybe<Delivery_Order_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "delivery.order_items" */
export type Delivery_Order_Items_Arr_Rel_Insert_Input = {
  data: Array<Delivery_Order_Items_Insert_Input>;
  on_conflict?: Maybe<Delivery_Order_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Delivery_Order_Items_Avg_Fields = {
  __typename?: 'delivery_order_items_avg_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "delivery.order_items" */
export type Delivery_Order_Items_Avg_Order_By = {
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "delivery.order_items". All fields are combined with a logical 'AND'. */
export type Delivery_Order_Items_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Delivery_Order_Items_Bool_Exp>>>;
  _not?: Maybe<Delivery_Order_Items_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Delivery_Order_Items_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  item?: Maybe<Delivery_Items_Bool_Exp>;
  item_id?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Delivery_Order_Bool_Exp>;
  order_id?: Maybe<Int_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "delivery.order_items" */
export enum Delivery_Order_Items_Constraint {
  /** unique or primary key constraint */
  OrderItemsItemIdKey = 'order_items_item_id_key',
  /** unique or primary key constraint */
  OrderItemsPkey = 'order_items_pkey'
}

/** input type for incrementing integer column in table "delivery.order_items" */
export type Delivery_Order_Items_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "delivery.order_items" */
export type Delivery_Order_Items_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  item?: Maybe<Delivery_Items_Obj_Rel_Insert_Input>;
  item_id?: Maybe<Scalars['Int']>;
  order?: Maybe<Delivery_Order_Obj_Rel_Insert_Input>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Delivery_Order_Items_Max_Fields = {
  __typename?: 'delivery_order_items_max_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "delivery.order_items" */
export type Delivery_Order_Items_Max_Order_By = {
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Delivery_Order_Items_Min_Fields = {
  __typename?: 'delivery_order_items_min_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "delivery.order_items" */
export type Delivery_Order_Items_Min_Order_By = {
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** response of any mutation on the table "delivery.order_items" */
export type Delivery_Order_Items_Mutation_Response = {
  __typename?: 'delivery_order_items_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Delivery_Order_Items>;
};

/** input type for inserting object relation for remote table "delivery.order_items" */
export type Delivery_Order_Items_Obj_Rel_Insert_Input = {
  data: Delivery_Order_Items_Insert_Input;
  on_conflict?: Maybe<Delivery_Order_Items_On_Conflict>;
};

/** on conflict condition type for table "delivery.order_items" */
export type Delivery_Order_Items_On_Conflict = {
  constraint: Delivery_Order_Items_Constraint;
  update_columns: Array<Delivery_Order_Items_Update_Column>;
  where?: Maybe<Delivery_Order_Items_Bool_Exp>;
};

/** ordering options when selecting data from "delivery.order_items" */
export type Delivery_Order_Items_Order_By = {
  id?: Maybe<Order_By>;
  item?: Maybe<Delivery_Items_Order_By>;
  item_id?: Maybe<Order_By>;
  order?: Maybe<Delivery_Order_Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** primary key columns input for table: "delivery.order_items" */
export type Delivery_Order_Items_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "delivery.order_items" */
export enum Delivery_Order_Items_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "delivery.order_items" */
export type Delivery_Order_Items_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Delivery_Order_Items_Stddev_Fields = {
  __typename?: 'delivery_order_items_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "delivery.order_items" */
export type Delivery_Order_Items_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Delivery_Order_Items_Stddev_Pop_Fields = {
  __typename?: 'delivery_order_items_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "delivery.order_items" */
export type Delivery_Order_Items_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Delivery_Order_Items_Stddev_Samp_Fields = {
  __typename?: 'delivery_order_items_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "delivery.order_items" */
export type Delivery_Order_Items_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Delivery_Order_Items_Sum_Fields = {
  __typename?: 'delivery_order_items_sum_fields';
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "delivery.order_items" */
export type Delivery_Order_Items_Sum_Order_By = {
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** update columns of table "delivery.order_items" */
export enum Delivery_Order_Items_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity'
}

/** aggregate var_pop on columns */
export type Delivery_Order_Items_Var_Pop_Fields = {
  __typename?: 'delivery_order_items_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "delivery.order_items" */
export type Delivery_Order_Items_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Delivery_Order_Items_Var_Samp_Fields = {
  __typename?: 'delivery_order_items_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "delivery.order_items" */
export type Delivery_Order_Items_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Delivery_Order_Items_Variance_Fields = {
  __typename?: 'delivery_order_items_variance_fields';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "delivery.order_items" */
export type Delivery_Order_Items_Variance_Order_By = {
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Delivery_Order_Max_Fields = {
  __typename?: 'delivery_order_max_fields';
  clarification?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_date?: Maybe<Scalars['date']>;
  order_time_of_day?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  person_in_charge?: Maybe<Scalars['String']>;
  programmed_date?: Maybe<Scalars['date']>;
  route_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "delivery.order" */
export type Delivery_Order_Max_Order_By = {
  clarification?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_date?: Maybe<Order_By>;
  order_time_of_day?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  person_in_charge?: Maybe<Order_By>;
  programmed_date?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Delivery_Order_Min_Fields = {
  __typename?: 'delivery_order_min_fields';
  clarification?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_date?: Maybe<Scalars['date']>;
  order_time_of_day?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  person_in_charge?: Maybe<Scalars['String']>;
  programmed_date?: Maybe<Scalars['date']>;
  route_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "delivery.order" */
export type Delivery_Order_Min_Order_By = {
  clarification?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_date?: Maybe<Order_By>;
  order_time_of_day?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  person_in_charge?: Maybe<Order_By>;
  programmed_date?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** response of any mutation on the table "delivery.order" */
export type Delivery_Order_Mutation_Response = {
  __typename?: 'delivery_order_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Delivery_Order>;
};

/** input type for inserting object relation for remote table "delivery.order" */
export type Delivery_Order_Obj_Rel_Insert_Input = {
  data: Delivery_Order_Insert_Input;
  on_conflict?: Maybe<Delivery_Order_On_Conflict>;
};

/** on conflict condition type for table "delivery.order" */
export type Delivery_Order_On_Conflict = {
  constraint: Delivery_Order_Constraint;
  update_columns: Array<Delivery_Order_Update_Column>;
  where?: Maybe<Delivery_Order_Bool_Exp>;
};

/** ordering options when selecting data from "delivery.order" */
export type Delivery_Order_Order_By = {
  clarification?: Maybe<Order_By>;
  customer?: Maybe<Delivery_Customer_Order_By>;
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  items_aggregate?: Maybe<Delivery_Order_Items_Aggregate_Order_By>;
  order_date?: Maybe<Order_By>;
  order_time_of_day?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  person_in_charge?: Maybe<Order_By>;
  programmed_date?: Maybe<Order_By>;
  route?: Maybe<Delivery_Routes_Order_By>;
  route_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** primary key columns input for table: "delivery.order" */
export type Delivery_Order_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "delivery.order" */
export enum Delivery_Order_Select_Column {
  /** column name */
  Clarification = 'clarification',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  OrderTimeOfDay = 'order_time_of_day',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  PersonInCharge = 'person_in_charge',
  /** column name */
  ProgrammedDate = 'programmed_date',
  /** column name */
  RouteId = 'route_id',
  /** column name */
  Status = 'status',
  /** column name */
  Total = 'total'
}

/** input type for updating data in table "delivery.order" */
export type Delivery_Order_Set_Input = {
  clarification?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_date?: Maybe<Scalars['date']>;
  order_time_of_day?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  person_in_charge?: Maybe<Scalars['String']>;
  programmed_date?: Maybe<Scalars['date']>;
  route_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Delivery_Order_Stddev_Fields = {
  __typename?: 'delivery_order_stddev_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "delivery.order" */
export type Delivery_Order_Stddev_Order_By = {
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Delivery_Order_Stddev_Pop_Fields = {
  __typename?: 'delivery_order_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "delivery.order" */
export type Delivery_Order_Stddev_Pop_Order_By = {
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Delivery_Order_Stddev_Samp_Fields = {
  __typename?: 'delivery_order_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "delivery.order" */
export type Delivery_Order_Stddev_Samp_Order_By = {
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Delivery_Order_Sum_Fields = {
  __typename?: 'delivery_order_sum_fields';
  customer_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  route_id?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "delivery.order" */
export type Delivery_Order_Sum_Order_By = {
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** update columns of table "delivery.order" */
export enum Delivery_Order_Update_Column {
  /** column name */
  Clarification = 'clarification',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  OrderTimeOfDay = 'order_time_of_day',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  PersonInCharge = 'person_in_charge',
  /** column name */
  ProgrammedDate = 'programmed_date',
  /** column name */
  RouteId = 'route_id',
  /** column name */
  Status = 'status',
  /** column name */
  Total = 'total'
}

/** aggregate var_pop on columns */
export type Delivery_Order_Var_Pop_Fields = {
  __typename?: 'delivery_order_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "delivery.order" */
export type Delivery_Order_Var_Pop_Order_By = {
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Delivery_Order_Var_Samp_Fields = {
  __typename?: 'delivery_order_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "delivery.order" */
export type Delivery_Order_Var_Samp_Order_By = {
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Delivery_Order_Variance_Fields = {
  __typename?: 'delivery_order_variance_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  route_id?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "delivery.order" */
export type Delivery_Order_Variance_Order_By = {
  customer_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** columns and relationships of "delivery.routes" */
export type Delivery_Routes = {
  __typename?: 'delivery_routes';
  driver_ci: Scalars['String'];
  driver_last: Scalars['String'];
  driver_name: Scalars['String'];
  driver_plate: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Delivery_Order>;
  /** An aggregated array relationship */
  orders_aggregate: Delivery_Order_Aggregate;
};


/** columns and relationships of "delivery.routes" */
export type Delivery_RoutesOrdersArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Order_By>>;
  where?: Maybe<Delivery_Order_Bool_Exp>;
};


/** columns and relationships of "delivery.routes" */
export type Delivery_RoutesOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Order_By>>;
  where?: Maybe<Delivery_Order_Bool_Exp>;
};

/** aggregated selection of "delivery.routes" */
export type Delivery_Routes_Aggregate = {
  __typename?: 'delivery_routes_aggregate';
  aggregate?: Maybe<Delivery_Routes_Aggregate_Fields>;
  nodes: Array<Delivery_Routes>;
};

/** aggregate fields of "delivery.routes" */
export type Delivery_Routes_Aggregate_Fields = {
  __typename?: 'delivery_routes_aggregate_fields';
  avg?: Maybe<Delivery_Routes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Delivery_Routes_Max_Fields>;
  min?: Maybe<Delivery_Routes_Min_Fields>;
  stddev?: Maybe<Delivery_Routes_Stddev_Fields>;
  stddev_pop?: Maybe<Delivery_Routes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Delivery_Routes_Stddev_Samp_Fields>;
  sum?: Maybe<Delivery_Routes_Sum_Fields>;
  var_pop?: Maybe<Delivery_Routes_Var_Pop_Fields>;
  var_samp?: Maybe<Delivery_Routes_Var_Samp_Fields>;
  variance?: Maybe<Delivery_Routes_Variance_Fields>;
};


/** aggregate fields of "delivery.routes" */
export type Delivery_Routes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Delivery_Routes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "delivery.routes" */
export type Delivery_Routes_Aggregate_Order_By = {
  avg?: Maybe<Delivery_Routes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Delivery_Routes_Max_Order_By>;
  min?: Maybe<Delivery_Routes_Min_Order_By>;
  stddev?: Maybe<Delivery_Routes_Stddev_Order_By>;
  stddev_pop?: Maybe<Delivery_Routes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Delivery_Routes_Stddev_Samp_Order_By>;
  sum?: Maybe<Delivery_Routes_Sum_Order_By>;
  var_pop?: Maybe<Delivery_Routes_Var_Pop_Order_By>;
  var_samp?: Maybe<Delivery_Routes_Var_Samp_Order_By>;
  variance?: Maybe<Delivery_Routes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "delivery.routes" */
export type Delivery_Routes_Arr_Rel_Insert_Input = {
  data: Array<Delivery_Routes_Insert_Input>;
  on_conflict?: Maybe<Delivery_Routes_On_Conflict>;
};

/** aggregate avg on columns */
export type Delivery_Routes_Avg_Fields = {
  __typename?: 'delivery_routes_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "delivery.routes" */
export type Delivery_Routes_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "delivery.routes". All fields are combined with a logical 'AND'. */
export type Delivery_Routes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Delivery_Routes_Bool_Exp>>>;
  _not?: Maybe<Delivery_Routes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Delivery_Routes_Bool_Exp>>>;
  driver_ci?: Maybe<String_Comparison_Exp>;
  driver_last?: Maybe<String_Comparison_Exp>;
  driver_name?: Maybe<String_Comparison_Exp>;
  driver_plate?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Delivery_Order_Bool_Exp>;
};

/** unique or primary key constraints on table "delivery.routes" */
export enum Delivery_Routes_Constraint {
  /** unique or primary key constraint */
  RoutesPkey = 'routes_pkey'
}

/** input type for incrementing integer column in table "delivery.routes" */
export type Delivery_Routes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "delivery.routes" */
export type Delivery_Routes_Insert_Input = {
  driver_ci?: Maybe<Scalars['String']>;
  driver_last?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_plate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<Delivery_Order_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Delivery_Routes_Max_Fields = {
  __typename?: 'delivery_routes_max_fields';
  driver_ci?: Maybe<Scalars['String']>;
  driver_last?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_plate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "delivery.routes" */
export type Delivery_Routes_Max_Order_By = {
  driver_ci?: Maybe<Order_By>;
  driver_last?: Maybe<Order_By>;
  driver_name?: Maybe<Order_By>;
  driver_plate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Delivery_Routes_Min_Fields = {
  __typename?: 'delivery_routes_min_fields';
  driver_ci?: Maybe<Scalars['String']>;
  driver_last?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_plate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "delivery.routes" */
export type Delivery_Routes_Min_Order_By = {
  driver_ci?: Maybe<Order_By>;
  driver_last?: Maybe<Order_By>;
  driver_name?: Maybe<Order_By>;
  driver_plate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "delivery.routes" */
export type Delivery_Routes_Mutation_Response = {
  __typename?: 'delivery_routes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Delivery_Routes>;
};

/** input type for inserting object relation for remote table "delivery.routes" */
export type Delivery_Routes_Obj_Rel_Insert_Input = {
  data: Delivery_Routes_Insert_Input;
  on_conflict?: Maybe<Delivery_Routes_On_Conflict>;
};

/** on conflict condition type for table "delivery.routes" */
export type Delivery_Routes_On_Conflict = {
  constraint: Delivery_Routes_Constraint;
  update_columns: Array<Delivery_Routes_Update_Column>;
  where?: Maybe<Delivery_Routes_Bool_Exp>;
};

/** ordering options when selecting data from "delivery.routes" */
export type Delivery_Routes_Order_By = {
  driver_ci?: Maybe<Order_By>;
  driver_last?: Maybe<Order_By>;
  driver_name?: Maybe<Order_By>;
  driver_plate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Delivery_Order_Aggregate_Order_By>;
};

/** primary key columns input for table: "delivery.routes" */
export type Delivery_Routes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "delivery.routes" */
export enum Delivery_Routes_Select_Column {
  /** column name */
  DriverCi = 'driver_ci',
  /** column name */
  DriverLast = 'driver_last',
  /** column name */
  DriverName = 'driver_name',
  /** column name */
  DriverPlate = 'driver_plate',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "delivery.routes" */
export type Delivery_Routes_Set_Input = {
  driver_ci?: Maybe<Scalars['String']>;
  driver_last?: Maybe<Scalars['String']>;
  driver_name?: Maybe<Scalars['String']>;
  driver_plate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Delivery_Routes_Stddev_Fields = {
  __typename?: 'delivery_routes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "delivery.routes" */
export type Delivery_Routes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Delivery_Routes_Stddev_Pop_Fields = {
  __typename?: 'delivery_routes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "delivery.routes" */
export type Delivery_Routes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Delivery_Routes_Stddev_Samp_Fields = {
  __typename?: 'delivery_routes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "delivery.routes" */
export type Delivery_Routes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Delivery_Routes_Sum_Fields = {
  __typename?: 'delivery_routes_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "delivery.routes" */
export type Delivery_Routes_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "delivery.routes" */
export enum Delivery_Routes_Update_Column {
  /** column name */
  DriverCi = 'driver_ci',
  /** column name */
  DriverLast = 'driver_last',
  /** column name */
  DriverName = 'driver_name',
  /** column name */
  DriverPlate = 'driver_plate',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Delivery_Routes_Var_Pop_Fields = {
  __typename?: 'delivery_routes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "delivery.routes" */
export type Delivery_Routes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Delivery_Routes_Var_Samp_Fields = {
  __typename?: 'delivery_routes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "delivery.routes" */
export type Delivery_Routes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Delivery_Routes_Variance_Fields = {
  __typename?: 'delivery_routes_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "delivery.routes" */
export type Delivery_Routes_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "delivery.customer" */
  delete_delivery_customer?: Maybe<Delivery_Customer_Mutation_Response>;
  /** delete single row from the table: "delivery.customer" */
  delete_delivery_customer_by_pk?: Maybe<Delivery_Customer>;
  /** delete data from the table: "delivery.items" */
  delete_delivery_items?: Maybe<Delivery_Items_Mutation_Response>;
  /** delete single row from the table: "delivery.items" */
  delete_delivery_items_by_pk?: Maybe<Delivery_Items>;
  /** delete data from the table: "delivery.order" */
  delete_delivery_order?: Maybe<Delivery_Order_Mutation_Response>;
  /** delete single row from the table: "delivery.order" */
  delete_delivery_order_by_pk?: Maybe<Delivery_Order>;
  /** delete data from the table: "delivery.order_items" */
  delete_delivery_order_items?: Maybe<Delivery_Order_Items_Mutation_Response>;
  /** delete single row from the table: "delivery.order_items" */
  delete_delivery_order_items_by_pk?: Maybe<Delivery_Order_Items>;
  /** delete data from the table: "delivery.routes" */
  delete_delivery_routes?: Maybe<Delivery_Routes_Mutation_Response>;
  /** delete single row from the table: "delivery.routes" */
  delete_delivery_routes_by_pk?: Maybe<Delivery_Routes>;
  /** insert data into the table: "delivery.customer" */
  insert_delivery_customer?: Maybe<Delivery_Customer_Mutation_Response>;
  /** insert a single row into the table: "delivery.customer" */
  insert_delivery_customer_one?: Maybe<Delivery_Customer>;
  /** insert data into the table: "delivery.items" */
  insert_delivery_items?: Maybe<Delivery_Items_Mutation_Response>;
  /** insert a single row into the table: "delivery.items" */
  insert_delivery_items_one?: Maybe<Delivery_Items>;
  /** insert data into the table: "delivery.order" */
  insert_delivery_order?: Maybe<Delivery_Order_Mutation_Response>;
  /** insert data into the table: "delivery.order_items" */
  insert_delivery_order_items?: Maybe<Delivery_Order_Items_Mutation_Response>;
  /** insert a single row into the table: "delivery.order_items" */
  insert_delivery_order_items_one?: Maybe<Delivery_Order_Items>;
  /** insert a single row into the table: "delivery.order" */
  insert_delivery_order_one?: Maybe<Delivery_Order>;
  /** insert data into the table: "delivery.routes" */
  insert_delivery_routes?: Maybe<Delivery_Routes_Mutation_Response>;
  /** insert a single row into the table: "delivery.routes" */
  insert_delivery_routes_one?: Maybe<Delivery_Routes>;
  /** update data of the table: "delivery.customer" */
  update_delivery_customer?: Maybe<Delivery_Customer_Mutation_Response>;
  /** update single row of the table: "delivery.customer" */
  update_delivery_customer_by_pk?: Maybe<Delivery_Customer>;
  /** update data of the table: "delivery.items" */
  update_delivery_items?: Maybe<Delivery_Items_Mutation_Response>;
  /** update single row of the table: "delivery.items" */
  update_delivery_items_by_pk?: Maybe<Delivery_Items>;
  /** update data of the table: "delivery.order" */
  update_delivery_order?: Maybe<Delivery_Order_Mutation_Response>;
  /** update single row of the table: "delivery.order" */
  update_delivery_order_by_pk?: Maybe<Delivery_Order>;
  /** update data of the table: "delivery.order_items" */
  update_delivery_order_items?: Maybe<Delivery_Order_Items_Mutation_Response>;
  /** update single row of the table: "delivery.order_items" */
  update_delivery_order_items_by_pk?: Maybe<Delivery_Order_Items>;
  /** update data of the table: "delivery.routes" */
  update_delivery_routes?: Maybe<Delivery_Routes_Mutation_Response>;
  /** update single row of the table: "delivery.routes" */
  update_delivery_routes_by_pk?: Maybe<Delivery_Routes>;
};


/** mutation root */
export type Mutation_RootDelete_Delivery_CustomerArgs = {
  where: Delivery_Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Delivery_Customer_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Delivery_ItemsArgs = {
  where: Delivery_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Delivery_Items_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Delivery_OrderArgs = {
  where: Delivery_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Delivery_Order_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Delivery_Order_ItemsArgs = {
  where: Delivery_Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Delivery_Order_Items_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Delivery_RoutesArgs = {
  where: Delivery_Routes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Delivery_Routes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Delivery_CustomerArgs = {
  objects: Array<Delivery_Customer_Insert_Input>;
  on_conflict?: Maybe<Delivery_Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_Customer_OneArgs = {
  object: Delivery_Customer_Insert_Input;
  on_conflict?: Maybe<Delivery_Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_ItemsArgs = {
  objects: Array<Delivery_Items_Insert_Input>;
  on_conflict?: Maybe<Delivery_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_Items_OneArgs = {
  object: Delivery_Items_Insert_Input;
  on_conflict?: Maybe<Delivery_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_OrderArgs = {
  objects: Array<Delivery_Order_Insert_Input>;
  on_conflict?: Maybe<Delivery_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_Order_ItemsArgs = {
  objects: Array<Delivery_Order_Items_Insert_Input>;
  on_conflict?: Maybe<Delivery_Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_Order_Items_OneArgs = {
  object: Delivery_Order_Items_Insert_Input;
  on_conflict?: Maybe<Delivery_Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_Order_OneArgs = {
  object: Delivery_Order_Insert_Input;
  on_conflict?: Maybe<Delivery_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_RoutesArgs = {
  objects: Array<Delivery_Routes_Insert_Input>;
  on_conflict?: Maybe<Delivery_Routes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Delivery_Routes_OneArgs = {
  object: Delivery_Routes_Insert_Input;
  on_conflict?: Maybe<Delivery_Routes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_CustomerArgs = {
  _inc?: Maybe<Delivery_Customer_Inc_Input>;
  _set?: Maybe<Delivery_Customer_Set_Input>;
  where: Delivery_Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_Customer_By_PkArgs = {
  _inc?: Maybe<Delivery_Customer_Inc_Input>;
  _set?: Maybe<Delivery_Customer_Set_Input>;
  pk_columns: Delivery_Customer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_ItemsArgs = {
  _inc?: Maybe<Delivery_Items_Inc_Input>;
  _set?: Maybe<Delivery_Items_Set_Input>;
  where: Delivery_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_Items_By_PkArgs = {
  _inc?: Maybe<Delivery_Items_Inc_Input>;
  _set?: Maybe<Delivery_Items_Set_Input>;
  pk_columns: Delivery_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_OrderArgs = {
  _inc?: Maybe<Delivery_Order_Inc_Input>;
  _set?: Maybe<Delivery_Order_Set_Input>;
  where: Delivery_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_Order_By_PkArgs = {
  _inc?: Maybe<Delivery_Order_Inc_Input>;
  _set?: Maybe<Delivery_Order_Set_Input>;
  pk_columns: Delivery_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_Order_ItemsArgs = {
  _inc?: Maybe<Delivery_Order_Items_Inc_Input>;
  _set?: Maybe<Delivery_Order_Items_Set_Input>;
  where: Delivery_Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_Order_Items_By_PkArgs = {
  _inc?: Maybe<Delivery_Order_Items_Inc_Input>;
  _set?: Maybe<Delivery_Order_Items_Set_Input>;
  pk_columns: Delivery_Order_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_RoutesArgs = {
  _inc?: Maybe<Delivery_Routes_Inc_Input>;
  _set?: Maybe<Delivery_Routes_Set_Input>;
  where: Delivery_Routes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Delivery_Routes_By_PkArgs = {
  _inc?: Maybe<Delivery_Routes_Inc_Input>;
  _set?: Maybe<Delivery_Routes_Set_Input>;
  pk_columns: Delivery_Routes_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "delivery.customer" */
  delivery_customer: Array<Delivery_Customer>;
  /** fetch aggregated fields from the table: "delivery.customer" */
  delivery_customer_aggregate: Delivery_Customer_Aggregate;
  /** fetch data from the table: "delivery.customer" using primary key columns */
  delivery_customer_by_pk?: Maybe<Delivery_Customer>;
  /** fetch data from the table: "delivery.items" */
  delivery_items: Array<Delivery_Items>;
  /** fetch aggregated fields from the table: "delivery.items" */
  delivery_items_aggregate: Delivery_Items_Aggregate;
  /** fetch data from the table: "delivery.items" using primary key columns */
  delivery_items_by_pk?: Maybe<Delivery_Items>;
  /** fetch data from the table: "delivery.order" */
  delivery_order: Array<Delivery_Order>;
  /** fetch aggregated fields from the table: "delivery.order" */
  delivery_order_aggregate: Delivery_Order_Aggregate;
  /** fetch data from the table: "delivery.order" using primary key columns */
  delivery_order_by_pk?: Maybe<Delivery_Order>;
  /** fetch data from the table: "delivery.order_items" */
  delivery_order_items: Array<Delivery_Order_Items>;
  /** fetch aggregated fields from the table: "delivery.order_items" */
  delivery_order_items_aggregate: Delivery_Order_Items_Aggregate;
  /** fetch data from the table: "delivery.order_items" using primary key columns */
  delivery_order_items_by_pk?: Maybe<Delivery_Order_Items>;
  /** fetch data from the table: "delivery.routes" */
  delivery_routes: Array<Delivery_Routes>;
  /** fetch aggregated fields from the table: "delivery.routes" */
  delivery_routes_aggregate: Delivery_Routes_Aggregate;
  /** fetch data from the table: "delivery.routes" using primary key columns */
  delivery_routes_by_pk?: Maybe<Delivery_Routes>;
};


/** query root */
export type Query_RootDelivery_CustomerArgs = {
  distinct_on?: Maybe<Array<Delivery_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Customer_Order_By>>;
  where?: Maybe<Delivery_Customer_Bool_Exp>;
};


/** query root */
export type Query_RootDelivery_Customer_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Customer_Order_By>>;
  where?: Maybe<Delivery_Customer_Bool_Exp>;
};


/** query root */
export type Query_RootDelivery_Customer_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDelivery_ItemsArgs = {
  distinct_on?: Maybe<Array<Delivery_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Items_Order_By>>;
  where?: Maybe<Delivery_Items_Bool_Exp>;
};


/** query root */
export type Query_RootDelivery_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Items_Order_By>>;
  where?: Maybe<Delivery_Items_Bool_Exp>;
};


/** query root */
export type Query_RootDelivery_Items_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDelivery_OrderArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Order_By>>;
  where?: Maybe<Delivery_Order_Bool_Exp>;
};


/** query root */
export type Query_RootDelivery_Order_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Order_By>>;
  where?: Maybe<Delivery_Order_Bool_Exp>;
};


/** query root */
export type Query_RootDelivery_Order_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDelivery_Order_ItemsArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Items_Order_By>>;
  where?: Maybe<Delivery_Order_Items_Bool_Exp>;
};


/** query root */
export type Query_RootDelivery_Order_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Items_Order_By>>;
  where?: Maybe<Delivery_Order_Items_Bool_Exp>;
};


/** query root */
export type Query_RootDelivery_Order_Items_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDelivery_RoutesArgs = {
  distinct_on?: Maybe<Array<Delivery_Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Routes_Order_By>>;
  where?: Maybe<Delivery_Routes_Bool_Exp>;
};


/** query root */
export type Query_RootDelivery_Routes_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Routes_Order_By>>;
  where?: Maybe<Delivery_Routes_Bool_Exp>;
};


/** query root */
export type Query_RootDelivery_Routes_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "delivery.customer" */
  delivery_customer: Array<Delivery_Customer>;
  /** fetch aggregated fields from the table: "delivery.customer" */
  delivery_customer_aggregate: Delivery_Customer_Aggregate;
  /** fetch data from the table: "delivery.customer" using primary key columns */
  delivery_customer_by_pk?: Maybe<Delivery_Customer>;
  /** fetch data from the table: "delivery.items" */
  delivery_items: Array<Delivery_Items>;
  /** fetch aggregated fields from the table: "delivery.items" */
  delivery_items_aggregate: Delivery_Items_Aggregate;
  /** fetch data from the table: "delivery.items" using primary key columns */
  delivery_items_by_pk?: Maybe<Delivery_Items>;
  /** fetch data from the table: "delivery.order" */
  delivery_order: Array<Delivery_Order>;
  /** fetch aggregated fields from the table: "delivery.order" */
  delivery_order_aggregate: Delivery_Order_Aggregate;
  /** fetch data from the table: "delivery.order" using primary key columns */
  delivery_order_by_pk?: Maybe<Delivery_Order>;
  /** fetch data from the table: "delivery.order_items" */
  delivery_order_items: Array<Delivery_Order_Items>;
  /** fetch aggregated fields from the table: "delivery.order_items" */
  delivery_order_items_aggregate: Delivery_Order_Items_Aggregate;
  /** fetch data from the table: "delivery.order_items" using primary key columns */
  delivery_order_items_by_pk?: Maybe<Delivery_Order_Items>;
  /** fetch data from the table: "delivery.routes" */
  delivery_routes: Array<Delivery_Routes>;
  /** fetch aggregated fields from the table: "delivery.routes" */
  delivery_routes_aggregate: Delivery_Routes_Aggregate;
  /** fetch data from the table: "delivery.routes" using primary key columns */
  delivery_routes_by_pk?: Maybe<Delivery_Routes>;
};


/** subscription root */
export type Subscription_RootDelivery_CustomerArgs = {
  distinct_on?: Maybe<Array<Delivery_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Customer_Order_By>>;
  where?: Maybe<Delivery_Customer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDelivery_Customer_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Customer_Order_By>>;
  where?: Maybe<Delivery_Customer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDelivery_Customer_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDelivery_ItemsArgs = {
  distinct_on?: Maybe<Array<Delivery_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Items_Order_By>>;
  where?: Maybe<Delivery_Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDelivery_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Items_Order_By>>;
  where?: Maybe<Delivery_Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDelivery_Items_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDelivery_OrderArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Order_By>>;
  where?: Maybe<Delivery_Order_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDelivery_Order_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Order_By>>;
  where?: Maybe<Delivery_Order_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDelivery_Order_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDelivery_Order_ItemsArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Items_Order_By>>;
  where?: Maybe<Delivery_Order_Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDelivery_Order_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Order_Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Order_Items_Order_By>>;
  where?: Maybe<Delivery_Order_Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDelivery_Order_Items_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDelivery_RoutesArgs = {
  distinct_on?: Maybe<Array<Delivery_Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Routes_Order_By>>;
  where?: Maybe<Delivery_Routes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDelivery_Routes_AggregateArgs = {
  distinct_on?: Maybe<Array<Delivery_Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delivery_Routes_Order_By>>;
  where?: Maybe<Delivery_Routes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDelivery_Routes_By_PkArgs = {
  id: Scalars['Int'];
};

export type CreateCustomerMutationVariables = Exact<{
  customer_info?: Delivery_Customer_Insert_Input;
}>;


export type CreateCustomerMutation = (
  { __typename?: 'mutation_root' }
  & { insert_delivery_customer_one?: Maybe<(
    { __typename?: 'delivery_customer' }
    & Pick<Delivery_Customer, 'NIT' | 'address' | 'full_name' | 'id' | 'phone'>
  )> }
);

export type CreateItemMutationVariables = Exact<{
  store_price?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  delivery_price?: Maybe<Scalars['numeric']>;
}>;


export type CreateItemMutation = (
  { __typename?: 'mutation_root' }
  & { insert_delivery_items_one?: Maybe<(
    { __typename?: 'delivery_items' }
    & Pick<Delivery_Items, 'delivery_price' | 'id' | 'name' | 'quantity' | 'store_price'>
  )> }
);

export type CreateOrderMutationVariables = Exact<{
  clarification?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['Int']>;
  order_date?: Maybe<Scalars['date']>;
  order_time_of_day?: Maybe<Scalars['String']>;
  payment_type?: Maybe<Scalars['String']>;
  person_in_charge?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
  route_id?: Maybe<Scalars['Int']>;
}>;


export type CreateOrderMutation = (
  { __typename?: 'mutation_root' }
  & { insert_delivery_order_one?: Maybe<(
    { __typename?: 'delivery_order' }
    & Pick<Delivery_Order, 'clarification' | 'customer_id' | 'id' | 'order_date' | 'order_time_of_day' | 'payment_type' | 'person_in_charge' | 'total'>
  )> }
);

export type CreateOrderItemsMutationVariables = Exact<{
  objects: Array<Delivery_Order_Items_Insert_Input> | Delivery_Order_Items_Insert_Input;
}>;


export type CreateOrderItemsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_delivery_order_items?: Maybe<(
    { __typename?: 'delivery_order_items_mutation_response' }
    & { returning: Array<(
      { __typename?: 'delivery_order_items' }
      & Pick<Delivery_Order_Items, 'id' | 'item_id' | 'order_id' | 'price' | 'quantity'>
    )> }
  )> }
);

export type CreateRouteMutationVariables = Exact<{
  object: Delivery_Routes_Insert_Input;
}>;


export type CreateRouteMutation = (
  { __typename?: 'mutation_root' }
  & { insert_delivery_routes_one?: Maybe<(
    { __typename?: 'delivery_routes' }
    & Pick<Delivery_Routes, 'driver_ci' | 'driver_last' | 'driver_name' | 'driver_plate' | 'id' | 'name'>
  )> }
);

export type DeleteItemMutationVariables = Exact<{
  _eq?: Maybe<Scalars['Int']>;
}>;


export type DeleteItemMutation = (
  { __typename?: 'mutation_root' }
  & { delete_delivery_items?: Maybe<(
    { __typename?: 'delivery_items_mutation_response' }
    & Pick<Delivery_Items_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'delivery_items' }
      & Pick<Delivery_Items, 'id'>
    )> }
  )> }
);

export type IncrementItemMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
}>;


export type IncrementItemMutation = (
  { __typename?: 'mutation_root' }
  & { update_delivery_items?: Maybe<(
    { __typename?: 'delivery_items_mutation_response' }
    & { returning: Array<(
      { __typename?: 'delivery_items' }
      & Pick<Delivery_Items, 'id' | 'quantity'>
    )> }
  )> }
);

export type UpdateCustomerMutationVariables = Exact<{
  id: Scalars['Int'];
  NIT?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
}>;


export type UpdateCustomerMutation = (
  { __typename?: 'mutation_root' }
  & { update_delivery_customer_by_pk?: Maybe<(
    { __typename?: 'delivery_customer' }
    & Pick<Delivery_Customer, 'NIT' | 'full_name' | 'address' | 'phone'>
  )> }
);

export type UpdateItemMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  store_price?: Maybe<Scalars['numeric']>;
  delivery_price?: Maybe<Scalars['numeric']>;
}>;


export type UpdateItemMutation = (
  { __typename?: 'mutation_root' }
  & { update_delivery_items?: Maybe<(
    { __typename?: 'delivery_items_mutation_response' }
    & { returning: Array<(
      { __typename?: 'delivery_items' }
      & Pick<Delivery_Items, 'id' | 'delivery_price' | 'name' | 'quantity' | 'store_price'>
    )> }
  )> }
);

export type UpdateOrderMutationVariables = Exact<{
  route_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  order_time_of_day?: Maybe<Scalars['String']>;
  programmed_date?: Maybe<Scalars['date']>;
  id: Scalars['Int'];
}>;


export type UpdateOrderMutation = (
  { __typename?: 'mutation_root' }
  & { update_delivery_order_by_pk?: Maybe<(
    { __typename?: 'delivery_order' }
    & Pick<Delivery_Order, 'id' | 'order_time_of_day' | 'route_id' | 'status' | 'programmed_date'>
  )> }
);

export type CustomerQueryVariables = Exact<{
  phone?: Maybe<Scalars['String']>;
}>;


export type CustomerQuery = (
  { __typename?: 'query_root' }
  & { delivery_customer: Array<(
    { __typename?: 'delivery_customer' }
    & Pick<Delivery_Customer, 'NIT' | 'address' | 'full_name' | 'id' | 'phone'>
  )> }
);

export type ItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemsQuery = (
  { __typename?: 'query_root' }
  & { delivery_items: Array<(
    { __typename?: 'delivery_items' }
    & Pick<Delivery_Items, 'id' | 'name' | 'quantity' | 'store_price' | 'delivery_price'>
  )> }
);

export type OrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type OrdersQuery = (
  { __typename?: 'query_root' }
  & { delivery_order: Array<(
    { __typename?: 'delivery_order' }
    & Pick<Delivery_Order, 'clarification' | 'id' | 'status' | 'order_date' | 'order_time_of_day' | 'payment_type' | 'person_in_charge' | 'total'>
    & { items: Array<(
      { __typename?: 'delivery_order_items' }
      & Pick<Delivery_Order_Items, 'id' | 'price' | 'quantity'>
      & { item: (
        { __typename?: 'delivery_items' }
        & Pick<Delivery_Items, 'name'>
      ) }
    )>, customer: (
      { __typename?: 'delivery_customer' }
      & Pick<Delivery_Customer, 'full_name' | 'id' | 'phone'>
    ) }
  )> }
);

export type RoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type RoutesQuery = (
  { __typename?: 'query_root' }
  & { delivery_routes: Array<(
    { __typename?: 'delivery_routes' }
    & Pick<Delivery_Routes, 'id' | 'name' | 'driver_name' | 'driver_last' | 'driver_ci' | 'driver_plate'>
  )> }
);


export const CreateCustomerDocument = gql`
    mutation CreateCustomer($customer_info: delivery_customer_insert_input! = {NIT: "", address: "", full_name: "", phone: ""}) {
  insert_delivery_customer_one(object: $customer_info) {
    NIT
    address
    full_name
    id
    phone
  }
}
    `;

export function useCreateCustomerMutation() {
  return Urql.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument);
};
export const CreateItemDocument = gql`
    mutation CreateItem($store_price: numeric = 10, $name: String = "", $quantity: Int = 10, $delivery_price: numeric = 10) {
  insert_delivery_items_one(
    object: {delivery_price: $delivery_price, name: $name, quantity: $quantity, store_price: $store_price}
  ) {
    delivery_price
    id
    name
    quantity
    store_price
  }
}
    `;

export function useCreateItemMutation() {
  return Urql.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument);
};
export const CreateOrderDocument = gql`
    mutation CreateOrder($clarification: String, $customer_id: Int, $order_date: date, $order_time_of_day: String, $payment_type: String, $person_in_charge: String, $total: numeric, $route_id: Int) {
  insert_delivery_order_one(
    object: {clarification: $clarification, customer_id: $customer_id, order_date: $order_date, order_time_of_day: $order_time_of_day, payment_type: $payment_type, person_in_charge: $person_in_charge, total: $total, route_id: $route_id}
  ) {
    clarification
    customer_id
    id
    order_date
    order_time_of_day
    payment_type
    person_in_charge
    total
  }
}
    `;

export function useCreateOrderMutation() {
  return Urql.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument);
};
export const CreateOrderItemsDocument = gql`
    mutation CreateOrderItems($objects: [delivery_order_items_insert_input!]!) {
  insert_delivery_order_items(objects: $objects) {
    returning {
      id
      item_id
      order_id
      price
      quantity
    }
  }
}
    `;

export function useCreateOrderItemsMutation() {
  return Urql.useMutation<CreateOrderItemsMutation, CreateOrderItemsMutationVariables>(CreateOrderItemsDocument);
};
export const CreateRouteDocument = gql`
    mutation CreateRoute($object: delivery_routes_insert_input!) {
  insert_delivery_routes_one(object: $object) {
    driver_ci
    driver_last
    driver_name
    driver_plate
    id
    name
  }
}
    `;

export function useCreateRouteMutation() {
  return Urql.useMutation<CreateRouteMutation, CreateRouteMutationVariables>(CreateRouteDocument);
};
export const DeleteItemDocument = gql`
    mutation DeleteItem($_eq: Int) {
  delete_delivery_items(where: {id: {_eq: $_eq}}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;

export function useDeleteItemMutation() {
  return Urql.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument);
};
export const IncrementItemDocument = gql`
    mutation IncrementItem($id: Int, $quantity: Int) {
  update_delivery_items(where: {id: {_eq: $id}}, _inc: {quantity: $quantity}) {
    returning {
      id
      quantity
    }
  }
}
    `;

export function useIncrementItemMutation() {
  return Urql.useMutation<IncrementItemMutation, IncrementItemMutationVariables>(IncrementItemDocument);
};
export const UpdateCustomerDocument = gql`
    mutation UpdateCustomer($id: Int!, $NIT: String, $address: String, $full_name: String, $phone: String) {
  update_delivery_customer_by_pk(
    pk_columns: {id: $id}
    _set: {NIT: $NIT, address: $address, full_name: $full_name, phone: $phone}
  ) {
    NIT
    full_name
    address
    phone
  }
}
    `;

export function useUpdateCustomerMutation() {
  return Urql.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument);
};
export const UpdateItemDocument = gql`
    mutation UpdateItem($id: Int, $name: String, $quantity: Int, $store_price: numeric, $delivery_price: numeric) {
  update_delivery_items(
    _set: {name: $name, quantity: $quantity, delivery_price: $delivery_price, store_price: $store_price}
    where: {id: {_eq: $id}}
  ) {
    returning {
      id
      delivery_price
      name
      quantity
      store_price
    }
  }
}
    `;

export function useUpdateItemMutation() {
  return Urql.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument);
};
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($route_id: Int = 10, $status: String = "", $order_time_of_day: String = "", $programmed_date: date, $id: Int!) {
  update_delivery_order_by_pk(
    pk_columns: {id: $id}
    _set: {status: $status, route_id: $route_id, order_time_of_day: $order_time_of_day, programmed_date: $programmed_date}
  ) {
    id
    order_time_of_day
    route_id
    status
    programmed_date
  }
}
    `;

export function useUpdateOrderMutation() {
  return Urql.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument);
};
export const CustomerDocument = gql`
    query Customer($phone: String = "") {
  delivery_customer(limit: 1, where: {phone: {_eq: $phone}}) {
    NIT
    address
    full_name
    id
    phone
  }
}
    `;

export function useCustomerQuery(options: Omit<Urql.UseQueryArgs<CustomerQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CustomerQuery>({ query: CustomerDocument, ...options });
};
export const ItemsDocument = gql`
    query Items {
  delivery_items {
    id
    name
    quantity
    store_price
    delivery_price
  }
}
    `;

export function useItemsQuery(options: Omit<Urql.UseQueryArgs<ItemsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ItemsQuery>({ query: ItemsDocument, ...options });
};
export const OrdersDocument = gql`
    query Orders {
  delivery_order {
    clarification
    id
    status
    order_date
    order_time_of_day
    payment_type
    person_in_charge
    total
    items {
      id
      price
      quantity
      item {
        name
      }
    }
    customer {
      full_name
      id
      phone
    }
  }
}
    `;

export function useOrdersQuery(options: Omit<Urql.UseQueryArgs<OrdersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OrdersQuery>({ query: OrdersDocument, ...options });
};
export const RoutesDocument = gql`
    query Routes {
  delivery_routes {
    id
    name
    driver_name
    driver_last
    driver_ci
    driver_plate
  }
}
    `;

export function useRoutesQuery(options: Omit<Urql.UseQueryArgs<RoutesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<RoutesQuery>({ query: RoutesDocument, ...options });
};