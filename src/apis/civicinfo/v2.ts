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

export namespace civicinfo_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Google Civic Information API
   *
   * Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const civicinfo = google.civicinfo('v2');
   * ```
   */
  export class Civicinfo {
    context: APIRequestContext;
    divisions: Resource$Divisions;
    elections: Resource$Elections;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.divisions = new Resource$Divisions(this.context);
      this.elections = new Resource$Elections(this.context);
    }
  }

  export interface Schema$CivicinfoApiprotosV2DivisionByAddressResponse {
    divisions?: {
      [key: string]: Schema$CivicinfoSchemaV2GeographicDivision;
    } | null;
    /**
     * The normalized version of the requested address.
     */
    normalizedInput?: Schema$CivicinfoSchemaV2SimpleAddressType;
  }
  /**
   * The result of a division search query.
   */
  export interface Schema$CivicinfoApiprotosV2DivisionSearchResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse".
     */
    kind?: string | null;
    results?: Schema$CivicinfoApiprotosV2DivisionSearchResult[];
  }
  /**
   * Represents a political geographic division that matches the requested query.
   */
  export interface Schema$CivicinfoApiprotosV2DivisionSearchResult {
    /**
     * Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district.
     */
    aliases?: string[] | null;
    /**
     * The name of the division.
     */
    name?: string | null;
    /**
     * The unique Open Civic Data identifier for this division
     */
    ocdId?: string | null;
  }
  /**
   * The list of elections available for this version of the API.
   */
  export interface Schema$CivicinfoApiprotosV2ElectionsQueryResponse {
    /**
     * A list of available elections
     */
    elections?: Schema$CivicinfoSchemaV2Election[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse".
     */
    kind?: string | null;
  }
  /**
   * The result of a voter info lookup query.
   */
  export interface Schema$CivicinfoApiprotosV2VoterInfoResponse {
    /**
     * Contests that will appear on the voter's ballot.
     */
    contests?: Schema$CivicinfoSchemaV2Contest[];
    /**
     * Locations where a voter is eligible to drop off a completed ballot. The voter must have received and completed a ballot prior to arriving at the location. The location may not have ballots available on the premises. These locations could be open on or before election day as indicated in the pollingHours field.
     */
    dropOffLocations?: Schema$CivicinfoSchemaV2PollingLocation[];
    /**
     * Locations where the voter is eligible to vote early, prior to election day.
     */
    earlyVoteSites?: Schema$CivicinfoSchemaV2PollingLocation[];
    /**
     * The election that was queried.
     */
    election?: Schema$CivicinfoSchemaV2Election;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse".
     */
    kind?: string | null;
    /**
     * Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well).
     */
    mailOnly?: boolean | null;
    /**
     * The normalized version of the requested address
     */
    normalizedInput?: Schema$CivicinfoSchemaV2SimpleAddressType;
    /**
     * When there are multiple elections for a voter address, the otherElections field is populated in the API response and there are two possibilities: 1. If the earliest election is not the intended election, specify the election ID of the desired election in a second API request using the electionId field. 2. If these elections occur on the same day, the API doesn?t return any polling location, contest, or election official information to ensure that an additional query is made. For user-facing applications, we recommend displaying these elections to the user to disambiguate. A second API request using the electionId field should be made for the election that is relevant to the user.
     */
    otherElections?: Schema$CivicinfoSchemaV2Election[];
    /**
     * Locations where the voter is eligible to vote on election day.
     */
    pollingLocations?: Schema$CivicinfoSchemaV2PollingLocation[];
    precinctId?: string | null;
    /**
     * The precincts that match this voter's address. Will only be returned for project IDs which have been allowlisted as "partner projects".
     */
    precincts?: Schema$CivicinfoSchemaV2Precinct[];
    /**
     * Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array.
     */
    state?: Schema$CivicinfoSchemaV2AdministrationRegion[];
  }
  /**
   * Describes information about a regional election administrative area.
   */
  export interface Schema$CivicinfoSchemaV2AdministrationRegion {
    /**
     * The election administration body for this area.
     */
    electionAdministrationBody?: Schema$CivicinfoSchemaV2AdministrativeBody;
    /**
     * The city or county that provides election information for this voter. This object can have the same elements as state.
     */
    local_jurisdiction?: Schema$CivicinfoSchemaV2AdministrationRegion;
    /**
     * The name of the jurisdiction.
     */
    name?: string | null;
    /**
     * A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources.
     */
    sources?: Schema$CivicinfoSchemaV2Source[];
  }
  /**
   * Information about an election administrative body (e.g. County Board of Elections).
   */
  export interface Schema$CivicinfoSchemaV2AdministrativeBody {
    /**
     * A URL provided by this administrative body for information on absentee voting.
     */
    absenteeVotingInfoUrl?: string | null;
    /**
     * A URL provided by this administrative body to give contest information to the voter.
     */
    ballotInfoUrl?: string | null;
    /**
     * The mailing address of this administrative body.
     */
    correspondenceAddress?: Schema$CivicinfoSchemaV2SimpleAddressType;
    /**
     * A URL provided by this administrative body for looking up general election information.
     */
    electionInfoUrl?: string | null;
    /**
     * A last minute or emergency notification text provided by this administrative body.
     */
    electionNoticeText?: string | null;
    /**
     * A URL provided by this administrative body for additional information related to the last minute or emergency notification.
     */
    electionNoticeUrl?: string | null;
    /**
     * The election officials for this election administrative body.
     */
    electionOfficials?: Schema$CivicinfoSchemaV2ElectionOfficial[];
    /**
     * A URL provided by this administrative body for confirming that the voter is registered to vote.
     */
    electionRegistrationConfirmationUrl?: string | null;
    /**
     * A URL provided by this administrative body for looking up how to register to vote.
     */
    electionRegistrationUrl?: string | null;
    /**
     * A URL provided by this administrative body describing election rules to the voter.
     */
    electionRulesUrl?: string | null;
    /**
     * A description of the hours of operation for this administrative body.
     */
    hoursOfOperation?: string | null;
    /**
     * The name of this election administrative body.
     */
    name?: string | null;
    /**
     * The physical address of this administrative body.
     */
    physicalAddress?: Schema$CivicinfoSchemaV2SimpleAddressType;
    /**
     * A description of the services this administrative body may provide.
     */
    voter_services?: string[] | null;
    /**
     * A URL provided by this administrative body for looking up where to vote.
     */
    votingLocationFinderUrl?: string | null;
  }
  /**
   * Information about a candidate running for elected office.
   */
  export interface Schema$CivicinfoSchemaV2Candidate {
    /**
     * The URL for the candidate's campaign web site.
     */
    candidateUrl?: string | null;
    /**
     * A list of known (social) media channels for this candidate.
     */
    channels?: Schema$CivicinfoSchemaV2Channel[];
    /**
     * The email address for the candidate's campaign.
     */
    email?: string | null;
    /**
     * The candidate's name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. "Mitt Romney / Paul Ryan"
     */
    name?: string | null;
    /**
     * The order the candidate appears on the ballot for this contest.
     */
    orderOnBallot?: string | null;
    /**
     * The full name of the party the candidate is a member of.
     */
    party?: string | null;
    /**
     * The voice phone number for the candidate's campaign office.
     */
    phone?: string | null;
    /**
     * A URL for a photo of the candidate.
     */
    photoUrl?: string | null;
  }
  /**
   * A social media or web channel for a candidate.
   */
  export interface Schema$CivicinfoSchemaV2Channel {
    /**
     * The unique public identifier for the candidate's channel.
     */
    id?: string | null;
    /**
     * The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter
     */
    type?: string | null;
  }
  /**
   * Information about a contest that appears on a voter's ballot.
   */
  export interface Schema$CivicinfoSchemaV2Contest {
    /**
     * A number specifying the position of this contest on the voter's ballot.
     */
    ballotPlacement?: string | null;
    /**
     * The official title on the ballot for this contest, only where available.
     */
    ballotTitle?: string | null;
    /**
     * The candidate choices for this contest.
     */
    candidates?: Schema$CivicinfoSchemaV2Candidate[];
    /**
     * Information about the electoral district that this contest is in.
     */
    district?: Schema$CivicinfoSchemaV2ElectoralDistrict;
    /**
     * A description of any additional eligibility requirements for voting in this contest.
     */
    electorateSpecifications?: string | null;
    /**
     * The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".
     */
    level?: string[] | null;
    /**
     * The number of candidates that will be elected to office in this contest.
     */
    numberElected?: string | null;
    /**
     * The number of candidates that a voter may vote for in this contest.
     */
    numberVotingFor?: string | null;
    /**
     * The name of the office for this contest.
     */
    office?: string | null;
    /**
     * If this is a partisan election, the name of the party/parties it is for.
     */
    primaryParties?: string[] | null;
    /**
     * The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include "yes" or "no" for referenda. This field is only populated for contests of type 'Referendum'.
     */
    referendumBallotResponses?: string[] | null;
    /**
     * Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'.
     */
    referendumBrief?: string | null;
    /**
     * A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.
     */
    referendumConStatement?: string | null;
    /**
     * Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type 'Referendum'.
     */
    referendumEffectOfAbstain?: string | null;
    /**
     * The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type 'Referendum'.
     */
    referendumPassageThreshold?: string | null;
    /**
     * A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.
     */
    referendumProStatement?: string | null;
    /**
     * A brief description of the referendum. This field is only populated for contests of type 'Referendum'.
     */
    referendumSubtitle?: string | null;
    /**
     * The full text of the referendum. This field is only populated for contests of type 'Referendum'.
     */
    referendumText?: string | null;
    /**
     * The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'.
     */
    referendumTitle?: string | null;
    /**
     * A link to the referendum. This field is only populated for contests of type 'Referendum'.
     */
    referendumUrl?: string | null;
    /**
     * The roles which this office fulfills.
     */
    roles?: string[] | null;
    /**
     * A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources.
     */
    sources?: Schema$CivicinfoSchemaV2Source[];
    /**
     * "Yes" or "No" depending on whether this a contest being held outside the normal election cycle.
     */
    special?: string | null;
    /**
     * The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will typically be 'Retention'.
     */
    type?: string | null;
  }
  /**
   * Information about the election that was queried.
   */
  export interface Schema$CivicinfoSchemaV2Election {
    /**
     * Day of the election in YYYY-MM-DD format.
     */
    electionDay?: string | null;
    /**
     * The unique ID of this election.
     */
    id?: string | null;
    /**
     * A displayable name for the election.
     */
    name?: string | null;
    /**
     * The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us).
     */
    ocdDivisionId?: string | null;
    shapeLookupBehavior?: string | null;
  }
  /**
   * Information about individual election officials.
   */
  export interface Schema$CivicinfoSchemaV2ElectionOfficial {
    /**
     * The email address of the election official.
     */
    emailAddress?: string | null;
    /**
     * The fax number of the election official.
     */
    faxNumber?: string | null;
    /**
     * The full name of the election official.
     */
    name?: string | null;
    /**
     * The office phone number of the election official.
     */
    officePhoneNumber?: string | null;
    /**
     * The title of the election official.
     */
    title?: string | null;
  }
  /**
   * Describes the geographic scope of a contest.
   */
  export interface Schema$CivicinfoSchemaV2ElectoralDistrict {
    /**
     * An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper.
     */
    id?: string | null;
    /**
     * The name of the district.
     */
    name?: string | null;
    /**
     * The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special
     */
    scope?: string | null;
  }
  /**
   * Describes a political geography.
   */
  export interface Schema$CivicinfoSchemaV2GeographicDivision {
    /**
     * Any other valid OCD IDs that refer to the same division.\n\nBecause OCD IDs are meant to be human-readable and at least somewhat predictable, there are occasionally several identifiers for a single division. These identifiers are defined to be equivalent to one another, and one is always indicated as the primary identifier. The primary identifier will be returned in ocd_id above, and any other equivalent valid identifiers will be returned in this list.\n\nFor example, if this division's OCD ID is ocd-division/country:us/district:dc, this will contain ocd-division/country:us/state:dc.
     */
    alsoKnownAs?: string[] | null;
    /**
     * The name of the division.
     */
    name?: string | null;
    /**
     * List of indices in the offices array, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request.
     */
    officeIndices?: number[] | null;
  }
  /**
   * A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.
   */
  export interface Schema$CivicinfoSchemaV2PollingLocation {
    /**
     * The address of the location.
     */
    address?: Schema$CivicinfoSchemaV2SimpleAddressType;
    /**
     * The last date that this early vote site or drop off location may be used. This field is not populated for polling locations.
     */
    endDate?: string | null;
    /**
     * Latitude of the location, in degrees north of the equator. Note this field may not be available for some locations.
     */
    latitude?: number | null;
    /**
     * Longitude of the location, in degrees east of the Prime Meridian. Note this field may not be available for some locations.
     */
    longitude?: number | null;
    /**
     * The name of the early vote site or drop off location. This field is not populated for polling locations.
     */
    name?: string | null;
    /**
     * Notes about this location (e.g. accessibility ramp or entrance to use).
     */
    notes?: string | null;
    /**
     * A description of when this location is open.
     */
    pollingHours?: string | null;
    /**
     * A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources.
     */
    sources?: Schema$CivicinfoSchemaV2Source[];
    /**
     * The first date that this early vote site or drop off location may be used. This field is not populated for polling locations.
     */
    startDate?: string | null;
    /**
     * The services provided by this early vote site or drop off location. This field is not populated for polling locations.
     */
    voterServices?: string | null;
  }
  export interface Schema$CivicinfoSchemaV2Precinct {
    /**
     * ID of the AdministrationRegion message for this precinct. Corresponds to LocalityId xml tag.
     */
    administrationRegionId?: string | null;
    /**
     * ID(s) of the Contest message(s) for this precinct.
     */
    contestId?: string[] | null;
    /**
     * Required. Dataset ID. What datasets our Precincts come from.
     */
    datasetId?: string | null;
    /**
     * ID(s) of the PollingLocation message(s) for this precinct.
     */
    earlyVoteSiteId?: string[] | null;
    /**
     * ID(s) of the ElectoralDistrict message(s) for this precinct.
     */
    electoralDistrictId?: string[] | null;
    /**
     * Required. A unique identifier for this precinct.
     */
    id?: string | null;
    /**
     * Specifies if the precinct runs mail-only elections.
     */
    mailOnly?: boolean | null;
    /**
     * Required. The name of the precinct.
     */
    name?: string | null;
    /**
     * The number of the precinct.
     */
    number?: string | null;
    /**
     * Encouraged. The OCD ID of the precinct
     */
    ocdId?: string[] | null;
    /**
     * ID(s) of the PollingLocation message(s) for this precinct.
     */
    pollingLocationId?: string[] | null;
    /**
     * ID(s) of the SpatialBoundary message(s) for this precinct. Used to specify a geometrical boundary of the precinct.
     */
    spatialBoundaryId?: string[] | null;
    /**
     * If present, this proto corresponds to one portion of split precinct. Other portions of this precinct are guaranteed to have the same `name`. If not present, this proto represents a full precicnt.
     */
    splitName?: string | null;
    /**
     * Specifies the ward the precinct is contained within.
     */
    ward?: string | null;
  }
  /**
   * A simple representation of an address.
   */
  export interface Schema$CivicinfoSchemaV2SimpleAddressType {
    addressLine?: string[] | null;
    /**
     * The city or town for the address.
     */
    city?: string | null;
    /**
     * The street name and number of this address.
     */
    line1?: string | null;
    /**
     * The second line the address, if needed.
     */
    line2?: string | null;
    /**
     * The third line of the address, if needed.
     */
    line3?: string | null;
    /**
     * The name of the location.
     */
    locationName?: string | null;
    /**
     * The US two letter state abbreviation of the address.
     */
    state?: string | null;
    /**
     * The US Postal Zip Code of the address.
     */
    zip?: string | null;
  }
  /**
   * Contains information about the data source for the element containing it.
   */
  export interface Schema$CivicinfoSchemaV2Source {
    /**
     * The name of the data source.
     */
    name?: string | null;
    /**
     * Whether this data comes from an official government source.
     */
    official?: boolean | null;
  }

  export class Resource$Divisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lookup OCDIDs and names for divisions related to an address.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/civicinfo.googleapis.com
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
     * const civicinfo = google.civicinfo('v2');
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
     *   const res = await civicinfo.divisions.queryDivisionByAddress({
     *     address: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "divisions": {},
     *   //   "normalizedInput": {}
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
    queryDivisionByAddress(
      params: Params$Resource$Divisions$Querydivisionbyaddress,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    queryDivisionByAddress(
      params?: Params$Resource$Divisions$Querydivisionbyaddress,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>
    >;
    queryDivisionByAddress(
      params: Params$Resource$Divisions$Querydivisionbyaddress,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryDivisionByAddress(
      params: Params$Resource$Divisions$Querydivisionbyaddress,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>,
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>
    ): void;
    queryDivisionByAddress(
      params: Params$Resource$Divisions$Querydivisionbyaddress,
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>
    ): void;
    queryDivisionByAddress(
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>
    ): void;
    queryDivisionByAddress(
      paramsOrCallback?:
        | Params$Resource$Divisions$Querydivisionbyaddress
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Divisions$Querydivisionbyaddress;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Divisions$Querydivisionbyaddress;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/civicinfo/v2/divisionsByAddress').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CivicinfoApiprotosV2DivisionByAddressResponse>(
          parameters
        );
      }
    }

    /**
     * Searches for political divisions by their natural name or OCD ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/civicinfo.googleapis.com
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
     * const civicinfo = google.civicinfo('v2');
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
     *   const res = await civicinfo.divisions.search({
     *     // The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "results": []
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
    search(
      params: Params$Resource$Divisions$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Divisions$Search,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$CivicinfoApiprotosV2DivisionSearchResponse>
    >;
    search(
      params: Params$Resource$Divisions$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Divisions$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionSearchResponse>,
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionSearchResponse>
    ): void;
    search(
      params: Params$Resource$Divisions$Search,
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionSearchResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionSearchResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Divisions$Search
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionSearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionSearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2DivisionSearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$CivicinfoApiprotosV2DivisionSearchResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Divisions$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Divisions$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/civicinfo/v2/divisions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$CivicinfoApiprotosV2DivisionSearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CivicinfoApiprotosV2DivisionSearchResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Divisions$Querydivisionbyaddress
    extends StandardParameters {
    /**
     *
     */
    address?: string;
  }
  export interface Params$Resource$Divisions$Search extends StandardParameters {
    /**
     * The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html
     */
    query?: string;
  }

  export class Resource$Elections {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List of available elections to query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/civicinfo.googleapis.com
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
     * const civicinfo = google.civicinfo('v2');
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
     *   const res = await civicinfo.elections.electionQuery({
     *     // Whether to include data that has not been allowlisted yet
     *     productionDataOnly: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "elections": [],
     *   //   "kind": "my_kind"
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
    electionQuery(
      params: Params$Resource$Elections$Electionquery,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    electionQuery(
      params?: Params$Resource$Elections$Electionquery,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>
    >;
    electionQuery(
      params: Params$Resource$Elections$Electionquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    electionQuery(
      params: Params$Resource$Elections$Electionquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>,
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>
    ): void;
    electionQuery(
      params: Params$Resource$Elections$Electionquery,
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>
    ): void;
    electionQuery(
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>
    ): void;
    electionQuery(
      paramsOrCallback?:
        | Params$Resource$Elections$Electionquery
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Elections$Electionquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Elections$Electionquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/civicinfo/v2/elections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CivicinfoApiprotosV2ElectionsQueryResponse>(
          parameters
        );
      }
    }

    /**
     * Looks up information relevant to a voter based on the voter's registered address.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/civicinfo.googleapis.com
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
     * const civicinfo = google.civicinfo('v2');
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
     *   const res = await civicinfo.elections.voterInfoQuery({
     *     // The registered address of the voter to look up.
     *     address: 'placeholder-value',
     *     // The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version\}/elections. If no election ID is specified in the query and there is more than one election with data for the given voter, the additional elections are provided in the otherElections response field.
     *     electionId: 'placeholder-value',
     *     // If set to true, only data from official state sources will be returned.
     *     officialOnly: 'placeholder-value',
     *     // Whether to include data that has not been vetted yet. Should only be made available to internal IPs or trusted partners. This is a non-discoverable parameter in the One Platform API config.
     *     productionDataOnly: 'placeholder-value',
     *     // If set to true, the query will return the success code and include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries.
     *     returnAllAvailableData: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contests": [],
     *   //   "dropOffLocations": [],
     *   //   "earlyVoteSites": [],
     *   //   "election": {},
     *   //   "kind": "my_kind",
     *   //   "mailOnly": false,
     *   //   "normalizedInput": {},
     *   //   "otherElections": [],
     *   //   "pollingLocations": [],
     *   //   "precinctId": "my_precinctId",
     *   //   "precincts": [],
     *   //   "state": []
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
    voterInfoQuery(
      params: Params$Resource$Elections$Voterinfoquery,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    voterInfoQuery(
      params?: Params$Resource$Elections$Voterinfoquery,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$CivicinfoApiprotosV2VoterInfoResponse>
    >;
    voterInfoQuery(
      params: Params$Resource$Elections$Voterinfoquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    voterInfoQuery(
      params: Params$Resource$Elections$Voterinfoquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2VoterInfoResponse>,
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2VoterInfoResponse>
    ): void;
    voterInfoQuery(
      params: Params$Resource$Elections$Voterinfoquery,
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2VoterInfoResponse>
    ): void;
    voterInfoQuery(
      callback: BodyResponseCallback<Schema$CivicinfoApiprotosV2VoterInfoResponse>
    ): void;
    voterInfoQuery(
      paramsOrCallback?:
        | Params$Resource$Elections$Voterinfoquery
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2VoterInfoResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2VoterInfoResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CivicinfoApiprotosV2VoterInfoResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$CivicinfoApiprotosV2VoterInfoResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Elections$Voterinfoquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Elections$Voterinfoquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://civicinfo.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/civicinfo/v2/voterinfo').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$CivicinfoApiprotosV2VoterInfoResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CivicinfoApiprotosV2VoterInfoResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Elections$Electionquery
    extends StandardParameters {
    /**
     * Whether to include data that has not been allowlisted yet
     */
    productionDataOnly?: boolean;
  }
  export interface Params$Resource$Elections$Voterinfoquery
    extends StandardParameters {
    /**
     * The registered address of the voter to look up.
     */
    address?: string;
    /**
     * The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version\}/elections. If no election ID is specified in the query and there is more than one election with data for the given voter, the additional elections are provided in the otherElections response field.
     */
    electionId?: string;
    /**
     * If set to true, only data from official state sources will be returned.
     */
    officialOnly?: boolean;
    /**
     * Whether to include data that has not been vetted yet. Should only be made available to internal IPs or trusted partners. This is a non-discoverable parameter in the One Platform API config.
     */
    productionDataOnly?: boolean;
    /**
     * If set to true, the query will return the success code and include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries.
     */
    returnAllAvailableData?: boolean;
  }
}
