webpackJsonp(["license.module"],{

/***/ "../../../../../src/app/license/license.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseDemoComponent", function() { return LicenseDemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseModule", function() { return LicenseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_amexio_ng_extensions__ = __webpack_require__("../../../../amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by pratik on 19/1/18.
 */






var LicenseDemoComponent = (function () {
    function LicenseDemoComponent() {
    }
    LicenseDemoComponent.prototype.ngOnInit = function () { };
    LicenseDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'license-demo',
            template: "\n  <amexio-row>\n    <amexio-column size=\"12\">\n      <amexio-card header=\"true\">\n        <amexio-header>\n           Apache License \n        </amexio-header>\n        \n        <amexio-body>\n          <p>  Apache License\n            Version 2.0, January 2004\n            http://www.apache.org/licenses/</p>\n\n\n          <p><b>TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION</b></p>\n\n          <p>1. Definitions.</p>\n\n          <p> \"License\" shall mean the terms and conditions for use, reproduction,\n            and distribution as defined by Sections 1 through 9 of this document.</p>\n          <p>\n            \"Licensor\" shall mean the copyright owner or entity authorized by\n            the copyright owner that is granting the License.\n          </p>\n          <p>\n            \"Legal Entity\" shall mean the union of the acting entity and all\n            other entities that control, are controlled by, or are under common\n            control with that entity. For the purposes of this definition,\n            \"control\" means (i) the power, direct or indirect, to cause the\n            direction or management of such entity, whether by contract or\n            otherwise, or (ii) ownership of fifty percent (50%) or more of the\n            outstanding shares, or (iii) beneficial ownership of such entity.\n          </p>\n          <p>\n            \"You\" (or \"Your\") shall mean an individual or Legal Entity\n            exercising permissions granted by this License.\n          </p>\n          <p>\n            \"Source\" form shall mean the preferred form for making modifications,\n            including but not limited to software source code, documentation\n            source, and configuration files.\n          </p>\n          <p>\n            \"Object\" form shall mean any form resulting from mechanical\n            transformation or translation of a Source form, including but\n            not limited to compiled object code, generated documentation,\n            and conversions to other media types.\n          </p>\n          <p>\n            \"Work\" shall mean the work of authorship, whether in Source or\n            Object form, made available under the License, as indicated by a\n            copyright notice that is included in or attached to the work\n            (an example is provided in the Appendix below).\n          </p>\n          <p>\n            \"Derivative Works\" shall mean any work, whether in Source or Object\n            form, that is based on (or derived from) the Work and for which the\n            editorial revisions, annotations, elaborations, or other modifications\n            represent, as a whole, an original work of authorship. For the purposes\n            of this License, Derivative Works shall not include works that remain\n            separable from, or merely link (or bind by name) to the interfaces of,\n            the Work and Derivative Works thereof.\n          </p>\n          <p>\n            \"Contribution\" shall mean any work of authorship, including\n            the original version of the Work and any modifications or additions\n            to that Work or Derivative Works thereof, that is intentionally\n            submitted to Licensor for inclusion in the Work by the copyright owner\n            or by an individual or Legal Entity authorized to submit on behalf of\n            the copyright owner. For the purposes of this definition, \"submitted\"\n            means any form of electronic, verbal, or written communication sent\n            to the Licensor or its representatives, including but not limited to\n            communication on electronic mailing lists, source code control systems,\n            and issue tracking systems that are managed by, or on behalf of, the\n            Licensor for the purpose of discussing and improving the Work, but\n            excluding communication that is conspicuously marked or otherwise\n            designated in writing by the copyright owner as \"Not a Contribution.\"\n          </p>\n          <p>\n            \"Contributor\" shall mean Licensor and any individual or Legal Entity\n            on behalf of whom a Contribution has been received by Licensor and\n            subsequently incorporated within the Work.\n          </p>\n          <p>\n            2. Grant of Copyright License. Subject to the terms and conditions of\n            this License, each Contributor hereby grants to You a perpetual,\n            worldwide, non-exclusive, no-charge, royalty-free, irrevocable\n            copyright license to reproduce, prepare Derivative Works of,\n            publicly display, publicly perform, sublicense, and distribute the\n            Work and such Derivative Works in Source or Object form.\n          </p>\n          <p>\n            3. Grant of Patent License. Subject to the terms and conditions of\n            this License, each Contributor hereby grants to You a perpetual,\n            worldwide, non-exclusive, no-charge, royalty-free, irrevocable\n            (except as stated in this section) patent license to make, have made,\n            use, offer to sell, sell, import, and otherwise transfer the Work,\n            where such license applies only to those patent claims licensable\n            by such Contributor that are necessarily infringed by their\n            Contribution(s) alone or by combination of their Contribution(s)\n            with the Work to which such Contribution(s) was submitted. If You\n            institute patent litigation against any entity (including a\n            cross-claim or counterclaim in a lawsuit) alleging that the Work\n            or a Contribution incorporated within the Work constitutes direct\n            or contributory patent infringement, then any patent licenses\n            granted to You under this License for that Work shall terminate\n            as of the date such litigation is filed.\n          </p>\n          <p>\n            4. Redistribution. You may reproduce and distribute copies of the\n            Work or Derivative Works thereof in any medium, with or without\n            modifications, and in Source or Object form, provided that You\n            meet the following conditions:\n\n          <p>(a) You must give any other recipients of the Work or\n            Derivative Works a copy of this License; and</p>\n\n          <p>(b) You must cause any modified files to carry prominent notices\n            stating that You changed the files; and</p>\n\n          <p>(c) You must retain, in the Source form of any Derivative Works\n            that You distribute, all copyright, patent, trademark, and\n            attribution notices from the Source form of the Work,\n            excluding those notices that do not pertain to any part of\n            the Derivative Works; and</p>\n\n          <p>(d) If the Work includes a \"NOTICE\" text file as part of its\n            distribution, then any Derivative Works that You distribute must\n            include a readable copy of the attribution notices contained\n            within such NOTICE file, excluding those notices that do not\n            pertain to any part of the Derivative Works, in at least one\n            of the following places: within a NOTICE text file distributed\n            as part of the Derivative Works; within the Source form or\n            documentation, if provided along with the Derivative Works; or,\n            within a display generated by the Derivative Works, if and\n            wherever such third-party notices normally appear. The contents\n            of the NOTICE file are for informational purposes only and\n            do not modify the License. You may add Your own attribution\n            notices within Derivative Works that You distribute, alongside\n            or as an addendum to the NOTICE text from the Work, provided\n            that such additional attribution notices cannot be construed\n            as modifying the License.</p>\n\n          <p>You may add Your own copyright statement to Your modifications and\n            may provide additional or different license terms and conditions\n            for use, reproduction, or distribution of Your modifications, or\n            for any such Derivative Works as a whole, provided Your use,\n            reproduction, and distribution of the Work otherwise complies with\n            the conditions stated in this License.\n          </p>\n          <p>\n            5. Submission of Contributions. Unless You explicitly state otherwise,\n            any Contribution intentionally submitted for inclusion in the Work\n            by You to the Licensor shall be under the terms and conditions of\n            this License, without any additional terms or conditions.\n            Notwithstanding the above, nothing herein shall supersede or modify\n            the terms of any separate license agreement you may have executed\n            with Licensor regarding such Contributions.\n          </p>\n          <p>\n            6. Trademarks. This License does not grant permission to use the trade\n            names, trademarks, service marks, or product names of the Licensor,\n            except as required for reasonable and customary use in describing the\n            origin of the Work and reproducing the content of the NOTICE file.\n          </p>\n          <p>\n            7. Disclaimer of Warranty. Unless required by applicable law or\n            agreed to in writing, Licensor provides the Work (and each\n            Contributor provides its Contributions) on an \"AS IS\" BASIS,\n            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or\n            implied, including, without limitation, any warranties or conditions\n            of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A\n            PARTICULAR PURPOSE. You are solely responsible for determining the\n            appropriateness of using or redistributing the Work and assume any\n            risks associated with Your exercise of permissions under this License.\n          </p>\n          <p>\n            8. Limitation of Liability. In no event and under no legal theory,\n            whether in tort (including negligence), contract, or otherwise,\n            unless required by applicable law (such as deliberate and grossly\n            negligent acts) or agreed to in writing, shall any Contributor be\n            liable to You for damages, including any direct, indirect, special,\n            incidental, or consequential damages of any character arising as a\n            result of this License or out of the use or inability to use the\n            Work (including but not limited to damages for loss of goodwill,\n            work stoppage, computer failure or malfunction, or any and all\n            other commercial damages or losses), even if such Contributor\n            has been advised of the possibility of such damages.\n          </p>\n          <p>\n            9. Accepting Warranty or Additional Liability. While redistributing\n            the Work or Derivative Works thereof, You may choose to offer,\n            and charge a fee for, acceptance of support, warranty, indemnity,\n            or other liability obligations and/or rights consistent with this\n            License. However, in accepting such obligations, You may act only\n            on Your own behalf and on Your sole responsibility, not on behalf\n            of any other Contributor, and only if You agree to indemnify,\n            defend, and hold each Contributor harmless for any liability\n            incurred by, or claims asserted against, such Contributor by reason\n            of your accepting any such warranty or additional liability.\n          </p>\n          <p>\n            <b> END OF TERMS AND CONDITIONS</b>\n          </p>\n          <p>\n            <b>APPENDIX</b> : How to apply the Apache License to your work.\n          </p>\n          <p>\n            To apply the Apache License to your work, attach the following\n            boilerplate notice, with the fields enclosed by brackets {{\"{\"}}{{\"}\"}}\n            replaced with your own identifying information. (Don't include\n            the brackets!)  The text should be enclosed in the appropriate\n            comment syntax for the file format. We also recommend that a\n            file or class name and description of purpose be included on the\n            same \"printed page\" as the copyright notice for easier\n            identification within third-party archives.\n          </p>\n          <p>\n            Copyright 2017 MetaMagic Global Inc, NJ, USA\n          </p>\n          <p>\n\n            Licensed under the Apache License, Version 2.0 (the \"License\");\n            you may not use this file except in compliance with the License.\n            You may obtain a copy of the License at\n          </p>\n          <p>\n            http://www.apache.org/licenses/LICENSE-2.0\n          </p>\n          <p>\n            Unless required by applicable law or agreed to in writing, software\n            distributed under the License is distributed on an \"AS IS\" BASIS,\n            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n            See the License for the specific language governing permissions and\n            limitations under the License.\n          </p>\n        </amexio-body>\n        \n      </amexio-card>\n    </amexio-column>\n  </amexio-row>\n "
        }),
        __metadata("design:paramtypes", [])
    ], LicenseDemoComponent);
    return LicenseDemoComponent;
}());

var routes = [
    { path: '', component: LicenseDemoComponent },
];
var LicenseModule = (function () {
    function LicenseModule() {
    }
    LicenseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3_amexio_ng_extensions__["h" /* AmexioWidgetModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            declarations: [LicenseDemoComponent]
        })
    ], LicenseModule);
    return LicenseModule;
}());

var routedComponents = [LicenseDemoComponent];


/***/ })

});
//# sourceMappingURL=license.module.chunk.js.map