#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Giovanni Pizzi, Dou Du
# Distributed under the terms of the Modified BSD License.

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'nbextension/static',
        'dest': 'aiidalab_widget_periodictable',
        'require': 'aiidalab_widget_periodictable/extension'
    }]
