'use strict';

# https://github.com/angular/protractor/blob/master/docs/toc.md

describe 'snakewars', ->
  console.log 'snakewars e2e start'
  browser.get 'index.html'

  it 'should automatically redirect to /home when location hash/fragment is empty', ->
    expect(browser.getLocationAbsUrl())
      .toMatch "/home"

  describe 'home', ->
    beforeEach ->
      browser.get 'index.html#/home'

    it 'should render view1 when user navigates to /home', ->
      expect(element.all(By.css '[ui-view] p').first().getText())
        .toMatch /home-test/
