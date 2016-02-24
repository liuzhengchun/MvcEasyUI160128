using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcEasyUI160128.Common
{
    public class ValidationClass
    {
        public string Vali_filename(string val,int minSize,int MaxSize) {
            string result ="1|";
            if (val.Length < minSize || val.Length > MaxSize) {
                result = String.Format("0|文件名大小必须在{0}到{1}", minSize, MaxSize);
            }
            return result;
        }
    }
}