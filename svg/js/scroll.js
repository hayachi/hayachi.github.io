 /** スクロール時に発生する処理 **/

        function scroll_actions() {
            var $all_elems = $('#book, #book_sp, #chair,#chair_sp, #fry, #pc, #bookshelf,#bookshelf_sp, #block, #bag,#bag_sp, #yagi, #desk, #mail,#mail_sp, #pen,#pen_sp, #media, #text_location, #text_flow, #heart,#heart_sp'),
                $header = $("#top"),
                $chenge = $("#nav_change"),
                $about = $("#about"),
                $flow = $(".flow_wrapper ul li"),
                win_sltp;

            $window.scroll(function () {
                win_sltp = $window.scrollTop();
                svg_painting();
                sticky_header();
                flow_animation();
            }).scroll();

            /* svg描画 */
            function svg_painting() {
                var $elem;

                if ($all_elems.length === 0) {
                    return;
                }
                $all_elems = $all_elems.map(function (i, elem) {
                    $elem = $(elem);
                    if (win_sltp > $elem.offset().top - 500) {
                        $elem.lazylinepainter({"svgData": SVG_ITEM, "strokeWidth": 2, "strokeColor": "#615034"}).lazylinepainter('paint');
                        return null;
                    } else {
                        return elem;
                    }
                });
            }