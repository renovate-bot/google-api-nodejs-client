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

export namespace travelimpactmodel_v1 {
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
   * Travel Impact Model API
   *
   * Travel Impact Model API lets you query travel carbon emission estimates.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const travelimpactmodel = google.travelimpactmodel('v1');
   * ```
   */
  export class Travelimpactmodel {
    context: APIRequestContext;
    flights: Resource$Flights;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.flights = new Resource$Flights(this.context);
    }
  }

  /**
   * Input definition for the ComputeFlightEmissions request.
   */
  export interface Schema$ComputeFlightEmissionsRequest {
    /**
     * Required. Direct flights to return emission estimates for.
     */
    flights?: Schema$Flight[];
  }
  /**
   * Output definition for the ComputeFlightEmissions response.
   */
  export interface Schema$ComputeFlightEmissionsResponse {
    /**
     * List of flight legs with emission estimates.
     */
    flightEmissions?: Schema$FlightWithEmissions[];
    /**
     * The model version under which emission estimates for all flights in this response were computed.
     */
    modelVersion?: Schema$ModelVersion;
  }
  /**
   * A list of pair of airports (markets) to request the typical emissions for.
   */
  export interface Schema$ComputeTypicalFlightEmissionsRequest {
    /**
     * Required. Request the typical flight emissions estimates for this market pair. A maximum of 1000 markets can be requested.
     */
    markets?: Schema$Market[];
  }
  /**
   * The response includes the emissions but also the model version.
   */
  export interface Schema$ComputeTypicalFlightEmissionsResponse {
    /**
     * The model version under which typical flight emission estimates for all flights in this response were computed.
     */
    modelVersion?: Schema$ModelVersion;
    /**
     * Market's Typical Flight Emissions requested.
     */
    typicalFlightEmissions?: Schema$TypicalFlightEmissions[];
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Metadata about the EASA Flight Emissions Label.
   */
  export interface Schema$EasaLabelMetadata {
    /**
     * The date when the label expires. The label can be displayed until the end of this date.
     */
    labelExpiryDate?: Schema$Date;
    /**
     * The date when the label was issued.
     */
    labelIssueDate?: Schema$Date;
    /**
     * Version of the label.
     */
    labelVersion?: string | null;
    /**
     * Sustainable Aviation Fuel (SAF) emissions discount percentage applied to the label. It is a percentage as a decimal. The values are in the interval [0,1]. For example, 0.0021 means 0.21%. This discount and reduction in emissions are reported by the EASA label but they are not included in the CO2e estimates distributed by this API.
     */
    safDiscountPercentage?: number | null;
  }
  /**
   * Grouped emissions per seating class results.
   */
  export interface Schema$EmissionsGramsPerPax {
    /**
     * Emissions for one passenger in business class in grams. This field is always computed and populated, regardless of whether the aircraft has business class seats or not.
     */
    business?: number | null;
    /**
     * Emissions for one passenger in economy class in grams. This field is always computed and populated, regardless of whether the aircraft has economy class seats or not.
     */
    economy?: number | null;
    /**
     * Emissions for one passenger in first class in grams. This field is always computed and populated, regardless of whether the aircraft has first class seats or not.
     */
    first?: number | null;
    /**
     * Emissions for one passenger in premium economy class in grams. This field is always computed and populated, regardless of whether the aircraft has premium economy class seats or not.
     */
    premiumEconomy?: number | null;
  }
  /**
   * All details related to a single request item for a direct flight emission estimates.
   */
  export interface Schema$Flight {
    /**
     * Required. Date of the flight in the time zone of the origin airport. Must be a date in the present or future.
     */
    departureDate?: Schema$Date;
    /**
     * Required. IATA airport code for flight destination, e.g. "JFK".
     */
    destination?: string | null;
    /**
     * Required. Flight number, e.g. 324.
     */
    flightNumber?: number | null;
    /**
     * Required. IATA carrier code, e.g. "AA".
     */
    operatingCarrierCode?: string | null;
    /**
     * Required. IATA airport code for flight origin, e.g. "LHR".
     */
    origin?: string | null;
  }
  /**
   * Direct flight with emission estimates.
   */
  export interface Schema$FlightWithEmissions {
    /**
     * Optional. The significance of contrails warming impact compared to the total CO2e emissions impact.
     */
    contrailsImpactBucket?: string | null;
    /**
     * Optional. Metadata about the EASA Flight Emissions Label. Only set when the emissions data source is EASA.
     */
    easaLabelMetadata?: Schema$EasaLabelMetadata;
    /**
     * Optional. Per-passenger emission estimate numbers. Will not be present if emissions could not be computed. For the list of reasons why emissions could not be computed, see ComputeFlightEmissions.
     */
    emissionsGramsPerPax?: Schema$EmissionsGramsPerPax;
    /**
     * Required. Matches the flight identifiers in the request. Note: all IATA codes are capitalized.
     */
    flight?: Schema$Flight;
    /**
     * Optional. The source of the emissions data.
     */
    source?: string | null;
  }
  /**
   * A pair of airports.
   */
  export interface Schema$Market {
    /**
     * Required. IATA airport code for flight destination, e.g. "JFK".
     */
    destination?: string | null;
    /**
     * Required. IATA airport code for flight origin, e.g. "LHR".
     */
    origin?: string | null;
  }
  /**
   * Travel Impact Model version. For more information about the model versioning see [GitHub](https://github.com/google/travel-impact-model/#versioning).
   */
  export interface Schema$ModelVersion {
    /**
     * Dated versions: Model datasets are recreated with refreshed input data but no change to the algorithms regularly.
     */
    dated?: string | null;
    /**
     * Major versions: Major changes to methodology (e.g. adding new data sources to the model that lead to major output changes). Such changes will be infrequent and announced well in advance. Might involve API version changes, which will respect [Google Cloud API guidelines](https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible)
     */
    major?: number | null;
    /**
     * Minor versions: Changes to the model that, while being consistent across schema versions, change the model parameters or implementation.
     */
    minor?: number | null;
    /**
     * Patch versions: Implementation changes meant to address bugs or inaccuracies in the model implementation.
     */
    patch?: number | null;
  }
  /**
   * Typical flight emission estimates for a certain market
   */
  export interface Schema$TypicalFlightEmissions {
    /**
     * Optional. Typical flight emissions per passenger for requested market. Will not be present if a typical emissions could not be computed. For the list of reasons why typical flight emissions could not be computed, see [GitHub](https://github.com/google/travel-impact-model/blob/main/projects/typical_flight_emissions.md#step-7-validate-dataset).
     */
    emissionsGramsPerPax?: Schema$EmissionsGramsPerPax;
    /**
     * Required. Matches the flight identifiers in the request. Note: all IATA codes are capitalized.
     */
    market?: Schema$Market;
  }

  export class Resource$Flights {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Stateless method to retrieve emission estimates. Details on how emission estimates are computed are in [GitHub](https://github.com/google/travel-impact-model) The response will contain all entries that match the input flight legs, in the same order. If there are no estimates available for a certain flight leg, the response will return the flight leg object with empty emission fields. The request will still be considered successful. Reasons for missing emission estimates include: * The flight is unknown to the server. * The input flight leg is missing one or more identifiers. * The flight date is in the past. * The aircraft type is not supported by the model. * Missing seat configuration. The request can contain up to 1000 flight legs. If the request has more than 1000 direct flights, if will fail with an INVALID_ARGUMENT error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/travelimpactmodel.googleapis.com
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
     * const travelimpactmodel = google.travelimpactmodel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await travelimpactmodel.flights.computeFlightEmissions({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "flights": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "flightEmissions": [],
     *   //   "modelVersion": {}
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
    computeFlightEmissions(
      params: Params$Resource$Flights$Computeflightemissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    computeFlightEmissions(
      params?: Params$Resource$Flights$Computeflightemissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ComputeFlightEmissionsResponse>>;
    computeFlightEmissions(
      params: Params$Resource$Flights$Computeflightemissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    computeFlightEmissions(
      params: Params$Resource$Flights$Computeflightemissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>,
      callback: BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
    ): void;
    computeFlightEmissions(
      params: Params$Resource$Flights$Computeflightemissions,
      callback: BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
    ): void;
    computeFlightEmissions(
      callback: BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
    ): void;
    computeFlightEmissions(
      paramsOrCallback?:
        | Params$Resource$Flights$Computeflightemissions
        | BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ComputeFlightEmissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ComputeFlightEmissionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flights$Computeflightemissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flights$Computeflightemissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://travelimpactmodel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/flights:computeFlightEmissions').replace(
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
        createAPIRequest<Schema$ComputeFlightEmissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ComputeFlightEmissionsResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves typical flight emissions estimates between two airports, also known as a market. If there are no estimates available for a certain market, the response will return the market object with empty emission fields. The request will still be considered successful. Details on how the typical emissions estimates are computed are on [GitHub](https://github.com/google/travel-impact-model/blob/main/projects/typical_flight_emissions.md). The request can contain up to 1000 markets. If the request has more than 1000 markets, it will fail with an INVALID_ARGUMENT error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/travelimpactmodel.googleapis.com
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
     * const travelimpactmodel = google.travelimpactmodel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await travelimpactmodel.flights.computeTypicalFlightEmissions({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "markets": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modelVersion": {},
     *   //   "typicalFlightEmissions": []
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
    computeTypicalFlightEmissions(
      params: Params$Resource$Flights$Computetypicalflightemissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    computeTypicalFlightEmissions(
      params?: Params$Resource$Flights$Computetypicalflightemissions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ComputeTypicalFlightEmissionsResponse>
    >;
    computeTypicalFlightEmissions(
      params: Params$Resource$Flights$Computetypicalflightemissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    computeTypicalFlightEmissions(
      params: Params$Resource$Flights$Computetypicalflightemissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>,
      callback: BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
    ): void;
    computeTypicalFlightEmissions(
      params: Params$Resource$Flights$Computetypicalflightemissions,
      callback: BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
    ): void;
    computeTypicalFlightEmissions(
      callback: BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
    ): void;
    computeTypicalFlightEmissions(
      paramsOrCallback?:
        | Params$Resource$Flights$Computetypicalflightemissions
        | BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ComputeTypicalFlightEmissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ComputeTypicalFlightEmissionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Flights$Computetypicalflightemissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flights$Computetypicalflightemissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://travelimpactmodel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/flights:computeTypicalFlightEmissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ComputeTypicalFlightEmissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ComputeTypicalFlightEmissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Flights$Computeflightemissions
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ComputeFlightEmissionsRequest;
  }
  export interface Params$Resource$Flights$Computetypicalflightemissions
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ComputeTypicalFlightEmissionsRequest;
  }
}
