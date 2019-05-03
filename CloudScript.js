handlers.ReturnDictionary = function (args, context)
{    
  var dict = {};

      dict["one"] = 1;

      dict["two"] = 2;

  var dictString = JSON.stringify(dict);
  return dictString;

}
