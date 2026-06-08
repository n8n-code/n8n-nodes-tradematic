import type { INodeProperties } from 'n8n-workflow';

export const marketDataApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Market Data API"
					]
				}
			},
			"options": [
				{
					"name": "GET Marketdata Markets",
					"value": "GET Marketdata Markets",
					"action": "Get markets list",
					"description": "Get markets list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/marketdata/markets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /marketdata/markets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Market Data API"
					],
					"operation": [
						"GET Marketdata Markets"
					]
				}
			}
		},
];
