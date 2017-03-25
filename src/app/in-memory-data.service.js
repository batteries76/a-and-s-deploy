"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            {
                id: 11,
                name: 'Biggie Low Neckline',
                imageLoc: 'public/images/t-shirts/biggie-low-neckline.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 10
            },
            {
                id: 12,
                name: 'Biggie Reg Neckline',
                imageLoc: 'public/images/t-shirts/biggie-reg-neckline.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 20
            },
            {
                id: 13,
                name: 'Boom Box',
                imageLoc: 'public/images/t-shirts/boom-box.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 30
            },
            {
                id: 14,
                name: 'Classic Low Neckline',
                imageLoc: 'public/images/t-shirts/classic-low-neckline.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 40
            },
            {
                id: 15,
                name: 'Flying Kick Low Neckline White',
                imageLoc: 'public/images/t-shirts/flying-kick-low-neckline-white.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 50
            },
            {
                id: 16,
                name: 'Flying Kick Reg Neckline Blue',
                imageLoc: 'public/images/t-shirts/flying-kick-reg-neckline-blue.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 60
            },
            {
                id: 17,
                name: 'Flying Kick Reg Neckline White',
                imageLoc: 'public/images/t-shirts/flying-kick-reg-neckline-white.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 70
            },
            {
                id: 18,
                name: 'Flying Kick Reg Neckline',
                imageLoc: 'public/images/t-shirts/flying-kick-reg-neckline.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 80
            },
            {
                id: 19,
                name: 'JCVD Low Neckline',
                imageLoc: 'public/images/t-shirts/JCVD-low-neckline.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 90
            },
            {
                id: 20,
                name: 'JCVD Reg Neckline',
                imageLoc: 'public/images/t-shirts/JCVD-reg-neckline.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 100
            },
            {
                id: 21,
                name: 'Stay For Lock-in Low Neckline',
                imageLoc: 'public/images/t-shirts/stay-for-lock-in-low-neckline.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 110
            },
            {
                id: 22,
                name: 'Stay For Lock-in Reg Neckline',
                imageLoc: 'public/images/t-shirts/stay-for-lock-in-reg-neckline.png',
                prodType: 't-shirt',
                sizes: ['S', 'M', 'L'],
                numberOrderedSmall: 0,
                numberOrderedMedium: 0,
                numberOrderedLarge: 0,
                numberOrderedTotal: 0,
                price: 120
            }
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map