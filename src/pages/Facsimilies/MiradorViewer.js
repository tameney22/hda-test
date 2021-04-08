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
  },
  {
    loadedManifest: 'https://scta.info/iiif/graciliscommentary/lon/manifest',
    view: 'book',
    canvasIndex: 3,
  },
  {
    loadedManifest: 'https://purl.stanford.edu/xh756kf1140/iiif/manifest',
  },
  {
    loadedManifest: 'https://digital.library.villanova.edu/Item/vudl:24299/Manifest',
  }],
};

const MiradorViewer = Mirador.viewer(config, [
  miradorDownloadPlugin,
  miradorDownloadDialogPlugin
]);

export default MiradorViewer;