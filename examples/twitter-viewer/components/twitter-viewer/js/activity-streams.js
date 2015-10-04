( function( currentScript ) {
  var importDoc = currentScript.ownerDocument;
    
  function TwitterView(el) {
    this.el = el;
    
    var content = importDoc.querySelector('#twitter_viewer_template').content;
    var node = this.el.ownerDocument.importNode( content, true );
    this.el.appendChild(node);
  }
    
  TwitterView.prototype.createActivityEl = function() {
    var content = importDoc.querySelector('#activity_template').content;
    var node = this.el.ownerDocument.importNode( content, true );
    var el = $(node);
    return el;
  };
    
  TwitterView.prototype.addActivity = function(type, data) {
    var activityEl = this.createActivityEl();
    activityEl.addClass(type + '-activity');
    activityEl.find('.author').text(data.username);
    activityEl.find('.message-body').html(data.text);
    activityEl.attr('data-activity-id', data.id);
    activityEl.find('.timestamp').text(strftime('%H:%M:%S %P', new Date(data.created_at)));
    activityEl.find('.avatar img').attr('src', 'https://twitter.com/' + data.username + '/profile_image?size=original');
    activityEl.find('.like-count').text(data.likes);

    $(this.el.querySelector('#activities')).prepend(activityEl);
  };
  
  TwitterView.prototype.showConnecting = function() {
    $(this.el).find('#connection_problems').show();
  };
  
  TwitterView.prototype.hideConnecting = function() {
    $(this.el).find('#connection_problems').hide();
  };

  var TwitterViewerPrototype = Object.create(HTMLElement.prototype);

  TwitterViewerPrototype.createdCallback = function() {    
    this.view = new TwitterView(this);
  }
  
  TwitterViewerPrototype.attachedCallback = function() {
    var self = this;
    
    var pusher = new Pusher('58bf44e68fd76b7254c2');
    
    pusher.connection.bind('state_change', function(change) {
      if(change.current !== 'connected') {
        self.view.showConnecting();
      }
      else { // connected
        self.view.hideConnecting();
      }
    });
    
    pusher.subscribe('tweets').bind('new-tweet', function(data) {
      self.view.addActivity('status', {
        username: data.user.screen_name,
        text: data.text,
        id: data.id_str,
        created_at: data.created_at
      })
    });
  };

  document.registerElement('twitter-viewer', {
    prototype: TwitterViewerPrototype
  });

} )( document._currentScript || document.currentScript );
