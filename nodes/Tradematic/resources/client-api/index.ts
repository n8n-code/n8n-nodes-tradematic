import type { INodeProperties } from 'n8n-workflow';

export const clientApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Client API"
					]
				}
			},
			"options": [
				{
					"name": "GET Client Apikeys",
					"value": "GET Client Apikeys",
					"action": "Get API keys",
					"description": "Get API keys",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/client/apikeys"
						}
					}
				},
				{
					"name": "POST Client Apikeys",
					"value": "POST Client Apikeys",
					"action": "Create new API key",
					"description": "Create new API key",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/client/apikeys"
						}
					}
				},
				{
					"name": "GET Client Users",
					"value": "GET Client Users",
					"action": "Get users list",
					"description": "Get users list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/client/users"
						}
					}
				},
				{
					"name": "POST Client Users Login",
					"value": "POST Client Users Login",
					"action": "Logs user into the system",
					"description": "Logs user into the system",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/client/users/login"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /client/apikeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Client API"
					],
					"operation": [
						"GET Client Apikeys"
					]
				}
			}
		},
		{
			"displayName": "POST /client/apikeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Client API"
					],
					"operation": [
						"POST Client Apikeys"
					]
				}
			}
		},
		{
			"displayName": "GET /client/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Client API"
					],
					"operation": [
						"GET Client Users"
					]
				}
			}
		},
		{
			"displayName": "POST /client/users/login",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Client API"
					],
					"operation": [
						"POST Client Users Login"
					]
				}
			}
		},
];
