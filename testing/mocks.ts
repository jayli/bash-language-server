import * as lsp from 'vscode-languageserver'

export function getMockConnection(): jest.Mocked<lsp.Connection> {
  const console: any = {
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    log: jest.fn(),
  }

  return {
    client: {} as any,
    console,
    dispose: jest.fn(),
    listen: jest.fn(),
    onCodeAction: jest.fn(),
    onCodeLens: jest.fn(),
    onCodeLensResolve: jest.fn(),
    onColorPresentation: jest.fn(),
    onCompletion: jest.fn(),
    onCompletionResolve: jest.fn(),
    onDeclaration: jest.fn(),
    onDefinition: jest.fn(),
    onDidChangeConfiguration: jest.fn(),
    onDidChangeTextDocument: jest.fn(),
    onDidChangeWatchedFiles: jest.fn(),
    onDidCloseTextDocument: jest.fn(),
    onDidOpenTextDocument: jest.fn(),
    onDidSaveTextDocument: jest.fn(),
    onDocumentColor: jest.fn(),
    onDocumentFormatting: jest.fn(),
    onDocumentHighlight: jest.fn(),
    onDocumentLinkResolve: jest.fn(),
    onDocumentLinks: jest.fn(),
    onDocumentOnTypeFormatting: jest.fn(),
    onDocumentRangeFormatting: jest.fn(),
    onDocumentSymbol: jest.fn(),
    onExecuteCommand: jest.fn(),
    onExit: jest.fn(),
    onFoldingRanges: jest.fn(),
    onHover: jest.fn(),
    onImplementation: jest.fn(),
    onInitialize: jest.fn(),
    onInitialized: jest.fn(),
    onNotification: jest.fn(),
    onPrepareRename: jest.fn(),
    onReferences: jest.fn(),
    onRenameRequest: jest.fn(),
    onRequest: jest.fn(),
    onShutdown: jest.fn(),
    onSignatureHelp: jest.fn(),
    onTypeDefinition: jest.fn(),
    onWillSaveTextDocument: jest.fn(),
    onWillSaveTextDocumentWaitUntil: jest.fn(),
    onWorkspaceSymbol: jest.fn(),
    sendDiagnostics: jest.fn(),
    sendNotification: jest.fn(),
    sendRequest: jest.fn(),
    telemetry: {} as any,
    tracer: {} as any,
    window: {} as any,
    workspace: {} as any,
  }
}
