// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosResponseWithHTTP2,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace addressvalidation_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Address Validation API
   *
   * The Address Validation API allows developers to verify the accuracy of addresses. Given an address, it returns information about the correctness of the components of the parsed address, a geocode, and a verdict on the deliverability of the parsed address.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const addressvalidation = google.addressvalidation('v1');
   * ```
   */
  export class Addressvalidation {
    context: APIRequestContext;
    v1: Resource$V1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.v1 = new Resource$V1(this.context);
    }
  }

  /**
   * A latitude-longitude viewport, represented as two diagonally opposite `low` and `high` points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include: - If `low` = `high`, the viewport consists of that single point. - If `low.longitude` \> `high.longitude`, the longitude range is inverted (the viewport crosses the 180 degree longitude line). - If `low.longitude` = -180 degrees and `high.longitude` = 180 degrees, the viewport includes all longitudes. - If `low.longitude` = 180 degrees and `high.longitude` = -180 degrees, the longitude range is empty. - If `low.latitude` \> `high.latitude`, the latitude range is empty. Both `low` and `high` must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error. For example, this viewport fully encloses New York City: { "low": { "latitude": 40.477398, "longitude": -74.259087 \}, "high": { "latitude": 40.91618, "longitude": -73.70018 \} \}
   */
  export interface Schema$GoogleGeoTypeViewport {
    /**
     * Required. The high point of the viewport.
     */
    high?: Schema$GoogleTypeLatLng;
    /**
     * Required. The low point of the viewport.
     */
    low?: Schema$GoogleTypeLatLng;
  }
  /**
   * Details of the post-processed address. Post-processing includes correcting misspelled parts of the address, replacing incorrect parts, and inferring missing parts.
   */
  export interface Schema$GoogleMapsAddressvalidationV1Address {
    /**
     * Unordered list. The individual address components of the formatted and corrected address, along with validation information. This provides information on the validation status of the individual components. Address components are not ordered in a particular way. Do not make any assumptions on the ordering of the address components in the list.
     */
    addressComponents?: Schema$GoogleMapsAddressvalidationV1AddressComponent[];
    /**
     * The post-processed address, formatted as a single-line address following the address formatting rules of the region where the address is located. Note: the format of this address may not match the format of the address in the `postal_address` field. For example, the `postal_address` always represents the country as a 2 letter `region_code`, such as "US" or "NZ". By contrast, this field uses a longer form of the country name, such as "USA" or "New Zealand".
     */
    formattedAddress?: string | null;
    /**
     * The types of components that were expected to be present in a correctly formatted mailing address but were not found in the input AND could not be inferred. An example might be `['street_number', 'route']` for an input like "Boulder, Colorado, 80301, USA". The list of possible types can be found [here](https://developers.google.com/maps/documentation/geocoding/requests-geocoding#Types). **Note: you might see a missing component type when you think you've already supplied the missing component.** For example, this can happen when the input address contains the building name, but not the premise number. In the address "渋谷区渋谷３丁目　Shibuya Stream", the building name "Shibuya Stream" has the component type `premise`, but the premise number is missing, so `missing_component_types` will contain `premise`.
     */
    missingComponentTypes?: string[] | null;
    /**
     * The post-processed address represented as a postal address.
     */
    postalAddress?: Schema$GoogleTypePostalAddress;
    /**
     * The types of the components that are present in the `address_components` but could not be confirmed to be correct. This field is provided for the sake of convenience: its contents are equivalent to iterating through the `address_components` to find the types of all the components where the confirmation_level is not CONFIRMED or the inferred flag is not set to `true`. The list of possible types can be found [here](https://developers.google.com/maps/documentation/geocoding/requests-geocoding#Types).
     */
    unconfirmedComponentTypes?: string[] | null;
    /**
     * Any tokens in the input that could not be resolved. This might be an input that was not recognized as a valid part of an address. For example, for an input such as "Parcel 0000123123 & 0000456456 Str # Guthrie Center IA 50115 US", the unresolved tokens might look like `["Parcel", "0000123123", "&", "0000456456"]`.
     */
    unresolvedTokens?: string[] | null;
  }
  /**
   * Represents an address component, such as a street, city, or state.
   */
  export interface Schema$GoogleMapsAddressvalidationV1AddressComponent {
    /**
     * The name for this component.
     */
    componentName?: Schema$GoogleMapsAddressvalidationV1ComponentName;
    /**
     * The type of the address component. See [Table 2: Additional types returned by the Places service](https://developers.google.com/places/web-service/supported_types#table2) for a list of possible types.
     */
    componentType?: string | null;
    /**
     * Indicates the level of certainty that we have that the component is correct.
     */
    confirmationLevel?: string | null;
    /**
     * Indicates that the component was not part of the input, but we inferred it for the address location and believe it should be provided for a complete address.
     */
    inferred?: boolean | null;
    /**
     * Indicates the name of the component was replaced with a completely different one, for example a wrong postal code being replaced with one that is correct for the address. This is not a cosmetic change, the input component has been changed to a different one.
     */
    replaced?: boolean | null;
    /**
     * Indicates a correction to a misspelling in the component name. The API does not always flag changes from one spelling variant to another, such as when changing "centre" to "center". It also does not always flag common misspellings, such as when changing "Amphitheater Pkwy" to "Amphitheatre Pkwy".
     */
    spellCorrected?: boolean | null;
    /**
     * Indicates an address component that is not expected to be present in a postal address for the given region. We have retained it only because it was part of the input.
     */
    unexpected?: boolean | null;
  }
  /**
   * The metadata for the post-processed address. `metadata` is not guaranteed to be fully populated for every address sent to the Address Validation API.
   */
  export interface Schema$GoogleMapsAddressvalidationV1AddressMetadata {
    /**
     * Indicates that this is the address of a business. If unset, indicates that the value is unknown.
     */
    business?: boolean | null;
    /**
     * Indicates that the address of a PO box. If unset, indicates that the value is unknown.
     */
    poBox?: boolean | null;
    /**
     * Indicates that this is the address of a residence. If unset, indicates that the value is unknown.
     */
    residential?: boolean | null;
  }
  /**
   * A wrapper for the name of the component.
   */
  export interface Schema$GoogleMapsAddressvalidationV1ComponentName {
    /**
     * The BCP-47 language code. This will not be present if the component name is not associated with a language, such as a street number.
     */
    languageCode?: string | null;
    /**
     * The name text. For example, "5th Avenue" for a street name or "1253" for a street number.
     */
    text?: string | null;
  }
  /**
   * Contains information about the place the input was geocoded to.
   */
  export interface Schema$GoogleMapsAddressvalidationV1Geocode {
    /**
     * The bounds of the geocoded place.
     */
    bounds?: Schema$GoogleGeoTypeViewport;
    /**
     * The size of the geocoded place, in meters. This is another measure of the coarseness of the geocoded location, but in physical size rather than in semantic meaning.
     */
    featureSizeMeters?: number | null;
    /**
     * The geocoded location of the input. Using place IDs is preferred over using addresses, latitude/longitude coordinates, or plus codes. Using coordinates when routing or calculating driving directions will always result in the point being snapped to the road nearest to those coordinates. This may not be a road that will quickly or safely lead to the destination and may not be near an access point to the property. Additionally, when a location is reverse geocoded, there is no guarantee that the returned address will match the original.
     */
    location?: Schema$GoogleTypeLatLng;
    /**
     * The PlaceID of the place this input geocodes to. For more information about Place IDs see [here](https://developers.google.com/maps/documentation/places/web-service/place-id).
     */
    placeId?: string | null;
    /**
     * The type(s) of place that the input geocoded to. For example, `['locality', 'political']`. The full list of types can be found [here](https://developers.google.com/maps/documentation/geocoding/requests-geocoding#Types).
     */
    placeTypes?: string[] | null;
    /**
     * The plus code corresponding to the `location`.
     */
    plusCode?: Schema$GoogleMapsAddressvalidationV1PlusCode;
  }
  /**
   * Preview: This feature is in Preview (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the [Google Maps Platform Service Specific Terms](https://cloud.google.com/maps-platform/terms/maps-service-terms). For more information, see the [launch stage descriptions](https://developers.google.com/maps/launch-stages). Enables the Address Validation API to include additional information in the response.
   */
  export interface Schema$GoogleMapsAddressvalidationV1LanguageOptions {
    /**
     * Preview: Return a [google.maps.addressvalidation.v1.Address] in English. See [google.maps.addressvalidation.v1.ValidationResult.english_latin_address] for details.
     */
    returnEnglishLatinAddress?: boolean | null;
  }
  /**
   * Plus code (http://plus.codes) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location.
   */
  export interface Schema$GoogleMapsAddressvalidationV1PlusCode {
    /**
     * Place's compound code, such as "33GV+HQ, Ramberg, Norway", containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity.
     */
    compoundCode?: string | null;
    /**
     * Place's global (full) code, such as "9FWM33GV+HQ", representing an 1/8000 by 1/8000 degree area (~14 by 14 meters).
     */
    globalCode?: string | null;
  }
  /**
   * The request for sending validation feedback.
   */
  export interface Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackRequest {
    /**
     * Required. The outcome of the sequence of validation attempts. If this field is set to `VALIDATION_CONCLUSION_UNSPECIFIED`, an `INVALID_ARGUMENT` error will be returned.
     */
    conclusion?: string | null;
    /**
     * Required. The ID of the response that this feedback is for. This should be the response_id from the first response in a series of address validation attempts.
     */
    responseId?: string | null;
  }
  /**
   * The response for validation feedback. The response is empty if the feedback is sent successfully.
   */
  export interface Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse {}
  /**
   * USPS representation of a US address.
   */
  export interface Schema$GoogleMapsAddressvalidationV1UspsAddress {
    /**
     * City name.
     */
    city?: string | null;
    /**
     * City + state + postal code.
     */
    cityStateZipAddressLine?: string | null;
    /**
     * Firm name.
     */
    firm?: string | null;
    /**
     * First address line.
     */
    firstAddressLine?: string | null;
    /**
     * Second address line.
     */
    secondAddressLine?: string | null;
    /**
     * 2 letter state code.
     */
    state?: string | null;
    /**
     * Puerto Rican urbanization name.
     */
    urbanization?: string | null;
    /**
     * Postal code e.g. 10009.
     */
    zipCode?: string | null;
    /**
     * 4-digit postal code extension e.g. 5023.
     */
    zipCodeExtension?: string | null;
  }
  /**
   * The USPS data for the address. `uspsData` is not guaranteed to be fully populated for every US or PR address sent to the Address Validation API. It's recommended to integrate the backup address fields in the response if you utilize uspsData as the primary part of the response.
   */
  export interface Schema$GoogleMapsAddressvalidationV1UspsData {
    /**
     * Abbreviated city.
     */
    abbreviatedCity?: string | null;
    /**
     * Type of the address record that matches the input address. * `F`: FIRM. This is a match to a Firm Record, which is the finest level of match available for an address. * `G`: GENERAL DELIVERY. This is a match to a General Delivery record. * `H`: BUILDING / APARTMENT. This is a match to a Building or Apartment record. * `P`: POST OFFICE BOX. This is a match to a Post Office Box. * `R`: RURAL ROUTE or HIGHWAY CONTRACT: This is a match to either a Rural Route or a Highway Contract record, both of which may have associated Box Number ranges. * `S`: STREET RECORD: This is a match to a Street record containing a valid primary number range.
     */
    addressRecordType?: string | null;
    /**
     * The carrier route code. A four character code consisting of a one letter prefix and a three digit route designator. Prefixes: * `C`: Carrier route (or city route) * `R`: Rural route * `H`: Highway Contract Route * `B`: Post Office Box Section * `G`: General delivery unit
     */
    carrierRoute?: string | null;
    /**
     * Carrier route rate sort indicator.
     */
    carrierRouteIndicator?: string | null;
    /**
     * Indicator that the request has been CASS processed.
     */
    cassProcessed?: boolean | null;
    /**
     * County name.
     */
    county?: string | null;
    /**
     * Indicator that a default address was found, but more specific addresses exists.
     */
    defaultAddress?: boolean | null;
    /**
     * The delivery point check digit. This number is added to the end of the delivery_point_barcode for mechanically scanned mail. Adding all the digits of the delivery_point_barcode, delivery_point_check_digit, postal code, and ZIP+4 together should yield a number divisible by 10.
     */
    deliveryPointCheckDigit?: string | null;
    /**
     * 2 digit delivery point code
     */
    deliveryPointCode?: string | null;
    /**
     * Indicates if the address is a CMRA (Commercial Mail Receiving Agency)--a private business receiving mail for clients. Returns a single character. * `Y`: The address is a CMRA * `N`: The address is not a CMRA
     */
    dpvCmra?: string | null;
    /**
     * The possible values for DPV confirmation. Returns a single character or returns no value. * `N`: Primary and any secondary number information failed to DPV confirm. * `D`: Address was DPV confirmed for the primary number only, and the secondary number information was missing. * `S`: Address was DPV confirmed for the primary number only, and the secondary number information was present but not confirmed. * `Y`: Address was DPV confirmed for primary and any secondary numbers. * Empty: If the response does not contain a `dpv_confirmation` value, the address was not submitted for DPV confirmation.
     */
    dpvConfirmation?: string | null;
    /**
     * Flag indicates addresses where USPS cannot knock on a door to deliver mail. Returns a single character. * `Y`: The door is not accessible. * `N`: No indication the door is not accessible.
     */
    dpvDoorNotAccessible?: string | null;
    /**
     * Flag indicates mail is delivered to a single receptable at a site. Returns a single character. * `Y`: The mail is delivered to a single receptable at a site. * `N`: The mail is not delivered to a single receptable at a site.
     */
    dpvDrop?: string | null;
    /**
     * Indicates that more than one DPV return code is valid for the address. Returns a single character. * `Y`: Address was DPV confirmed for primary and any secondary numbers. * `N`: Primary and any secondary number information failed to DPV confirm. * `S`: Address was DPV confirmed for the primary number only, and the secondary number information was present but not confirmed, or a single trailing alpha on a primary number was dropped to make a DPV match and secondary information required. * `D`: Address was DPV confirmed for the primary number only, and the secondary number information was missing. * `R`: Address confirmed but assigned to phantom route R777 and R779 and USPS delivery is not provided.
     */
    dpvEnhancedDeliveryCode?: string | null;
    /**
     * The footnotes from delivery point validation. Multiple footnotes may be strung together in the same string. * `AA`: Input address matched to the ZIP+4 file * `A1`: Input address was not matched to the ZIP+4 file * `BB`: Matched to DPV (all components) * `CC`: Secondary number not matched and not required * `C1`: Secondary number not matched but required * `N1`: High-rise address missing secondary number * `M1`: Primary number missing * `M3`: Primary number invalid * `P1`: Input address PO, RR or HC box number missing * `P3`: Input address PO, RR, or HC Box number invalid * `F1`: Input address matched to a military address * `G1`: Input address matched to a general delivery address * `U1`: Input address matched to a unique ZIP code * `PB`: Input address matched to PBSA record * `RR`: DPV confirmed address with PMB information * `R1`: DPV confirmed address without PMB information * `R7`: Carrier Route R777 or R779 record * `IA`: Informed Address identified * `TA`: Primary number matched by dropping a trailing alpha
     */
    dpvFootnote?: string | null;
    /**
     * Flag indicates mail delivery is not performed every day of the week. Returns a single character. * `Y`: The mail delivery is not performed every day of the week. * `N`: No indication the mail delivery is not performed every day of the week.
     */
    dpvNonDeliveryDays?: string | null;
    /**
     * Integer identifying non-delivery days. It can be interrogated using bit flags: 0x40 – Sunday is a non-delivery day 0x20 – Monday is a non-delivery day 0x10 – Tuesday is a non-delivery day 0x08 – Wednesday is a non-delivery day 0x04 – Thursday is a non-delivery day 0x02 – Friday is a non-delivery day 0x01 – Saturday is a non-delivery day
     */
    dpvNonDeliveryDaysValues?: number | null;
    /**
     * Flag indicates door is accessible, but package will not be left due to security concerns. Returns a single character. * `Y`: The package will not be left due to security concerns. * `N`: No indication the package will not be left due to security concerns.
     */
    dpvNoSecureLocation?: string | null;
    /**
     * Is this a no stat address or an active address? No stat addresses are ones which are not continuously occupied or addresses that the USPS does not service. Returns a single character. * `Y`: The address is not active * `N`: The address is active
     */
    dpvNoStat?: string | null;
    /**
     * Indicates the NoStat type. Returns a reason code as int. * `1`: IDA (Internal Drop Address) – Addresses that do not receive mail directly from the USPS but are delivered to a drop address that services them. * `2`: CDS - Addresses that have not yet become deliverable. For example, a new subdivision where lots and primary numbers have been determined, but no structure exists yet for occupancy. * `3`: Collision - Addresses that do not actually DPV confirm. * `4`: CMZ (College, Military and Other Types) - ZIP + 4 records USPS has incorporated into the data. * `5`: Regular - Indicates addresses not receiving delivery and the addresses are not counted as possible deliveries. * `6`: Secondary Required - The address requires secondary information.
     */
    dpvNoStatReasonCode?: number | null;
    /**
     * Indicates the address was matched to PBSA record. Returns a single character. * `Y`: The address was matched to PBSA record. * `N`: The address was not matched to PBSA record.
     */
    dpvPbsa?: string | null;
    /**
     * Indicates that mail is not delivered to the street address. Returns a single character. * `Y`: The mail is not delivered to the street address. * `N`: The mail is delivered to the street address.
     */
    dpvThrowback?: string | null;
    /**
     * Is this place vacant? Returns a single character. * `Y`: The address is vacant * `N`: The address is not vacant
     */
    dpvVacant?: string | null;
    /**
     * eLOT Ascending/Descending Flag (A/D).
     */
    elotFlag?: string | null;
    /**
     * Enhanced Line of Travel (eLOT) number.
     */
    elotNumber?: string | null;
    /**
     * Error message for USPS data retrieval. This is populated when USPS processing is suspended because of the detection of artificially created addresses. The USPS data fields might not be populated when this error is present.
     */
    errorMessage?: string | null;
    /**
     * The delivery address is matchable, but the EWS file indicates that an exact match will be available soon.
     */
    ewsNoMatch?: boolean | null;
    /**
     * FIPS county code.
     */
    fipsCountyCode?: string | null;
    /**
     * LACSLink indicator.
     */
    lacsLinkIndicator?: string | null;
    /**
     * LACSLink return code.
     */
    lacsLinkReturnCode?: string | null;
    /**
     * PMB (Private Mail Box) unit designator.
     */
    pmbDesignator?: string | null;
    /**
     * PMB (Private Mail Box) number;
     */
    pmbNumber?: string | null;
    /**
     * PO Box only postal code.
     */
    poBoxOnlyPostalCode?: boolean | null;
    /**
     * Main post office city.
     */
    postOfficeCity?: string | null;
    /**
     * Main post office state.
     */
    postOfficeState?: string | null;
    /**
     * USPS standardized address.
     */
    standardizedAddress?: Schema$GoogleMapsAddressvalidationV1UspsAddress;
    /**
     * Footnotes from matching a street or highrise record to suite information. If business name match is found, the secondary number is returned. * `A`: SuiteLink record match, business address improved. * `00`: No match, business address is not improved.
     */
    suitelinkFootnote?: string | null;
  }
  /**
   * The request for validating an address.
   */
  export interface Schema$GoogleMapsAddressvalidationV1ValidateAddressRequest {
    /**
     * Required. The address being validated. Unformatted addresses should be submitted via `address_lines`. The total length of the fields in this input must not exceed 280 characters. Supported regions can be found [here](https://developers.google.com/maps/documentation/address-validation/coverage). The language_code value in the input address is reserved for future uses and is ignored today. The validated address result will be populated based on the preferred language for the given address, as identified by the system. The Address Validation API ignores the values in recipients and organization. Any values in those fields will be discarded and not returned. Please do not set them.
     */
    address?: Schema$GoogleTypePostalAddress;
    /**
     * Enables USPS CASS compatible mode. This affects _only_ the [google.maps.addressvalidation.v1.ValidationResult.usps_data] field of [google.maps.addressvalidation.v1.ValidationResult]. Note: for USPS CASS enabled requests for addresses in Puerto Rico, a [google.type.PostalAddress.region_code] of the `address` must be provided as "PR", or an [google.type.PostalAddress.administrative_area] of the `address` must be provided as "Puerto Rico" (case-insensitive) or "PR". It's recommended to use a componentized `address`, or alternatively specify at least two [google.type.PostalAddress.address_lines] where the first line contains the street number and name and the second line contains the city, state, and zip code.
     */
    enableUspsCass?: boolean | null;
    /**
     * Optional. Preview: This feature is in Preview (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the [Google Maps Platform Service Specific Terms](https://cloud.google.com/maps-platform/terms/maps-service-terms). For more information, see the [launch stage descriptions](https://developers.google.com/maps/launch-stages). Enables the Address Validation API to include additional information in the response.
     */
    languageOptions?: Schema$GoogleMapsAddressvalidationV1LanguageOptions;
    /**
     * This field must be empty for the first address validation request. If more requests are necessary to fully validate a single address (for example if the changes the user makes after the initial validation need to be re-validated), then each followup request must populate this field with the response_id from the very first response in the validation sequence.
     */
    previousResponseId?: string | null;
    /**
     * Optional. A string which identifies an Autocomplete session for billing purposes. Must be a URL and filename safe base64 string with at most 36 ASCII characters in length. Otherwise an INVALID_ARGUMENT error is returned. The session begins when the user makes an Autocomplete query, and concludes when they select a place and a call to Place Details or Address Validation is made. Each session can have multiple Autocomplete queries, followed by one Place Details or Address Validation request. The credentials used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `sessionToken` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately). Note: Address Validation can only be used in sessions with the Autocomplete (New) API, not the Autocomplete API. See https://developers.google.com/maps/documentation/places/web-service/session-pricing for more details.
     */
    sessionToken?: string | null;
  }
  /**
   * The response to an address validation request.
   */
  export interface Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse {
    /**
     * The UUID that identifies this response. If the address needs to be re-validated, this UUID *must* accompany the new request.
     */
    responseId?: string | null;
    /**
     * The result of the address validation.
     */
    result?: Schema$GoogleMapsAddressvalidationV1ValidationResult;
  }
  /**
   * The result of validating an address.
   */
  export interface Schema$GoogleMapsAddressvalidationV1ValidationResult {
    /**
     * Information about the address itself as opposed to the geocode.
     */
    address?: Schema$GoogleMapsAddressvalidationV1Address;
    /**
     * Preview: This feature is in Preview (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the [Google Maps Platform Service Specific Terms](https://cloud.google.com/maps-platform/terms/maps-service-terms). For more information, see the [launch stage descriptions](https://developers.google.com/maps/launch-stages). The address translated to English. Translated addresses are not reusable as API input. The service provides them so that the user can use their native language to confirm or deny the validation of the originally-provided address. If part of the address doesn't have an English translation, the service returns that part in an alternate language that uses a Latin script. See [here](https://developers.google.com/maps/documentation/address-validation/convert-addresses-english) for an explanation of how the alternate language is selected. If part of the address doesn't have any translations or transliterations in a language that uses a Latin script, the service returns that part in the local language associated with the address. Enable this output by using the [google.maps.addressvalidation.v1.LanguageOptions.return_english_latin_address] flag. Note: the [google.maps.addressvalidation.v1.Address.unconfirmed_component_types] field in the `english_latin_address` and the [google.maps.addressvalidation.v1.AddressComponent.confirmation_level] fields in `english_latin_address.address_components` are not populated.
     */
    englishLatinAddress?: Schema$GoogleMapsAddressvalidationV1Address;
    /**
     * Information about the location and place that the address geocoded to.
     */
    geocode?: Schema$GoogleMapsAddressvalidationV1Geocode;
    /**
     * Other information relevant to deliverability. `metadata` is not guaranteed to be fully populated for every address sent to the Address Validation API.
     */
    metadata?: Schema$GoogleMapsAddressvalidationV1AddressMetadata;
    /**
     * Extra deliverability flags provided by USPS. Only provided in region `US` and `PR`.
     */
    uspsData?: Schema$GoogleMapsAddressvalidationV1UspsData;
    /**
     * Overall verdict flags
     */
    verdict?: Schema$GoogleMapsAddressvalidationV1Verdict;
  }
  /**
   * High level overview of the address validation result and geocode.
   */
  export interface Schema$GoogleMapsAddressvalidationV1Verdict {
    /**
     * The post-processed address is considered complete if there are no unresolved tokens, no unexpected or missing address components. If unset, indicates that the value is `false`. See `missing_component_types`, `unresolved_tokens` or `unexpected` fields for more details.
     */
    addressComplete?: boolean | null;
    /**
     * Information about the granularity of the `geocode`. This can be understood as the semantic meaning of how coarse or fine the geocoded location is. This can differ from the `validation_granularity` above occasionally. For example, our database might record the existence of an apartment number but do not have a precise location for the apartment within a big apartment complex. In that case, the `validation_granularity` will be `SUB_PREMISE` but the `geocode_granularity` will be `PREMISE`.
     */
    geocodeGranularity?: string | null;
    /**
     * At least one address component was inferred (added) that wasn't in the input, see [google.maps.addressvalidation.v1.Address.address_components] for details.
     */
    hasInferredComponents?: boolean | null;
    /**
     * At least one address component was replaced, see [google.maps.addressvalidation.v1.Address.address_components] for details.
     */
    hasReplacedComponents?: boolean | null;
    /**
     * At least one address component was spell-corrected, see [google.maps.addressvalidation.v1.Address.address_components] for details.
     */
    hasSpellCorrectedComponents?: boolean | null;
    /**
     * At least one address component cannot be categorized or validated, see [google.maps.addressvalidation.v1.Address.address_components] for details.
     */
    hasUnconfirmedComponents?: boolean | null;
    /**
     * The granularity of the **input** address. This is the result of parsing the input address and does not give any validation signals. For validation signals, refer to `validation_granularity` below. For example, if the input address includes a specific apartment number, then the `input_granularity` here will be `SUB_PREMISE`. If the address validation service cannot match the apartment number in the databases or the apartment number is invalid, the `validation_granularity` will likely be `PREMISE` or more coarse.
     */
    inputGranularity?: string | null;
    /**
     * Preview: This feature is in Preview (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the [Google Maps Platform Service Specific Terms](https://cloud.google.com/maps-platform/terms/maps-service-terms). For more information, see the [launch stage descriptions](https://developers.google.com/maps/launch-stages). Offers an interpretive summary of the API response, intended to assist in determining a potential subsequent action to take. This field is derived from other fields in the API response and should not be considered as a guarantee of address accuracy or deliverability. See [Build your validation logic](https://developers.google.com/maps/documentation/address-validation/build-validation-logic) for more details.
     */
    possibleNextAction?: string | null;
    /**
     * The level of granularity for the post-processed address that the API can fully validate. For example, a `validation_granularity` of `PREMISE` indicates all address components at the level of `PREMISE` or more coarse can be validated. Per address component validation result can be found in [google.maps.addressvalidation.v1.Address.address_components].
     */
    validationGranularity?: string | null;
  }
  /**
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$GoogleTypeLatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478.
   */
  export interface Schema$GoogleTypePostalAddress {
    /**
     * Unstructured address lines describing the lower levels of an address. Because values in `address_lines` do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country or region of the address. In places where this can vary (for example, Japan), `address_language` is used to make it explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a `region_code` with all remaining information placed in the `address_lines`. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a `region_code` and `address_lines` and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: string[] | null;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated.
     */
    administrativeArea?: string | null;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | null;
    /**
     * Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave `locality` empty and use `address_lines`.
     */
    locality?: string | null;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | null;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States).
     */
    postalCode?: string | null;
    /**
     * Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
     */
    recipients?: string[] | null;
    /**
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | null;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.
     */
    revision?: number | null;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire).
     */
    sortingCode?: string | null;
    /**
     * Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district.
     */
    sublocality?: string | null;
  }

  export class Resource$V1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Feedback about the outcome of the sequence of validation attempts. This should be the last call made after a sequence of validation calls for the same address, and should be called once the transaction is concluded. This should only be sent once for the sequence of `ValidateAddress` requests needed to validate an address fully.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/addressvalidation.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const addressvalidation = google.addressvalidation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/maps-platform.addressvalidation',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await addressvalidation.provideValidationFeedback({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "conclusion": "my_conclusion",
     *       //   "responseId": "my_responseId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    provideValidationFeedback(
      params: Params$Resource$V1$Providevalidationfeedback,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    provideValidationFeedback(
      params?: Params$Resource$V1$Providevalidationfeedback,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>
    >;
    provideValidationFeedback(
      params: Params$Resource$V1$Providevalidationfeedback,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    provideValidationFeedback(
      params: Params$Resource$V1$Providevalidationfeedback,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>,
      callback: BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>
    ): void;
    provideValidationFeedback(
      params: Params$Resource$V1$Providevalidationfeedback,
      callback: BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>
    ): void;
    provideValidationFeedback(
      callback: BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>
    ): void;
    provideValidationFeedback(
      paramsOrCallback?:
        | Params$Resource$V1$Providevalidationfeedback
        | BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Providevalidationfeedback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Providevalidationfeedback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://addressvalidation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1:provideValidationFeedback').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackResponse>(
          parameters
        );
      }
    }

    /**
     * Validates an address.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/addressvalidation.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const addressvalidation = google.addressvalidation('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/maps-platform.addressvalidation',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await addressvalidation.validateAddress({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": {},
     *       //   "enableUspsCass": false,
     *       //   "languageOptions": {},
     *       //   "previousResponseId": "my_previousResponseId",
     *       //   "sessionToken": "my_sessionToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "responseId": "my_responseId",
     *   //   "result": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    validateAddress(
      params: Params$Resource$V1$Validateaddress,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    validateAddress(
      params?: Params$Resource$V1$Validateaddress,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>
    >;
    validateAddress(
      params: Params$Resource$V1$Validateaddress,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    validateAddress(
      params: Params$Resource$V1$Validateaddress,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>,
      callback: BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>
    ): void;
    validateAddress(
      params: Params$Resource$V1$Validateaddress,
      callback: BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>
    ): void;
    validateAddress(
      callback: BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>
    ): void;
    validateAddress(
      paramsOrCallback?:
        | Params$Resource$V1$Validateaddress
        | BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1$Validateaddress;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1$Validateaddress;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://addressvalidation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1:validateAddress').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleMapsAddressvalidationV1ValidateAddressResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$V1$Providevalidationfeedback
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleMapsAddressvalidationV1ProvideValidationFeedbackRequest;
  }
  export interface Params$Resource$V1$Validateaddress
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleMapsAddressvalidationV1ValidateAddressRequest;
  }
}
