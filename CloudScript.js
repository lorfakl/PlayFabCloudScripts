handlers.ReturnDictionary = function (args, context)
{    
  var dict = {};

      dict["one"] = 1;

      dict["two"] = 2;

  String(dict);
  return dict;

}
