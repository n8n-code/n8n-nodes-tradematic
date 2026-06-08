import type { INodeProperties } from 'n8n-workflow';

export const cloudApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cloud API"
					]
				}
			},
			"options": [
				{
					"name": "GET Cloud Accounts",
					"value": "GET Cloud Accounts",
					"action": "Get trading accounts list",
					"description": "Get trading accounts list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cloud/accounts"
						}
					}
				},
				{
					"name": "GET Cloud Commands",
					"value": "GET Cloud Commands",
					"action": "Get commands list",
					"description": "Get commands list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cloud/commands"
						}
					}
				},
				{
					"name": "GET Cloud Connections",
					"value": "GET Cloud Connections",
					"action": "Get connections list",
					"description": "Get connections list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cloud/connections"
						}
					}
				},
				{
					"name": "GET Cloud Connectors",
					"value": "GET Cloud Connectors",
					"action": "Get available connectors list",
					"description": "Get available connectors list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cloud/connectors"
						}
					}
				},
				{
					"name": "GET Cloud Sessions",
					"value": "GET Cloud Sessions",
					"action": "Get sessions list",
					"description": "Get sessions list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cloud/sessions"
						}
					}
				},
				{
					"name": "GET Cloud Strategies",
					"value": "GET Cloud Strategies",
					"action": "Get list of active (executing) strategies",
					"description": "Get list of active (executing) strategies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cloud/strategies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /cloud/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cloud API"
					],
					"operation": [
						"GET Cloud Accounts"
					]
				}
			}
		},
		{
			"displayName": "GET /cloud/commands",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cloud API"
					],
					"operation": [
						"GET Cloud Commands"
					]
				}
			}
		},
		{
			"displayName": "GET /cloud/connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cloud API"
					],
					"operation": [
						"GET Cloud Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /cloud/connectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cloud API"
					],
					"operation": [
						"GET Cloud Connectors"
					]
				}
			}
		},
		{
			"displayName": "GET /cloud/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cloud API"
					],
					"operation": [
						"GET Cloud Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /cloud/strategies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cloud API"
					],
					"operation": [
						"GET Cloud Strategies"
					]
				}
			}
		},
];
