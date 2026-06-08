import type { INodeProperties } from 'n8n-workflow';

export const autofollowApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Autofollow API"
					]
				}
			},
			"options": [
				{
					"name": "GET Autofollow Strategies",
					"value": "GET Autofollow Strategies",
					"action": "Get autofollow strategies list",
					"description": "Get autofollow strategies list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/autofollow/strategies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /autofollow/strategies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Autofollow API"
					],
					"operation": [
						"GET Autofollow Strategies"
					]
				}
			}
		},
];
