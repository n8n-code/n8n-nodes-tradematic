import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { statusApiDescription } from './resources/status-api';
import { clientApiDescription } from './resources/client-api';
import { autofollowApiDescription } from './resources/autofollow-api';
import { taskManagerApiDescription } from './resources/task-manager-api';
import { builderApiDescription } from './resources/builder-api';
import { newsApiDescription } from './resources/news-api';
import { marketDataApiDescription } from './resources/market-data-api';
import { cloudApiDescription } from './resources/cloud-api';

export class Tradematic implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'tradematic',
		name: 'N8nDevTradematic',
		icon: { light: 'file:./tradematic.png', dark: 'file:./tradematic.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Overview',
		defaults: { name: 'tradematic' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevTradematicApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Status API",
					"value": "Status API",
					"description": "Server status"
				},
				{
					"name": "Client API",
					"value": "Client API",
					"description": "Clients management"
				},
				{
					"name": "Autofollow API",
					"value": "Autofollow API",
					"description": "Trading signals and copy trading"
				},
				{
					"name": "Task Manager API",
					"value": "Task Manager API",
					"description": "Backtest and optimization tasks management"
				},
				{
					"name": "Builder API",
					"value": "Builder API",
					"description": "Strategy builder"
				},
				{
					"name": "News API",
					"value": "News API",
					"description": "News"
				},
				{
					"name": "Market Data API",
					"value": "Market Data API",
					"description": "Market data"
				},
				{
					"name": "Cloud API",
					"value": "Cloud API",
					"description": "Trading"
				}
			],
			"default": ""
		},
		...statusApiDescription,
		...clientApiDescription,
		...autofollowApiDescription,
		...taskManagerApiDescription,
		...builderApiDescription,
		...newsApiDescription,
		...marketDataApiDescription,
		...cloudApiDescription
		],
	};
}
