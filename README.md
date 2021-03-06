aiidalab-widget-periodictable
=============================

A jupyter widget to select chemical elements from the periodic table

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/dou-du/aiidalab-widget-periodictable/master?urlpath=%2Fapps%2Fexamples%2Fwidget-demo.ipynb)

Installation
------------

**NOTE**: this package is not yet on pip.

To install use pip:

    $ pip install aiidalab_widget_periodictable
    $ jupyter nbextension enable --py --sys-prefix aiidalab_widget_periodictable

Install for the JupyterLab:

    $ jlpm
    $ jlpm run build
    $ jupyter lab install .


For a development installation (requires npm),

    $ git clone https://github.com/aiidalab/aiidalab-widget-periodictable.git
    $ cd aiidalab-widget-periodictable
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix aiidalab_widget_periodictable
    $ jupyter nbextension enable --py --sys-prefix aiidalab_widget_periodictable
    $ jupyter lab install .

Alternatively, you can also simply call the `reinstall.sh` script that calls the last three steps.

After this, you need both to refresh the page, and restart the kernel.

If you just changed the JS part, you can run a bit faster by running only
the `./jsonlyreinstall.sh` script and then refreshing the page.
