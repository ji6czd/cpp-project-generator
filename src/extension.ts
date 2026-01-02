import * as vscode from 'vscode';
import { createCppProject } from './commands/create-project';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('cpp-project-generator.create-cpp-project', createCppProject)
	);
}

// This method is called when your extension is deactivated
export function deactivate() { }
