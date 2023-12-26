document.addEventListener("DOMContentLoaded", () => {

    const classesForGsap = [
        'team', 'advs'
    ];

    classesForGsap.some((classForGsap)=>{
        const block = document.querySelector('.' + classForGsap);
        if (block){
            gsap.registerPlugin(ScrollTrigger);
            return true;
        }
    })


    const lazyContent = new LazyLoad({
        use_native: true // <-- there you go
    });

    const lazyBackground = new LazyLoad({
        // DON'T PASS use_native: true HERE
    });



    function removeActiveElement(element, query, classes) {
        const active = element.querySelector(query);
        if (active) {
            active.classList.remove(classes);
        }
    }

    const selects = document.querySelectorAll('.p-select');
    if (selects[0]){
        selects.forEach((select)=>{
            const current = select.querySelector('.p-select__current');
            const currentItem = current.querySelector('.p-select__current-item');
            const abs = select.querySelector('.p-select__abs');
            const input = current.querySelector('input');
            const absItems = abs.querySelectorAll('.p-select__abs-item');

            current.addEventListener('click', ()=>{
                select.classList.toggle('active');
            })

            absItems.forEach((item)=>{
                item.addEventListener('click', ()=>{
                    removeActiveElement(abs, '.p-select__abs-item.active', 'active');
                    input.value = item.dataset.value;
                    currentItem.textContent = item.dataset.value;
                    select.classList.remove('active');
                    item.classList.add('active');
                })
            })
        })
    }

    const whys = document.querySelectorAll('.why');
    if (whys[0]) {
        whys.forEach((why) => {
            const tabs = why.querySelectorAll('.why__tabs .why__tab');
            const contents = why.querySelectorAll('.why__contents .why__content');

            tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    removeActiveElement(why, '.why__tabs .why__tab.active', 'active');
                    removeActiveElement(why, '.why__contents .why__content.active', 'active');
                    tab.classList.add('active');
                    contents[index].classList.add('active');
                })
            })

            contents.forEach((content) => {
                const contentTabs = content.querySelectorAll('.why__content-tabs .why__content-tab');
                const contentImages = content.querySelectorAll('.why__content-image img');

                contentTabs.forEach((tab, index) => {
                    if (tab.classList.contains('active')) {
                        const text = tab.querySelector('.why__content-text');
                        text.style.height = text.scrollHeight + 'px';
                    }
                    tab.addEventListener('click', () => {
                        const tabActiveClass = '.why__content-tabs .why__content-tab.active';
                        const tabActiveText = content.querySelector(tabActiveClass + ' .why__content-text');
                        if (tabActiveText) {
                            tabActiveText.style.height = '';
                        }
                        removeActiveElement(content, tabActiveClass, 'active');
                        removeActiveElement(content, '.why__content-image img.active', 'active');
                        tab.classList.add('active');
                        const text = tab.querySelector('.why__content-text');
                        text.style.height = text.scrollHeight + 'px';
                        contentImages[index].classList.add('active');
                    })
                })
            })
        })
    }

    const estates = document.querySelectorAll('.estate__swiper');
    if (estates[0]) {
        estates.forEach((estaty) => {
            const swiper = new Swiper(estaty.querySelector('.swiper'), {
                slidesPerView: 'auto',
                spaceBetween: 18,
                // Navigation arrows
                navigation: {
                    nextEl: estaty.querySelector('.swiper-button-next'),
                    prevEl: estaty.querySelector('.swiper-button-prev'),
                },
            });
        })
    }

    const buys = document.querySelectorAll('.buy');
    if (buys[0]) {
        buys.forEach((buy) => {
            const row = buy.querySelector('.buy__row');
            const rowWidth = row.offsetWidth;
            const ammountToScroll = rowWidth - window.innerWidth;
            let sliderImages  = gsap.utils.toArray(buy.querySelectorAll('.buy__item'));


            const nextElement = buy.nextElementSibling;


            gsap.to(sliderImages, {
                x: -rowWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: row,
                    start: 'top 185px',
                    pin: true,
                    // pinReparent: true,
                    // pinSpacing: false,
                    scrub: 1,
                    end: () => "+=" + rowWidth,
                    invalidateOnRefresh: true,
                    // onUpdate:(self) => {
                    //     console.log(self);
                    //     console.log(self.progress);
                    // }
                },
            });

        })
    }


    const filters = document.querySelectorAll('.filters');
    if (filters[0]){
        filters.forEach((filter)=>{
            const btnCoub = filter.querySelector('.filters__coub');
            const btnMap = filter.querySelector('.filters__map');

            const content = filter.querySelector('.filters__content');
            const map = filter.querySelector('.filters__content-map');

            btnCoub.addEventListener('click', ()=>{
                btnCoub.classList.add('active');
                content.classList.add('active');
                map.classList.remove('active');
                btnMap.classList.remove('active');
                ScrollTrigger.refresh();
            })

            btnMap.addEventListener('click', ()=>{
                btnCoub.classList.remove('active');
                content.classList.remove('active');
                map.classList.add('active');
                btnMap.classList.add('active');
                ScrollTrigger.refresh();
            })
        })
    }

    // const map = new Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 8
    // });

    const reviews = document.querySelectorAll('.reviews__swiper');
    if (reviews[0]) {
        reviews.forEach((review) => {
            const swiper = new Swiper(review.querySelector('.swiper'), {
                slidesPerView: 3,
                spaceBetween: 40,
                pagination: {
                    clickable: true,
                    el: review.querySelector('.swiper-pagination'),
                },
            });
        })
    }

    const bests = document.querySelectorAll('.best__swiper');
    if (bests[0]) {
        bests.forEach((best) => {
            const swiper = new Swiper(best.querySelector('.swiper'), {
                slidesPerView: 'auto',
                spaceBetween: 61,
                navigation: {
                    nextEl: best.querySelector('.swiper-button-next'),
                    prevEl: best.querySelector('.swiper-button-prev'),
                },
            });
        })
    }

    const pCardSeconds = document.querySelectorAll('.p-card_second');
    if (pCardSeconds[0]) {
        pCardSeconds.forEach((pCardSecond) => {
            const swiper = new Swiper(pCardSecond.querySelector('.swiper'), {
                slidesPerView: 'auto',
                pagination: {
                    clickable: true,
                    el: pCardSecond.querySelector('.swiper-pagination'),
                },
            });
        })
    }

    const rents = document.querySelectorAll('.rent');
    if (rents[0]) {
        rents.forEach((rent)=>{
            const inputs = rent.querySelectorAll(".rent__input_date");
            inputs.forEach((input)=>{
                const _input = input.querySelector('input');
                if (_input){
                    const fp = flatpickr(_input, {
                        minDate: "today",
                        dateFormat: 'd.m.Y',
                        locale: {
                            firstDayOfWeek: 1,
                            weekdays: {
                                shorthand: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                                longhand: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                            },
                            months: {
                                shorthand: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                                longhand: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                            },
                        },
                        onChange: function(selectedDates, dateStr, instance) {
                            const _element = instance.element;
                            if (_element.getAttribute('name') === 'start'){
                                const parent = _element.closest('.rent__form');
                                const end = parent.querySelector('input[name="end"]');
                                end._flatpickr.set('minDate',dateStr);
                            }
                        },
                    });
                    const svg = input.querySelector(".rent__input-svg");
                    svg.addEventListener('click', ()=>{
                        fp.toggle();
                    })
                }
            })
        })
    }

    const filterRanges = document.querySelectorAll('.modal_filter__range');
    if (filterRanges[0]){
        filterRanges.forEach((filterRange)=>{
            const slider = filterRange.querySelector('.modal_filter__range-main');
            const sliderMin = parseFloat(filterRange.dataset.min);
            const sliderMax = parseFloat(filterRange.dataset.max);
            const min = filterRange.querySelector('input[name*="min"]');
            const max = filterRange.querySelector('input[name*="max"]');
            var inputs = [min, max];
            noUiSlider.create(slider, {
                start: [
                    sliderMin,
                    sliderMax
                ],
                connect: true,
                range: {
                    'min': sliderMin,
                    'max': sliderMax
                },
                tooltips: true,
            });

            slider.noUiSlider.on('update', function (values, handle) {
                inputs[handle].value = values[handle];
            });
        })
    }

    const modalFilter = document.querySelector('.modal_filter');
    if (modalFilter){
        const form = modalFilter.closest('form');
        const reset = form.querySelector('.modal_filter__reset');
        reset.addEventListener('click', ()=>{
            const location = window.location;
            // console.log(location);
            window.location.href = location.protocol + '//' + location.host + location.pathname;
        })
    }

    const teams = document.querySelectorAll('.team');
    if (teams[0]){
        teams.forEach((team)=>{
            let itemsBlock = team.querySelector('.team__text-items');
            let lineCircle = team.querySelector('.team__text-line .team__text-line-circle');
            let itemsElements = itemsBlock.querySelectorAll('.team__text-item');

            let _animation = gsap.timeline({
                scrollTrigger: {
                    trigger: team,
                    start: "center center",
                    pin: true,
                    scrub: 1,
                    end: "+=100%",
                    ease: "power2",
                    toggleActions: "play none none reverse",
                    onUpdate: (self) => {
                        gsap.to(
                            lineCircle,
                            {
                                top: self.progress.toFixed(2) * 100 + '%'
                            }
                        )
                    },
                }
            });


            itemsElements.forEach((element)=>{
                _animation.fromTo(
                    element,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1
                    }
                )
            })
        })
    }
    const advs = document.querySelectorAll('.advs');
    if (advs[0]){
        advs.forEach((adv)=>{
            let itemsBlock = adv.querySelector('.advs__items');
            let itemsElements = itemsBlock.querySelectorAll('.advs__item');

            let panels = gsap.utils.toArray(itemsElements);
            panels.forEach((panel, i) => {
                if(i !== panels.length - 1) {
                    ScrollTrigger.create({
                        trigger: panel,
                        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
                        end: "+=" + panel.offsetHeight,
                        pin: true,
                        pinSpacing: false
                    });
                }
            });
        })
    }


    function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let onChange = config.onChange,
            lastIndex = 0,
            tl = gsap.timeline({repeat: config.repeat, onUpdate: onChange && function() {
                    let i = tl.closestIndex();
                    if (lastIndex !== i) {
                        lastIndex = i;
                        onChange(items[i], i);
                    }
                }, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            spaceBefore = [],
            xPercents = [],
            curIndex = 0,
            indexIsDirty = false,
            center = config.center,
            pixelsPerSecond = (config.speed || 1) * 100,
            snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
            timeOffset = 0,
            container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
            totalWidth,
            getTotalWidth = () => items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + spaceBefore[0] + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0),
            populateWidths = () => {
                let b1 = container.getBoundingClientRect(), b2;
                items.forEach((el, i) => {
                    widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                    xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
                    b2 = el.getBoundingClientRect();
                    spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
                    b1 = b2;
                });
                gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
                    xPercent: i => xPercents[i]
                });
                totalWidth = getTotalWidth();
            },
            timeWrap,
            populateOffsets = () => {
                timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
                center && times.forEach((t, i) => {
                    times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
                });
            },
            getClosest = (values, value, wrap) => {
                let i = values.length,
                    closest = 1e10,
                    index = 0, d;
                while (i--) {
                    d = Math.abs(values[i] - value);
                    if (d > wrap / 2) {
                        d = wrap - d;
                    }
                    if (d < closest) {
                        closest = d;
                        index = i;
                    }
                }
                return index;
            },
            populateTimeline = () => {
                let i, item, curX, distanceToStart, distanceToLoop;
                tl.clear();
                for (i = 0; i < length; i++) {
                    item = items[i];
                    curX = xPercents[i] / 100 * widths[i];
                    distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
                    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
                    tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
                        .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
                        .add("label" + i, distanceToStart / pixelsPerSecond);
                    times[i] = distanceToStart / pixelsPerSecond;
                }
                timeWrap = gsap.utils.wrap(0, tl.duration());
            },
            refresh = (deep) => {
                let progress = tl.progress();
                tl.progress(0, true);
                populateWidths();
                deep && populateTimeline();
                populateOffsets();
                deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
            },
            proxy;
        gsap.set(items, {x: 0});
        populateWidths();
        populateTimeline();
        populateOffsets();
        window.addEventListener("resize", () => refresh(true));
        function toIndex(index, vars) {
            vars = vars || {};
            (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
            let newIndex = gsap.utils.wrap(0, length, index),
                time = times[newIndex];
            if (time > tl.time() !== index > curIndex && index !== curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
                time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            if (time < 0 || time > tl.duration()) {
                vars.modifiers = {time: timeWrap};
            }
            curIndex = newIndex;
            vars.overwrite = true;
            gsap.killTweensOf(proxy);
            return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
        }
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.closestIndex = setCurrent => {
            let index = getClosest(times, tl.time(), tl.duration());
            if (setCurrent) {
                curIndex = index;
                indexIsDirty = false;
            }
            return index;
        };
        tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
        tl.next = vars => toIndex(tl.current()+1, vars);
        tl.previous = vars => toIndex(tl.current()-1, vars);
        tl.times = times;
        tl.progress(1, true).progress(0, true); // pre-render for performance
        if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
        }
        if (config.draggable && typeof(Draggable) === "function") {
            proxy = document.createElement("div")
            let wrap = gsap.utils.wrap(0, 1),
                ratio, startProgress, draggable, dragSnap, lastSnap, initChangeX, wasPlaying,
                align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
                syncIndex = () => tl.closestIndex(true);
            typeof(InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
            draggable = Draggable.create(proxy, {
                trigger: items[0].parentNode,
                type: "x",
                onPressInit() {
                    let x = this.x;
                    gsap.killTweensOf(tl);
                    wasPlaying = !tl.paused();
                    tl.pause();
                    startProgress = tl.progress();
                    refresh();
                    ratio = 1 / totalWidth;
                    initChangeX = (startProgress / -ratio) - x;
                    gsap.set(proxy, {x: startProgress / -ratio});
                },
                onDrag: align,
                onThrowUpdate: align,
                overshootTolerance: 0,
                inertia: true,
                snap(value) {
                    //note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could be very large, throwing off the snap. So sense that condition and adjust for it. We also need to set overshootTolerance to 0 to prevent the inertia from causing it to shoot past and come back
                    if (Math.abs(startProgress / -ratio - this.x) < 10) {
                        return lastSnap + initChangeX
                    }
                    let time = -(value * ratio) * tl.duration(),
                        wrappedTime = timeWrap(time),
                        snapTime = times[getClosest(times, wrappedTime, tl.duration())],
                        dif = snapTime - wrappedTime;
                    Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
                    lastSnap = (time + dif) / tl.duration() / -ratio;
                    return lastSnap;
                },
                onRelease() {
                    syncIndex();
                    draggable.isThrowing && (indexIsDirty = true);
                },
                onThrowComplete: () => {
                    syncIndex();
                    wasPlaying && tl.play();
                }
            })[0];
            tl.draggable = draggable;
        }
        tl.closestIndex(true);
        lastIndex = curIndex;
        onChange && onChange(items[curIndex], curIndex);
        return tl;
    }

    const appartmens = document.querySelectorAll('.appartments');
    if (appartmens[0]){
        appartmens.forEach((appartment)=>{
            const loop = horizontalLoop(appartment.querySelectorAll(".appartments__item"), {
                repeat: -1,
                paused: false,
                speed: 1.5
            });
        })
    }


    function resetEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function addModal(element) {
        element.classList.add("active");
    }

    function removeModal(element) {
        element.classList.remove("active");
    }


    class PovlyModal {
        constructor() {
            this.allModals();
            this.allModalShows();
        }

        allModals() {
            const modals = document.querySelectorAll(".modal");
            modals.forEach((modal) => {
                function eventClose() {
                    const event = new CustomEvent("pModalClose", {
                        detail: {
                            modal: modal,
                        },
                    });
                    document.dispatchEvent(event);
                }

                function remove() {
                    removeModal(modal);
                    document.body.style.overflow = "";
                    eventClose();
                }

                const close = modal.querySelector(".modal__close");
                if (close) {
                    close.addEventListener("click", () => {
                        remove();
                    });
                }

                const back = modal.querySelector(".modal__back");
                if (back) {
                    back.addEventListener("click", () => {
                        remove();
                    });
                }
                modal.addEventListener("click", (e) => {
                    if (e.target == modal) {
                        remove();
                    }
                });
            });
        }

        allModalShows() {
            const modalShows = document.querySelectorAll(".modal__show");
            modalShows.forEach((modal) => {
                modal.addEventListener("click", (e) => {
                    resetEvent(e);
                    const dataModal = modal.getAttribute("data-modal");
                    const _modal = document.querySelector(".modal_" + dataModal);
                    addModal(_modal);
                    document.body.style.overflow = "hidden";

                    const event = new CustomEvent("pModalOpen", {
                        detail: {
                            modal: _modal,
                            element: modal,
                        },
                    });
                    document.dispatchEvent(event);
                });
            });
        }
    }

    new PovlyModal();

    document.addEventListener("pModalOpen", (e) => {
        const detail = e.detail;
        const element = detail.element;
        const modal = detail.modal;
        lazyContent.update();
        lazyBackground.update();

        if (modal.classList.contains('modal_like_2')) {
            const _modal = element.closest('.modal');
            removeModal(_modal);
        }
    });
});
