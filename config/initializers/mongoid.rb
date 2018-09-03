module BSON
  class ObjectId
    def to_json(*)
      to_s.to_json
    end

    def as_json(*)
      to_s.as_json
    end
  end
end

module Mongoid
  module Document
    def as_json(options = {})
      attrs = super(options)
      attrs["id"] = attrs.delete("_id") if attrs.key?("_id")
      attrs
    end

    def serializable_hash(options = nil)
      h = super(options)
      h["id"] = h.delete("_id") if h.key?("_id")
      h
    end
  end
end
