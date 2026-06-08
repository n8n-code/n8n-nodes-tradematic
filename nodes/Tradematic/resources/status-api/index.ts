import type { INodeProperties } from 'n8n-workflow';

export const statusApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Status API"
					]
				}
			},
			"options": [
				{
					"name": "GET Ping",
					"value": "GET Ping",
					"action": "Ping",
					"description": "Ping",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ping"
						}
					}
				},
				{
					"name": "GET Time",
					"value": "GET Time",
					"action": "Get current server time",
					"description": "Get current server time",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/time"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /ping",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status API"
					],
					"operation": [
						"GET Ping"
					]
				}
			}
		},
		{
			"displayName": "GET /time",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status API"
					],
					"operation": [
						"GET Time"
					]
				}
			}
		},
];
