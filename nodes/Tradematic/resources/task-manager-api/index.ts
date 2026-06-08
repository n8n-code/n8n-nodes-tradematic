import type { INodeProperties } from 'n8n-workflow';

export const taskManagerApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Task Manager API"
					]
				}
			},
			"options": [
				{
					"name": "GET Taskmanager Tasks",
					"value": "GET Taskmanager Tasks",
					"action": "Get tasks list",
					"description": "Get tasks list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/taskmanager/tasks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /taskmanager/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Manager API"
					],
					"operation": [
						"GET Taskmanager Tasks"
					]
				}
			}
		},
];
