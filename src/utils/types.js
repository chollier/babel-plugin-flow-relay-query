/* @flow */
/* eslint no-use-before-define:0 */

type FlowBooleanType = { type: "boolean", nullable: boolean };
type FlowNumberType = { type: "number", nullable: boolean };
type FlowStringType = { type: "string", nullable: boolean };
type FlowAnyType = { type: "any", nullable: boolean };

export type FlowScalarType = FlowBooleanType | FlowNumberType | FlowStringType | FlowAnyType;
export type FlowObjectType = { type: "object", nullable: boolean, properties: FlowTypes };
export type FlowType = FlowObjectType | FlowScalarType;

export type FlowTypes = { [name: string]: FlowType }
