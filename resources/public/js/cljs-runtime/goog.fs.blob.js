goog.provide("goog.fs.blob");
goog.require("goog.array");
goog.fs.blob.getBlob = function(var_args) {
  var BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (BlobBuilder !== undefined) {
    var bb = new BlobBuilder;
    for (var i = 0; i < arguments.length; i++) {
      bb.append(arguments[i]);
    }
    return bb.getBlob();
  } else {
    return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments));
  }
};
goog.fs.blob.getBlobWithProperties = function(parts, opt_type, opt_endings) {
  var BlobBuilder = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
  if (BlobBuilder !== undefined) {
    var bb = new BlobBuilder;
    for (var i = 0; i < parts.length; i++) {
      bb.append(parts[i], opt_endings);
    }
    return bb.getBlob(opt_type);
  } else {
    if (goog.global.Blob !== undefined) {
      var properties = {};
      if (opt_type) {
        properties["type"] = opt_type;
      }
      if (opt_endings) {
        properties["endings"] = opt_endings;
      }
      return new Blob(parts, properties);
    } else {
      throw new Error("This browser doesn't seem to support creating Blobs");
    }
  }
};

//# sourceMappingURL=goog.fs.blob.js.map
