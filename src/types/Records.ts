export interface ConsumeRecord {
  ACCOUNT_PAY_NUM: string
  ADDFEE_AMOUNT: string
  BALANCE_TYPE: string
  CLEANED_HOT_WATER_ML: string
  COLD_WATER_ML: string
  COMP_AGENT_ID: string
  CONSUME_AMOUNT: string
  CONSUME_TIME: string
  CONSUME_TYPE: string
  COUPON_ID: string
  CUSTOMER_CODE_ID: string
  CUSTOMER_ID: string
  DEVICE_ID: string
  FETCH_TIME: string
  ID: string
  LOCK_TIME: string
  OMMIT_FLAG: string
  ORDER_NO: string
  PAY_FLAG: string
  PAY_TIME: string
  PLAIN_HOT_WATER_ML: string
  RED_PACKET_PAY_NUM: string
  SERVICE_POINT_ID: string
  SHARING_AMOUNT: string
  SHARING_FLAG: string
  SHARING_MERCHANT: string
  SHARING_OPE_TIME: string
  SHARING_ORDER_NO: string
  STATE: string
  consumeCouponModel?: any
  customerModel: CustomerModel
  servicePointModel: ServicePointModel
  subComagentModel: SubComagentModel
  waterDeviceModel: WaterDeviceModel
}

interface WaterDeviceModel {
  CODE: string
  DEVICE_MODE_ID: string
  FEE_CALC_TYPE: string
  ID: string
  INSTALL_POS: string
  NAME: string
  SUB_COMAGENT_ID: string
}

interface SubComagentModel {
  COMP_AGENT_NAME: string
  COMP_FLAG: string
  ID: string
}

interface ServicePointModel {
  AREA_ID: string
  AREA_NAME: string
  CITY_ID: string
  CITY_NAME: string
  ID: string
  POINT_NAME: string
  PROV_ID: string
  PROV_NAME: string
  SUB_COMAGENT_ID: string
}

interface CustomerModel {
  ID: string
  MOBILE: string
  NAME: string
}
