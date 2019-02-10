

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace academia_corpo_e_acao
{
    public class UsuarioViewModelPasswordAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            UsuarioViewModel user = (UsuarioViewModel)validationContext.ObjectInstance;

            if (!user.Senha.Where(c => @"!@#$%¨&*_+-=?\/".IndexOf(c) > -1).Any())
            {
                return new ValidationResult("A senha deve conter algum caractere especial.");
            }

            if (user.Senha == user.Login)
            {
                return new ValidationResult("Senha deve ser diferente do login.");
            }

            if (user.Senha.Length < 8)
            {
                return new ValidationResult("Deve ter mais de 8 caracteres.");
            }

            if (String.IsNullOrEmpty(user.Senha))
            {
                return new ValidationResult("Campo obrigatório.");
            }

            return ValidationResult.Success;
        }
    }
}