import $ from 'jquery';
import $window from './_$window';

export default class device {
    isSp() {
        if($window.width() < 750) {
            return true;
        }
        return false;
    }
}

/*
[使い方]

import device from './_device';
if ( device.isSp ) {
    // SP時処理
} else {
    // PC時処理
}

*/