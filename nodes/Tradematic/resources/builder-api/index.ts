import type { INodeProperties } from 'n8n-workflow';

export const builderApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Builder API"
					]
				}
			},
			"options": [
				{
					"name": "GET Builder Rules",
					"value": "GET Builder Rules",
					"action": "Get strategy builder rules list",
					"description": "Get strategy builder rules list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/builder/rules"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /builder/rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Builder API"
					],
					"operation": [
						"GET Builder Rules"
					]
				}
			}
		},
];
