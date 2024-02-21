# TIF Converter

### This script converts tif files to jpeg

-   Put your tif files into the input folder
-   Results will be put into the output folder

## Before using, the necessary packages need to be installed. In this directory, run the following command:

```bash
    npm install
```

## The script can now be used like so:

```bash
    # Convert to 80% of the original resolution
    node convert.js ./input/grain_density_310.eq.tif 80

    # Convert to 50% of the original resolution
    node convert.js ./input/HMOI_GCS_RGB.tif 50
```
