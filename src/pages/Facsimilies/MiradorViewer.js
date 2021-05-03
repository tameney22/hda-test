//This is the configuration file for mirador

import Mirador from 'mirador/dist/es/src/index';
import miradorDownloadPlugin from '../../pluginsForMirador/MiradorDownloadPlugin.js';
import miradorDownloadDialogPlugin from '../../pluginsForMirador/MiradorDownloadDialog.js';
//import { miradorImageToolsPlugin } from '../../src';
//import mirador from 'mirador/dist/es/src/index';
//import annotationPlugins from '../../src';
//import LocalStorageAdapter from '../../src/LocalStorageAdapter';
//import AnnototAdapter from '../../src/AnnototAdapter';

import React from 'react';
import PropTypes from 'prop-types';

var config;
class MiradorViewer extends React.Component {

  componentDidMount () {


    //
    //
    // 
    //
    config = {
      id: 'main',
      miradorDownloadPlugin: {
        restrictDownloadOnSizeDefinition: true,
      },
      windows: [{
        imageToolsEnabled: true,
        loadedManifest: this.props.link,
        thumbnailNavigationPosition: 'far-bottom'
      }],
      catalog: [
        { manifestId: "https://huondauvergne.org/manifests/b-manifest.json", provider: ""},
        { manifestId: "https://huondauvergne.org/manifests/t-manifest.json", provider: ""},
        { manifestId: "https://huondauvergne.org/manifests/p-manifest.json", provider: ""},
        { manifestId: "https://huondauvergne.org/manifests/r-manifest.json", provider: ""},
        { manifestId: "https://huondauvergne.org/manifests/br-manifest.json", provider: ""},
      ],
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
        defaultView: 'single',  // Configure which viewing mode (e.g. single, book, gallery) for windows to be opened in
        forceDrawAnnotations: false,
        hideWindowTitle: false, // Configure if the window title is shown in the window title bar or not
        highlightAllAnnotations: false, // Configure whether to display annotations on the canvas by default
        imageToolsEnabled: true, // Enable
        imageToolsOpen: true, // Enable
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
      canvasControls: { // The types of controls available to be displayed on a canvas
        imageManipulation : {
        manipulationLayer : true,
        controls : {
            rotate : true,
            brightness : true,
            contrast : true,
            saturate : true,
            grayscale : true,
            invert : true,
            mirror : false
          }
        }
      }
    };

    Mirador.viewer(config, [miradorDownloadPlugin, miradorDownloadDialogPlugin])
  }

  render() {
    return(<></>)
  }

}

MiradorViewer.propTypes = {
  link: PropTypes.string
}

export default MiradorViewer;