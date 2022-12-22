import { CITY_COUNTY_CODE, PARKING_DIVISION, PARKING_TYPE } from './constant'

export interface Parking {
  /**
   * @field 추가 단위 시간 (분 단위)
   */
  ADD_UNIT_TM: string
  /**
   * @field 추가 단위 요금
   */
  ADD_UNIT_TM2_WITHIN_USE_CHRG: string
  /**
   * @field 요금 정보
   */
  CHRG_INFO: ChargeInfo
  /**
   * @field 전화 번호
   */
  CONTCT_NO: string
  /**
   * @field 데이터 등록 기관 코드 (시군구 코드)
   */
  DATA_REGIST_INST_CD: CityCountyCode
  /**
   * @field 데이터 등록 기관 명 (시군구)
   */
  DATA_REGIST_INST_NM: CityCounty
  /**
   * @field 1일 주차권 요금 적용 시간
   */
  DAY1_PARKTK_CHRG_APPLCTN_TM: string
  /**
   * @field 1일 주차권 요금
   */
  DAY1_PARKTK_USE_CHRG: string
  /**
   * @field 공휴일 운영 시작 시각
   */
  HOLIDAY_OPERT_BEGIN_TM: string
  /**
   * @field 공휴일 운영 종료 시각
   */
  HOLIDAY_OPERT_END_TM: string
  /**
   * @field 관리 기관명
   */
  MANAGE_INST_NM: string
  /**
   * @field 월 정기권 요금
   */
  MT_CMMTICKT_WEEK_USE_CHRG: string
  /**
   * @field 주차 기본 시간
   */
  PARKNG_BASIS_TM: string
  /**
   * @field 주차 기본 요금
   */
  PARKNG_BASIS_USE_CHRG: string
  /**
   * @field 주차 구획 수
   */
  PARKNG_COMPRT_PLANE_CNT: number
  /**
   * @field 주차장 구분
   */
  PARKPLC_DIV_NM: ParkingDivision
  /**
   * @field 주차장 관리 번호
   */
  PARKPLC_MANAGE_NO: string
  /**
   * @field 주차장 유형
   */
  PARKPLC_TYPE: ParkingSpaceType
  /**
   * @field 소재지 지번 주소
   */
  REFINE_LOTNO_ADDR: string
  /**
   * @field 소재지 도로명 주소
   */
  REFINE_ROADNM_ADDR: string
  /**
   * @field 위도
   */
  REFINE_WGS84_LAT: string
  /**
   * @field 경도
   */
  REFINE_WGS84_LOGT: string
  /**
   * @field 소재지 우편 번호
   */
  REFINE_ZIP_CD: string
  /**
   * @field 토요일 운영 시작 시각
   */
  SAT_OPERT_BEGIN_TM: string
  /**
   * @field 토요일 운영 종료 시각
   */
  SAT_OPERT_END_TM: string
  /**
   * @field 결제 방법
   */
  SETTLE_METH: string
  /**
   * @field 시군 코드
   */
  SIGUN_CD: CityCountyCode
  /**
   * @field 시군명
   */
  SIGUN_NM: CityCounty
  /**
   * @field 특기사항
   */
  SPCLABLT_MATR: string
  /**
   * @field 주차장명
   */
  TMP01: string
  /**
   * @field 운영요일
   */
  TMP02: string
  /**
   * @field 평일 운영 시작 시각
   */
  WKDAY_OPERT_BEGIN_TM: string
  /**
   * @field 평일 운영 종료 시각
   */
  WKDAY_OPERT_END_TM: string
}

type ChargeInfo = '유료' | '무료'

export type CityCounty = keyof typeof CITY_COUNTY_CODE

export type CityCountyCode = typeof CITY_COUNTY_CODE[CityCounty]

export type ParkingDivision = typeof PARKING_DIVISION[number]

type ParkingSpaceType = typeof PARKING_TYPE[number]
