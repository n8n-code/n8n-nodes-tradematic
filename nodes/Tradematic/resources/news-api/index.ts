import type { INodeProperties } from 'n8n-workflow';

export const newsApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"News API"
					]
				}
			},
			"options": [
				{
					"name": "GET News News",
					"value": "GET News News",
					"action": "Get news list",
					"description": "Get news list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/news/news"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /news/news",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"News API"
					],
					"operation": [
						"GET News News"
					]
				}
			}
		},
];
