/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2019 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/*
#################################################################
# NOTICE OF MODIFICATION:
# * This file has been modified from its original version.
# * This notice has been added with the purpose of meeting the
#   requirements of the Apache License 2.0.
#################################################################
*/

import React, { ReactElement } from "react";
import SdkConfig from "matrix-react-sdk/src/SdkConfig";

import { _t } from "../../../languageHandler";

const VectorAuthFooter = (): ReactElement => {
    const brandingConfig = SdkConfig.getObject("branding");
    const links = brandingConfig?.get("auth_footer_links") ?? [
        { text: _t("privacy_policy"), url: "https://www.ownd-project.com/messenger/privacy/index.html"},
        { text: "GitHub", url: "https://github.com/OWND-Project" },
    ];

    const authFooterLinks: JSX.Element[] = [];
    for (const linkEntry of links) {
        authFooterLinks.push(
            <a href={linkEntry.url} key={linkEntry.text} target="_blank" rel="noreferrer noopener">
                {linkEntry.text}
            </a>,
        );
    }

    return (
        <footer className="mx_AuthFooter" role="contentinfo">
            {authFooterLinks}
        </footer>
    );
};

export default VectorAuthFooter;
