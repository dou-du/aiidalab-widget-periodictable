import {
  IDisposable, DisposableDelegate
} from '@phosphor/disposable';

import {
  JupyterFrontEnd, JupyterFrontEndPlugin 
} from '@jupyterlab/application';

import {
  ToolbarButton
} from '@jupyterlab/apputils';

import {
  CodeCell 
} from '@jupyterlab/cells';

import {
  DocumentRegistry
} from '@jupyterlab/docregistry';

import {
  NotebookPanel, INotebookModel
} from '@jupyterlab/notebook';


const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jlab-hide-code:buttonPlugin',
  autoStart: true,
  activate  
};

export
class ButtonExtension implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel> {

  createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): IDisposable {
  
	let showPTable = () => {
        const model = panel.content.model;
        const newcell = model.contentFactory.createCodeCell({});
        newcell.value.text = 'import ipywidgets as widgets\nfrom aiidalab_widget_periodictable import PTableWidget\nPTableWidget()'; 
        model.cells.push(newcell);
        let xcell = panel.content.widgets[panel.content.widgets.length-1] as CodeCell;
        CodeCell.execute(xcell, context.session); 

    buttonPTable.hide(); 
	};
  
    let buttonPTable = new ToolbarButton({
      className: 'myButton',
      iconClassName: 'fa fa-flask',
      onClick: showPTable,
      tooltip: 'Hide Input'
    });
	


    panel.toolbar.insertItem(10, 'Periodic Table', buttonPTable);
	
    return new DisposableDelegate(() => {
      buttonPTable.dispose();
    });
  }

  
}

function activate(app: JupyterFrontEnd) {
  app.docRegistry.addWidgetExtension('Notebook', new ButtonExtension());
};

export default plugin;
