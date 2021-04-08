import Mirador from 'mirador/dist/es/src/index';
import miradorDownloadPlugin from '../../plugins/MiradorDownloadPlugin.js';
import miradorDownloadDialogPlugin from '../../plugins/MiradorDownloadDialog.js';

const config = {
  id: 'root',
  miradorDownloadPlugin: {
    restrictDownloadOnSizeDefinition: true,
  },
  windows: [{
    loadedManifest: 'https://huondauvergne.org/manifests/b-manifest.json',
  }],
  window: { //global window defaults
    allowClose: true, // Configure if windows can be closed or not
    allowFullscreen: true, // Configure to show a "fullscreen" button in the WindowTopBar
    allowMaximize: true, // Configure if windows can be maximized or not
    allowTopMenuButton: true, // Configure if window view and thumbnail display menu are visible or not
    allowWindowSideBar: true, // Configure if side bar menu is visible or not
    authNewWindowCenter: 'parent', // Configure how to center a new window created by the authentication flow. Options: parent, screen
    sideBarPanel: 'info', // Configure which sidebar is selected by default. Options: info, attribution, canvas, annotations, search
    defaultSidebarPanelHeight: 201,  // Configure default sidebar height in pixels
    defaultSidebarPanelWidth: 235, // Configure default sidebar width in pixels
    defaultView: 'gallery',  // Configure which viewing mode (e.g. single, book, gallery) for windows to be opened in
    forceDrawAnnotations: false,
    hideWindowTitle: false, // Configure if the window title is shown in the window title bar or not
    highlightAllAnnotations: false, // Configure whether to display annotations on the canvas by default
    showLocalePicker: false, // Configure locale picker for multi-lingual metadata
    sideBarOpen: false, // Configure if the sidebar (and its content panel) is open by default
    switchCanvasOnSearch: true, // Configure if Mirador should automatically switch to the canvas of the first search result
    panels: { // Configure which panels are visible in WindowSideBarButtons
      info: true,
      attribution: true,
      canvas: true,
      annotations: true,
      search: true,
      layers: false,
    },
  },
};

const MiradorViewer = () => {
  Mirador.viewer(config, [miradorDownloadPlugin, miradorDownloadDialogPlugin])
  return(null)
}

export default MiradorViewer;