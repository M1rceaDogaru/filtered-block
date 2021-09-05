MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var feed = $('div[role="feed"]');

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    var feed_blocks = feed.find('[data-pagelet]');
    feed_blocks.each(function(index, block) {
        let jblock = $(block);
        let sponsored_block = jblock.find('a[aria-label="label"]>span>span>span>span');
        if (sponsored_block.length === 29) {
            jblock.hide();
            return;
        }

        let for_you_block = jblock.find("span:contains('Suggested for you')");
        if (for_you_block.length > 0) {
            jblock.hide();
        }
    });
});

observer.observe(feed[0], {
  childList: true
});