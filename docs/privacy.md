---
title: Privacy
description: How SpecDriven handles newsletter subscriptions and site analytics.
prev: false
next: false
---

# Privacy

SpecDriven is published by [Sam Hatoum](/about). This page explains the limited information collected when you use the site.

## Newsletter subscriptions

When you subscribe, the site sends your email address, the subscription placement, the referring page when available, and `specdriven.com` as the source to the subscription service at `forms.on.auto`. That shared infrastructure lets Sam distinguish SpecDriven subscribers from people arriving through Auto.

The email address is used to send SpecDriven updates and to understand which publication a subscriber joined from. It is not displayed publicly.

## Analytics

SpecDriven uses PostHog to understand page visits and newsletter sign-ups. Analytics events can include the page path, environment, subscription placement, and the source of a subscription. After a successful subscription, the normalized email address is associated with the PostHog profile so the subscription event can be attributed correctly.

## Organization analytics

On each page you visit, SpecDriven loads a small image from `static.on.auto`, a domain operated by [Scarf](https://scarf.sh), to understand which organizations read the site. The image sets no cookies. The request carries the address of the page without its query string, along with what every browser request includes, such as your IP address. Scarf uses the IP address to look up the organization it belongs to and does not store the address itself. This information is available to Auto (OnAuto, Inc.), whose Scarf account receives it.

The image is not loaded when your browser sends a Do Not Track signal.

## Questions and corrections

If you want to ask what information is associated with your subscription, correct it, or request its removal, contact [Sam Hatoum on LinkedIn](https://www.linkedin.com/in/samhatoum/).

This notice describes the current site implementation. It will be updated when that implementation changes.
