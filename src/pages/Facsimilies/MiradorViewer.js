import Mirador from 'mirador/dist/es/src/index';
import miradorDownloadPlugin from '../../plugins/MiradorDownloadPlugin.js';
import miradorDownloadDialogPlugin from '../../plugins/MiradorDownloadDialog.js';

const config = {
  id: 'root',
  miradorDownloadPlugin: {
    restrictDownloadOnSizeDefinition: true,
  },
  windows: [{
    loadedManifest: 'https://iiif.ub.uni-leipzig.de/0000031264/manifest.json',
  }],
};

const MiradorViewer = () => {
  Mirador.viewer(config, [miradorDownloadPlugin, miradorDownloadDialogPlugin])
  return(null)
}

export default MiradorViewer;