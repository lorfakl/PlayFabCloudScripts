handlers.ReturnDictionary = function (args, context)
{    
  var dict = "a string";

      dict["one"] = 1;

      dict["two"] = 2;

  JSON.stringify(dict);
  return dict;

}
