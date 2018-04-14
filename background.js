// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var targetWindow = null;
var tabCount = 0;

function start(tab) {
  var url = 'http://api.baiyug.cn/vip/index.php?url=' + tab.url;
  chrome.tabs.create({
    index:0,
    url:url
  },null);
}



// Set up a click handler so that we can merge all the windows.
chrome.browserAction.onClicked.addListener(start);
